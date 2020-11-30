import React from 'react';

import classes from './profile.module.scss';
import ProfileInfo from "./profileInfo/profileInfo";
import PropTypes from 'prop-types';
import MyPostsContainer from "./myPosts/myPostsContainer";

const Profile = ({store}) => {

    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    );
};
Profile.propTypes = {
    store: PropTypes.object
}
export default Profile;