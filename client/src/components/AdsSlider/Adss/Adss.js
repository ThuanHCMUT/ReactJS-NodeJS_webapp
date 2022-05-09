import React from "react";
import classes from "./Adss.module.css";

const Adss = (props) => {
  return (
    <div className={classes.whole}>
        <div className={classes.carousel_inner}>
            <div className={classes.carousel_item}>
                <a className={classes.link_ads} href="https://www.bookswagon.com" title="Icons">
                <img
                    className={classes.img_ads}
                    src={props.image}
                    alt="Icon"
                />
                <p style={{fontSize: '15px'}}>{props.title}</p>
                </a>
            </div>
        </div>
    </div>
  );
};

export default Adss;
