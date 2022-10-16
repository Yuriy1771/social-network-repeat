import React from 'react';
import classes from './Header.module.css';

function Header(props) {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png" alt="logo"/>
            </div>
        </div>
    )
}

export default Header;
