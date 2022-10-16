import React from 'react';
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
const ActiveLink = ({isActive}) => isActive ? classes.ActiveLink : classes.dialog;

function DialogItem(props) {
    return (
        <div className={classes.dialog}>
            <div className={classes.dialogItem}>
                <img src={props.avatar} alt="user-avatar" className={classes.dialogAvatar}/>
            <NavLink to={'/dialogs/' + props.id} className={ActiveLink}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;