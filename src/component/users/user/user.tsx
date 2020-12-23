import React from "react";
import classes from './user.module.scss';
import {NavLink} from "react-router-dom";

type PropsType = {
    fullName: string,
    onFollowClick: () => void,
    followStatus: boolean,
    photoUrl: string,
    status: string,
    id: number,
    followingInProgress: Array<number>
}

const User:React.FC<PropsType> = ({fullName, onFollowClick, followStatus,
                                       photoUrl, status,
                                      id: userId, followingInProgress}) => {

    const followUnfollow = followStatus ? 'unfollow' : 'follow';
    return (
        <div className={classes.user}>
            <span>
                <div>
                    <NavLink to={`/profile/${userId}`}>
                        <img src={photoUrl} alt='user photo' className={classes.photo}/>
                    </NavLink>
                </div>
                <div>
                    <button disabled={followingInProgress.some(id => id === userId)} onClick={onFollowClick}>{followUnfollow}</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{fullName}</div><div>{status}</div>
                </span>
            </span>

        </div>
    );
};

export default User;