import React from 'react';
import classes from './header.module.scss';
import UsersSearchFormik from "../users/usersSearchForm/UsersSearchFormik";
import {NavLink} from "react-router-dom";
import {FilterFormType} from "../../redux/usersReducer";

type PropTypes = {
    isAuth: boolean,
    login: string | null,
    logout: () =>  void,
    onSearchSubmit: (filter: FilterFormType) => void
}

const Header: React.FC<PropTypes> = ({login, logout, isAuth, onSearchSubmit}) => {
    return (
        <header className={classes.header}>
            {isAuth ? <HeaderContent onSearchSubmit={onSearchSubmit} login={login} logout={logout}/> : <h1 className={classes.logo + ' ' + classes.logo_noAuth}>mashroom</h1>}
        </header>
    );
};

type HeaderContentType = {
    login: string | null,
    logout: () => void,
    onSearchSubmit: (filter: FilterFormType) => void
}

const HeaderContent: React.FC<HeaderContentType> = ({onSearchSubmit}) => {
    return (
        <div >
            <div className={classes.content}>
                <h1 className={classes.logo + ' ' +classes.logo_auth}>mashroom</h1>
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