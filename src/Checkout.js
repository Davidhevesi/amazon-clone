import React from "react";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="flex p-5 bg-white h-max">
      <div className="checkout_left">
        <img
          className="w-full mb-2"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h2 className="mr-2 p-2 border-b-2">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
