/* eslint-disable */
import React from "react";
import classes from './user.module.scss';
import {NavLink} from "react-router-dom";

import plus from './Plus-Icon-PNG.png';
import check from './check.png';

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
    return (
        <div className={classes.user}>
            <div className={classes.user}>
                <div>
                    <NavLink to={`/profile/${userId}`}>
                        <img src={photoUrl} alt='user photo' className={classes.user_photo}/>
                    </NavLink>
                </div>
                <div>
                    <div className={classes.user_name}>{fullName}</div><div className={classes.user_status}>{status}</div>
                </div>
                <div>
                    <button className={classes.subscribe}
                            disabled={followingInProgress.some(id => id === userId)}
                            onClick={onFollowClick}>
                            <img src={!followStatus ? plus : check} alt={'follow'}/>
                            </button>
                </div>
            </div>
        </div>
    );
};

export default User;