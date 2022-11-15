import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {

    return (
        <div className={classes.header}>
            <img className={classes.logo}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
                 alt="logo"/>
            <div className={classes.loginBlock}>
                <img src="https://i.imgur.com/dmRcOOI.png" alt="ava"/>
                {props.isAuth ? props.login : <NavLink to='/auth'>Login</NavLink>}
                
            </div>
        </div>
    )
}

export default Header;
