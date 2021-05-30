import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="flex bg-white ">
      <div className="payment_continer">
        <h1 className="text-center p-2 font-bold bg-white border-b-2 border-solid border-gray-200">
          Checkout (<Link className="text-blue-200" to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section flex p-5">
          <div className="payment_title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>321 Riverside</p>
            <p>Atlanta, Ga</p>
          </div>
        </div>
        {/* Payment section Review items */}
        <div className="payment_section flex p-5">
          <div className="payment_title">
            <h3>Review items in the order</h3>
          </div>

          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
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
        <div className="payment_section flex p-5">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_detail"></div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
