import React from "react";
import Styles from "./-Navbar.module.css";
import { IoMdInfinite } from "react-icons/io";


const Logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <h1>
        <span className={Styles.icon}>
          <IoMdInfinite />
        </span>
        <span>EMP-INFO</span>
      </h1>
    </div>
  );
};

export default Logo;
