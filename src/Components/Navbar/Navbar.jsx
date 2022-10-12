import React from 'react';
import classes from './Navbar.module.css';

function Navbar(props) {
    return (
        <div className={classes.navbar}>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="#">Profie</a>
            </div>
            <div className={classes.item}>
                <a href="#">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="#">News</a>
            </div>
            <div className={classes.item}>
                <a href="#">Music</a>
            </div>
            <div className={classes.item}>
                <a href="#">Settings</a>
            </div>
        </div>
    )
}

export default Navbar;