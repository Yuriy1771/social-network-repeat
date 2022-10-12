import React from 'react';
import classes from './Header.module.css';

function Header(props) {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
            <img src="https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg" alt="logo"/>
            </div>
        </div>
    )
}

export default Header;
