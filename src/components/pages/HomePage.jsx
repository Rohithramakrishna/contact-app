import React from "react";
import image from "../../assets/oie_eR75p8FMBgev.jpg";
import Style from "./_pages.module.css";

const HomePage = () => {
  return (
    <section>
      <article className={Style.mainHome}>
        <div className={Style.leftSide}>
          <h1>
            The Best Employee <br /> Directory App to
            <br /> Instantly Reach
            <br /> Your Entire
            <br /> Company
          </h1>
          <h3>
            Easily find exactly who you're looking for and
            <br /> contact them directly from the app
          </h3>
          <ul>
            <li>Communicate right from the app</li>
            <li>Customize contacts and details</li>
            <li>Comply with privacy regulations</li>
            <li>Contact clients, vendors, suppliers, and more</li>
          </ul>
          <button className={Style.btn1}>START FOR FREE</button>
          <button className={Style.btn2}>BOOK A CALL</button>
        </div>
        <div className={Style.rightSide}>
          <img src={image} alt="" />
        </div>
      </article>
      <footer>
        
      </footer>


    </section>
  );
};

export default HomePage;
