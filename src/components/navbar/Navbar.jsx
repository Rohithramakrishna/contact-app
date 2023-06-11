import React from "react";
import Styles from "./-Navbar.module.css";
import Logo from "./Logo";
import Auth from "../navbar/Auth";

const Navbar = () => {
  return (
    <section id={Styles.navbarBlock}>
      <article>
        <Logo />
        <Auth />
      </article>
    </section>
  );
};

export default Navbar;
