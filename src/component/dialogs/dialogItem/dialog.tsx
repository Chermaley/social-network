import {NavLink} from "react-router-dom";
import React from "react";
import classes from './dialog.module.scss';
import userPhoto from '../../../assets/img/avatar.png';
type PropTypes = {
    person: string,
    id: number
}

const Dialog: React.FC<PropTypes> = ({person, id}) => {
    let path = `/dialogs/${id}`;

    return (
        <NavLink to={path} activeClassName={classes.active} className={classes.dialog}>
            <div className={classes.photo}><img src={userPhoto} alt=""/></div>
            <div className={classes.name}>{person}</div>
        </NavLink>
    );
};


export default Dialog;