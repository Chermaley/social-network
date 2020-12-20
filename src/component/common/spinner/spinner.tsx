import React from "react";
import classes from './spinner.module.scss';
const Spinner = () => {
    return (
        <div className={classes.preloader}>
            <div className={classes.spinner}></div>
        </div>
    );
};

export default Spinner;