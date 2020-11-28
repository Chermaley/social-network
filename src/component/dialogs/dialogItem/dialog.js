import {NavLink} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import classes from './dialog.module.scss';

const Dialog = ({person, id}) => {
    let path = `/dialogs/${id}`;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{person}</NavLink>
        </div>
    );
};

Dialog.propTypes = {
    person: PropTypes.string,
    id: PropTypes.number,
};

export default Dialog;