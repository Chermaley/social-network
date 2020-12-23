import React from 'react';
import classes from './header.module.scss';

type PropTypes = {
    isAuth: boolean,
    login: string | null,
    logout: () =>  void
}

const Header: React.FC<PropTypes> = ({isAuth, login, logout}) => {
    return (
        <header className={classes.header}>
            <h1>mashroom</h1>
            <div className={classes.loginBlock}>
                {isAuth ? <div><div>{login}</div> <span onClick={logout}>Logout</span></div> : null}
            </div>
        </header>
    );
};

export default Header;