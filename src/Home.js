import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="w-full"
          src="https://images-na.ssl-images-amazon.com/images/G/01/PLF/Goodthreads/2021/SPRING/Gateway/Hero/GT_W-LOUNGE_GW_HERO_DESKTOP_3000x1200._CB657668339_.jpg"
        />
      </div>
      <div className="home_row">
        <Product />
        <Product />
      </div>
      <div className="home_row">
        {/* Row */}
        {/* Row */}
        {/* Row */}
      </div>
      <div className="home_row">{/* Row */}</div>
    </div>
  );
}

export default Home;
