import React from 'react';
import classes from './nav.module.scss';
import {NavLink} from "react-router-dom";

import FriendListWrapper from "./friendList/firendListWrapper";
import {connect} from "react-redux";

const NavBar = () => {

    return (
        <nav className={classes.navbar}>
            <div className={classes.items}>
                <div className={classes.item}><NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink></div>
                <div className={classes.item}><NavLink activeClassName={classes.active} to='/dialogs'>Messages</NavLink></div>
                <div className={classes.item}><NavLink activeClassName={classes.active} to='/users'>Users</NavLink></div>
                <div className={classes.item}><NavLink activeClassName={classes.active} to='/news'>News</NavLink></div>
                <div className={classes.item}><NavLink activeClassName={classes.active} to='/music'>Music</NavLink></div>
                <div className={classes.item}><NavLink activeClassName={classes.active} to='/settings'>Settings</NavLink></div>
            </div>
            <FriendListWrapper/>
        </nav>
    );
};

export default connect()(NavBar);