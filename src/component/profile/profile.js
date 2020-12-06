import React from 'react';
import classes from './profile.module.scss';
import ProfileInfo from "./profileInfo/profileInfo";
import PropTypes from 'prop-types';
import MyPosts from "./myPosts/myPosts";


const Profile = ({profile, status, updateStatus}) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo status={status} profile={profile} updateStatus={updateStatus}/>
            <MyPosts/>
        </div>
    );
};
Profile.propTypes = {
    profile: PropTypes.object,
    status: PropTypes.any,
    updateStatus: PropTypes.func
};
export default Profile;