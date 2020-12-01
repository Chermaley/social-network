import React from "react";
import classes from './friendList.module.scss';
import FriendListItem from "./friendListItem";
import PropTypes from 'prop-types';

const FriendList = ({friends : friendsData}) => {
    const friends = friendsData.map(({name, id, photo}) => {
        return <FriendListItem name={name} key={id} photo={photo}/>;
    });
    return (
        <>
            <div className={classes.title}>My friends</div>
            <div className={classes.wrapper}>
                {friends}
            </div>
        </>
    );
};

FriendList.propTypes = {
    friends: PropTypes.any
};

export default FriendList;

