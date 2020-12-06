import classes from "./profileInfo.module.scss";
import React from "react";
import PropTypes from 'prop-types';
import Spinner from "../../common/spinner";
import userPhoto from '../../../assets/img/avatar.png';
import ProfileStatus from "../profileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Spinner/>;
    }
    const {photos} = profile;
    return (
        <>
            <div className={classes.description}>
                <img src={photos.small || userPhoto}/>
            </div>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </>

    );
};

ProfileInfo.propTypes = {
    profile: PropTypes.object,
    photos: PropTypes.object,
    status: PropTypes.any,
    updateStatus: PropTypes.func
};

export default ProfileInfo;