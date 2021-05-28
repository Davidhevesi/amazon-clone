import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="flex flex-col justify-between w-64 h-40 bg-gray-100 border-2 border-solid borde rounded-md px-2 py-2 ">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="flex items-center">
              <input className="mr-2" type="checkbox" /> This order contains a
              gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button class="bg-yellow-400 rounded-md w-full h-8 border-2 border-solid mt-3">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
