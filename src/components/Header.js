import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonText, setButtonText] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { LoggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-orange-100 shadow-lg h-25">
      <div className="logoContainer ">
        <img className="w-25 h-25" src={LOGO_URL} />
      </div>
      <div className="flex items-center font-semibold">
        <ul className="flex items-center p-4 space-x-6 text-gray-700">
          <li className="text-sm">STATUS: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="hover:text-orange-500 transition-colors duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-bold text-lg hover:text-orange-500 transition-colors duration-200">
            <Link to="/cart">🛒 ({cartItems.length})</Link>
          </li>
          <button
            className="ml-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition-all duration-200"
            onClick={() => {
              buttonText === "Login"
                ? setButtonText("Logout")
                : setButtonText("Login");
            }}
          >
            {buttonText}
          </button>
          <li className="font-semibold text-slate-800">Default User</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
