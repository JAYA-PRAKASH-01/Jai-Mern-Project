import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigation = useNavigate();
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here </h2>
        <a href="#explore-menu">
          {" "}
          <button> View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
