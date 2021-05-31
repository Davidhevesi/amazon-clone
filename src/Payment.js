import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] =useState();
  const [disabled, setDisabled] =useState();

  const handleSubmit = e => {

  }
  const handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }
  return (
    <div className="bg-white">
      <div className="">
        <h1 className="text-center p-2 font-bold bg-white border-b-2 border-solid border-gray-200">
          Checkout (
          <Link className="text-purple-400" to="/checkout">
            {basket?.length} items
          </Link>
          )
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
        <div className="flex p-5 border-b-2 border-gray-300 m-5 border-solid">
          <div className="">
            <h3 class="font-bold text-lg">Review items in the order:</h3>
          </div>

          <div className="">
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
        <div className="">
          <div className="flex-1">
            <h3 class="font-bold text-lg">Payment Method:</h3>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <CardElement onchange={handleChange} className="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
