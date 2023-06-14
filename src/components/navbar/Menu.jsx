import React from "react";
import Styles from "./-Navbar.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div id={Styles.MenuBlock}>
      <ul>
        <Link to="/">
          
          <li>HOME</li>
        </Link>
        <li>PRODUCT</li>
        <li>ABOUT</li>
      </ul>
    </div>
  );
};

export default Menu;
