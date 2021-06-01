import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import axios from "../../axios";
import { db } from "../../firebase";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { useStateValue } from "../../StateProvider";

const Payment = () => {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState();
  const [processing, setProcessing] = useState();
  const [clientSecret, setClientSecret] = useState();

  const [error, setError] = useState();
  const [disabled, setDisabled] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    //Get the client secrete to be able to charge the card
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //payment intent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };

  useEffect(() => {
    //  generate special stripe secreat that allows us to charge a customer.
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);
  // console.log("Secrete is >>>>>", clientSecret);

  const handleChange = (event) => {
    // Listen to changes in the CardElement
    // display any errors when user types card information
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="bg-white">
      <div>
        <h1 className="text-center p-2 font-bold bg-white border-b-2 border-solid border-gray-200">
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="flex p-5 border-b-2 border-gray-300 m-5 border-solid">
          <div className="">
            <h3 class="font-bold text-lg">Delivery address:</h3>
          </div>
          <div className="ml-4">
            <p>{user?.email}</p>
            <p>321 Riverside</p>
            <p>Atlanta, Ga</p>
          </div>
        </div>
        {/* Payment section Review items */}
        <div className="flex p-5 m-5 border-b-2 border-gray-700 border-solid">
          <div className="">
            <h3 class="font-bold text-lg">Review items in the order:</h3>
          </div>

          <div>
            {basket.map((item) => (
              <CheckoutProduct
                className=""
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section- Payment method */}
        <div className="">
          <div className="">
            <h3 class="font-bold text-lg">Payment Method:</h3>
          </div>
          <div>
            <form className="max-w-screen-small" onSubmit={handleSubmit}>
              <CardElement onchange={handleChange} />
              <div className="payment_price_container">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({basket.length} items):{" "}
                        <strong>{value}</strong>
                      </p>
                      <small className="flex items-center">
                        <input className="mr-2" type="checkbox" /> This order
                        contains a gift
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  className="bg-yellow-400 border-md w-1/3 h-8 border-solid border-2 font-bold mt-2 border-yellow-500 text-black"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
