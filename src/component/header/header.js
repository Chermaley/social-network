import React from 'react';
import classes from './header.module.scss';
import {NavLink} from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Header = ({isAuth, login, logout}) => {
    return (
        <header className={classes.header}>
            <img alt='logo' src='https://i.exclipart.com/images/mushroom-clipart-realistic-2.png'/>
            <div className={classes.loginBlock}>
                {isAuth
                    ? <div><div>{login}</div> <span onClick={logout}>Logout</span></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;