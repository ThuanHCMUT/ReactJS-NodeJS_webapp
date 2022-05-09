import React from 'react';
import classes from './Banner.module.css';

const Banner = (props) => {
    return(
        <img className={classes.container} src={props.image} alt="Best Seller"/>
    )
}

export default Banner;