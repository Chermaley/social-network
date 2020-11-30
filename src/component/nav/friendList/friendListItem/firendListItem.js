import React from "react";
import classes from './friendListItem.module.scss';
import PropTypes from 'prop-types';
const FriendListItem = ({name, photo}) => {
    return (
            <div className={classes.item}>
                <div className={classes.photo}>
                    <img src={photo} alt='user photo'/>
                </div>
                <p>{name}</p>
            </div>
    );
};
FriendListItem.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string
};
export default FriendListItem;

