import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="h-16 flex items-center bg-gray-800 sticky z-50">
      <Link to="/">
        <img
          className="w-24 object-contain mt-8 mb-5 m-5"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="flex flex-1 items-center border rounde-lg">
        <input class="flex-1" type="text" />
        <SearchIcon className="p-1 h-5 bg-yellow-400" />
      </div>
      <div className="flex justify-evenly">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="flex flex-col ml-3 text-white">
            <span className="text-small">{!user ? 'Hello Guest': user.email }</span>
            <span className="text-base font-medium">{ user ? 'Sign Out' : 'Sign in'}</span>
          </div>
        </Link>
        <div className="flex flex-col ml-3 text-white">
          <span className="text-small">Returns</span>
          <span className="text-base font-medium">& Orders</span>
        </div>
        <div className="flex flex-col ml-3 text-white">
          <span className="text-small">Your</span>
          <span className="text-base font-medium">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="flex items-center text-white pt-2 ml-2">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
