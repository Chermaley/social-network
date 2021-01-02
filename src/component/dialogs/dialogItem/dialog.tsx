import {NavLink} from "react-router-dom";
import React from "react";
import classes from './dialog.module.scss';
import userPhoto from '../../../assets/img/avatar.png';
import {PhotosType} from "../../../types/types";
type PropTypes = {
    person: string,
    photos: PhotosType,
    id: number
}

const Dialog: React.FC<PropTypes> = ({person, id, photos}) => {
    let path = `/dialogs/${id}`;
    if (person.length > 15) {
        person = person.slice(0,15) + '...';
    }
    return (
        <NavLink to={path} activeClassName={classes.active} className={classes.dialog}>
            <div className={classes.photo}><img src={photos.small || userPhoto} alt=""/></div>
            <div className={classes.name}>{person}</div>
        </NavLink>
    );
};


export default Dialog;