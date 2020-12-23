import React from "react";
import classes from './pageNotFound.module.scss';
const PageNotFound = () => {
    return (
        <div className={classes.pageNotFound}>
            <img src="http://vkclub.su/_data/stickers/gribson/sticker_vk_gribson_019.png" alt=""/>
            <p>Oooops! <br/> Page not found</p>
        </div>
    );
};

export default PageNotFound;