import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin, setFilteredMenu }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  // Handle search functionality
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setFilteredMenu(searchQuery.trim().toLowerCase());
    }
  };

  return (
    <div className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <Link to="/">
          <img src={assets.newlogo} alt="Logo" className="logo" />
        </Link>
      </div>

      {/* Menu */}
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact us")}
          className={menu === "Contact us" ? "active" : ""}
        >
          Contact us
        </a>
        <a
          href="#appdownload"
          onClick={() => setMenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for food items or more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch} 
            className="search-input"
          />
        </div>

        {/* Cart */}
        <div className="navbar-cart">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" className="icon" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="cart-badge"></div>}
        </div>

        {/* Profile Section */}
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            aria-label="Sign In"
            className="navbar-button"
          >
            Sign In
          </button>
        ) : (
          <div className="navbar-profile" role="menu" aria-label="User Profile">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="icon"
              tabIndex={0}
              aria-haspopup="true"
            />
            <ul className="profile-dropdown" role="menu">
              <li
                onClick={() => navigate("/myorders")}
                role="menuitem"
                tabIndex={0}
              >
                <img src={assets.bag_icon} alt="Orders Icon" />
                Orders
              </li>
              <hr />
              <li onClick={logout} role="menuitem" tabIndex={0}>
                <img src={assets.logout_icon} alt="Logout Icon" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
