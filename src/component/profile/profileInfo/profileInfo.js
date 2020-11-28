import classes from "./profileInfo.module.scss";
import React from "react";
const ProfileInfo = () => {
    return (
        <>
            <div>
                <img src="https://www.meme-arsenal.com/memes/2da86c6f8d24b841b7052e8bd1246fd3.jpg" alt='avatar'/>
            </div>
            <div className={classes.description}>
                ava - description
            </div>
        </>

    );
};

export default ProfileInfo;