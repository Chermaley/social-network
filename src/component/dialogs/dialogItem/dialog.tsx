import {NavLink} from "react-router-dom";
import React from "react";
import classes from './dialog.module.scss';

type PropTypes = {
    person: string,
    id: number
}

const Dialog: React.FC<PropTypes> = ({person, id}) => {
    let path = `/dialogs/${id}`;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{person}</NavLink>
        </div>
    );
};


export default Dialog;