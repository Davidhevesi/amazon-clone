import React from "react";
import { useStateValue } from "../../StateProvider";


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="flex mt-5 mb-5 border-b border-solid border-gray-300 pb-4">
      <img className="object-cover w-44 h-44" src={image} />
      <div className="pl-5">
        <p className="font-medium text-base">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex mb-4">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        {!hideButton && (
          <button
            onClick={removeFromBasket}
            className="bg-yellow-400 px-2 border-solid border-2 text-black border-yellow-400"
          >
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
