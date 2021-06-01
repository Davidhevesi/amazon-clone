import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }] = useStateValue();

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
      <button
        onClick={(e) => history.push("/payment")}
        class="bg-yellow-400 rounded-md w-full h-8 border-2 border-solid mt-3"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
