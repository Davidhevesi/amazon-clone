import React from "react";
import { useStateValue } from "../../StateProvider";
import Subtotal from "../subtotal/Subtotal";

import CheckoutProduct from "./CheckoutProduct";


const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="flex p-5 bg-white h-max">
      <div className="checkout_left">
        <img
          className="w-full mb-2"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h3 className="text-gray-800 text-2xl">Hello {user?.email}</h3>
          <h2 className="mr-2 p-2 border-b-2">Your shopping basket</h2>
        </div>

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
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
