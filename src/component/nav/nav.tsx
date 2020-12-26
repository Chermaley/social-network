import React from 'react';
import classes from './nav.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import Spinner from "../common/spinner/spinner";
import {getProfileForSideBar} from "../../redux/sidebarReducer";
import {Link} from 'react-router-dom';

const NavBar = () => {
    const login = useSelector((state:AppStateType) => state.auth.email);
    const authProfile = useSelector((state: AppStateType) => state.sidebar.profileData);
    const dispatch = useDispatch();
    const getAuthUserData = () => {
        dispatch(getProfileForSideBar());
    };
    if(!authProfile) {
        getAuthUserData();
        return <Spinner/>;
    }
        return (
            <nav className={classes.navbar}>
                <div className={classes.user}>
                    <div className={classes.photo}><img src={authProfile.photos.small} alt="avatar"/></div>
                    <p className={classes.name}>{authProfile.fullName}</p>
                    <span className={classes.email}>{login}</span>
                    <div className={classes.button}>
                        <Link to={'/'}>Go to profile</Link>
                    </div>
                </div>
                <div className={classes.interesting}>
                    <span className={classes.title}>CAN BE INTERESTING</span>
                    <div className={classes.content}/>
                </div>
            </nav>
        );


};

export default NavBar;