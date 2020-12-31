import classes from "./message.module.scss";
import React from "react";
import userPhoto from '../../../assets/img/avatar.png';
type PropTypes = {label: string}

const Message: React.FC<PropTypes> = ({label}) => {
    // const classname = id === 1 ? classes.ownMessage : classes.message;
    return <div >
        <div className={classes.photo}><img src={userPhoto} alt="photo"/></div>
        <div className={classes.text}>{label}</div>
    </div>
    ;
};
export default Message;