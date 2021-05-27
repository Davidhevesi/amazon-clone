import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="h-16 flex items-center bg-gray-800 sticky z-50">
      <Link to="/">
        <img
          className="w-24 object-contain mt-0 mb-5 m-5"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="flex flex-1 items-center border rounde-lg">
        <input class="flex-1" type="text" />
        <SearchIcon className="p-1 h-5 bg-yellow-400" />
      </div>
      <div className="flex justify-evenly">
        <div className="flex flex-col ml-3 text-white">
          <span class="text-small">Hello Guests</span>
          <span class="text-base font-medium">Sign In</span>
        </div>
        <div className="flex flex-col ml-3 text-white">
          <span class="text-small">Returns</span>
          <span class="text-base font-medium">& Orders</span>
        </div>
        <div className="flex flex-col ml-3 text-white">
          <span class="text-small">Your</span>
          <span class="text-base font-medium">Prime</span>
        </div>
        <div class="flex items-center text-white">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
