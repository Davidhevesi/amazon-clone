import React from "react";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <div className="flex flex-col justify-between w-64 h-40 bg-gray-100 border-2 border-solid borde rounded-md px-2 py-2 ">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="flex items-center">
              <input className="mr-2" type="checkbox" /> This order contains a
              gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
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
