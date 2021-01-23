import React from 'react';
import classes from './header.module.scss';
import UsersSearchFormik from "./usersSearchForm";
import {NavLink} from "react-router-dom";
import {FilterFormType} from "../../redux/usersReducer";

type PropTypes = {
    onSearchSubmit: (filter: FilterFormType) => void
}

const Header: React.FC<PropTypes> = ({onSearchSubmit}) => {

    return (
        <header className={classes.header}>
            <HeaderContent onSearchSubmit={onSearchSubmit}/>
        </header>
    );
};

type HeaderContentType = {
    onSearchSubmit: (filter: FilterFormType) => void
}

const HeaderContent: React.FC<HeaderContentType> = ({onSearchSubmit}) => {
    return (
        <div>
            <div className={classes.content}>
                <h1 className={classes.logo + ' ' + classes.logo_auth}>mashroom</h1>
                <UsersSearchFormik onSubmit={onSearchSubmit}/>
                <ul className={classes.menu}>
                    <li><NavLink activeClassName={classes.active} to='/profile'>PROFILE</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/users'>USERS</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/dialogs'>MESSAGES</NavLink></li>
                    <NavLink className={classes.settings} activeClassName={classes.active} to='/settings'/>
                </ul>

            </div>
        </div>

    );
};

export default Header;