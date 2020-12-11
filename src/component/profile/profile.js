import React from 'react';
import classes from './profile.module.scss';
import ProfileInfo from "./profileInfo/profileInfo";
import PropTypes from 'prop-types';
import MyPosts from "./myPosts/myPosts";


const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo saveProfile={saveProfile} savePhoto={savePhoto} isOwner={isOwner} status={status} profile={profile} updateStatus={updateStatus}/>
            <MyPosts/>
        </div>
    );
};
Profile.propTypes = {
    profile: PropTypes.object,
    status: PropTypes.any,
    updateStatus: PropTypes.func,
    isOwner: PropTypes.bool,
    savePhoto: PropTypes.func,
    saveProfile: PropTypes.any
};
export default Profile;