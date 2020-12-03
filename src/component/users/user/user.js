import React from "react";
import PropTypes from 'prop-types';
import classes from './user.module.scss';
import {NavLink} from "react-router-dom";

const User = ({fullName, onFollowClick, followStatus, location, photoUrl, status, id}) => {
    const followUnfollow = followStatus ? 'unfollow' : 'follow';
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${id}`}>
                        <img src={photoUrl} alt='user photo' className={classes.photo}/>
                    </NavLink>
                </div>
                <div>
                    <button onClick={onFollowClick}>{followUnfollow}</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{fullName}</div><div>{status}</div>
                </span>
                <span>
                    <div>{location}</div>
                </span>
            </span>

        </div>
    );
};
User.propTypes = {
    fullName: PropTypes.any,
    status: PropTypes.any,
    onFollowClick: PropTypes.func,
    followStatus: PropTypes.bool,
    photoUrl: PropTypes.string,
    location: PropTypes.any,
    id: PropTypes.any

};
export default User;