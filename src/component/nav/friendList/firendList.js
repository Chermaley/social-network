import React from "react";
import classes from './friendList.module.scss';
import FriendListItem from "./friendListItem";
import PropTypes from 'prop-types';

const FriendList = ({state}) => {
    const {friends: friendsData} = state;
    const friends = friendsData.map(({name, id, photo}) => {
        return <FriendListItem name={name} key={id} photo={photo}/>
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
    state: PropTypes.object
}

export default FriendList;

