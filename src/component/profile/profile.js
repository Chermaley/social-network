import React from 'react';
import MyPosts from './myPosts';
import classes from './profile.module.scss';
import ProfileInfo from "./profileInfo/profileInfo";
const Profile = () => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};
export default Profile;