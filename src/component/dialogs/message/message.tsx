import classes from "./message.module.scss";
import React from "react";
type PropTypes = {label: string}
const Message: React.FC<PropTypes> = ({label}) => {
    return <div className={classes.message}>{label}</div>;
};
export default Message;