import classes from "./message.module.scss";
import React from "react";
import {useSelector} from "react-redux";
import {getUserId} from "../../../redux/authSelectors";
import {MessageType} from "../../../redux/dialogsReducer";
type PropTypes = {message: MessageType}

const Message: React.FC<PropTypes> = ({message}) => {
    const ownId = useSelector(getUserId);
    const classname = message.senderId === ownId ? classes.message + ' ' + classes.own : classes.message + ' ' + classes.noOwn;
    
    return <div className={classname}>
        <div className={classes.senderName}><p>{message.senderName}</p></div>
        <div className={classes.text}>{message.body}</div>
    </div>
    ;
};
export default Message;