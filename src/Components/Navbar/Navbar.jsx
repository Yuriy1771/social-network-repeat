import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const ActiveLink = ({isActive}) => isActive ? classes.active : classes.item;

function Navbar(props) {
    return (
        <div className={classes.navbarContainer}>
        <div className={classes.navbar}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/profile" className={ActiveLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" className={ActiveLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={ActiveLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={ActiveLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={ActiveLink}>Settings</NavLink>
            </div>
            <div className={classes.itemFindUsers}>
                <NavLink to="/findUsers" className={ActiveLink}>Find Users</NavLink>
            </div>
            <div className={classes.sidebar}>
            <Sidebar state={props.state}/>
            </div>
        </div>
        </div>
    )
}

export default Navbar;