import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import RoomIcon from "@material-ui/icons/Room";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="h-16 flex items-center bg-gray-800 sticky z-50">
      <Link to="/">
        <img
          className="w-24 object-contain mt-8 mb-5 m-5"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="flex flex-col ml-3 text-white">
        <span className="text-xs text-gray-300 font-mono text-left pl-5">Hello</span>
        <div className="flex">
          <RoomIcon className="" fontSize="small" />
          <span className="text-base font-bold">Select your address</span>
        </div>
      </div>
      <div className="shadow flex flex-1 pl-4">
        <input
          className="w-full rounded p-2"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-yellow-400 -ml-4 rounded-lg w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
          <SearchIcon className="text-gray-500 h-2" />
        </button>
      </div>
      <div className="flex justify-evenly mr-8">
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className="flex flex-col ml-4 text-white"
          >
            <span className="text-small">
              {!user ? "Hello Guest" : user.email}
            </span>
            <span className="text-base font-medium">
              {user ? "Sign Out" : "Sign in"}
            </span>
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
            <ShoppingBasketIcon className="ml-2" />
            <span className="ml-2">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
