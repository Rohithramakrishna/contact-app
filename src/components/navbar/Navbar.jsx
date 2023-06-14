import React from "react";
import Styles from "./-Navbar.module.css";
import Logo from "./Logo";
import Auth from "../navbar/Auth";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <section id={Styles.navbarBlock}>
      <article>
        <Logo />
        <Menu/>
        <Auth />
      </article>
    </section>
  );
};

export default Navbar;
