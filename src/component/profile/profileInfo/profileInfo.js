import classes from "./profileInfo.module.scss";
import React from "react";
import PropTypes from 'prop-types';
import Spinner from "../../common/spinner";

const ProfileInfo = ({profile}) => {

    if (!profile) {
        return <Spinner/>;
    }
    const {photos} = profile;
    return (
        <>
            <div>
                <img src="https://www.meme-arsenal.com/memes/2da86c6f8d24b841b7052e8bd1246fd3.jpg" alt='avatar'/>
            </div>
            <div className={classes.description}>
                <img src={photos.small}/>
            </div>
        </>

    );
};

ProfileInfo.propTypes = {
    profile: PropTypes.object,
    photos: PropTypes.object
};

export default ProfileInfo;