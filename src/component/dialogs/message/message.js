import classes from "./message.module.scss";
import React from "react";
import PropTypes from "prop-types";

const Message = ({label}) => {
    return <div className={classes.message}>{label}</div>;
};
Message.propTypes = {
    label: PropTypes.any
};

export default Message;