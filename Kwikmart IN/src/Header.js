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
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Logo%2FLogo1.png?alt=media&token=82c59dda-fb91-4b20-8a17-b758ae5b8465"
        />
      </Link>

      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search by categories and products..."
        />
        <SearchIcon className="header_searchIcon" />
        {/* Logo */}
      </div>

      <div className="header_nav">
        <Link to={"/login"}>
          {/* Case 1; User is Signed In: By clicking on Sign out button, the user will get signed out but will be on the home page only. 
          
          Case 2: User is Signed Out: In this case, if we click on Sign In, it will land us on the login page as we have made a condition that if there is no user logged in then only we will get redirected to the login page.  */}
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              {user ? user.email : "Hello Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo"> & Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header_optionBasket">
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
