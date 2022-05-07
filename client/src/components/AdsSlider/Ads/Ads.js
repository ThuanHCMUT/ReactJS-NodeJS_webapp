import React from "react";
import classes from "./Ads.module.css";

const Ads = (props) => {
  return (
    <div className={classes.carousel_inner}>
      <div className={classes.carousel_item}>
        <a className={classes.link_ads} href="https://www.bookswagon.com" title="Upto 45% Discount">
          <img
            className={classes.img_ads}
            src={props.image}
            alt="Upto 45% Discount"
          />
        </a>
      </div>
    </div>
  );
};

export default Ads;
