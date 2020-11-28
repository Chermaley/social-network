import React from 'react';
import classes from './header.module.scss';
const Header = () => {
    return (
        <header className={classes.header}>
            <img alt='logo' src='https://i.exclipart.com/images/mushroom-clipart-realistic-2.png'/>
        </header>
    );
};

export default Header;