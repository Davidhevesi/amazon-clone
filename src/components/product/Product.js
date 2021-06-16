import React from "react";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [ {}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="flex flex-col items-center justify-self-end mb-4 md:m-3 p-3 w-full max-h-96 min-w-full bg-white z-10 rounded-lg">
      <div className="h-full mb-4">
        <p>{title}</p>
        <p className="mt-1">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img class="max-h-32 object-contain w-full mb-4" alt="item added to the cart" src={image} />
      <button
        onClick={addToBasket}
        className="bg-yellow-400 px-2 border-solid border-2 text-black border-yellow-400"
      >
        Add to basket
      </button>
    </div>
  );
}

export default Product;
