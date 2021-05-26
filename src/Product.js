import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The Lean Start upp</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p>⭐️</p>
        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/51PAIR77wJL._AC_SL520_.jpg" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
