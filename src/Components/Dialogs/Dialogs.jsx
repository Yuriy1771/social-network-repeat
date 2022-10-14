import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {

    return(
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

function MessageItem(props) {

    return(
        <div className={classes.message}>{props.message}</div>
    )
}

function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name='Stela' id='1'/>
                <DialogItem name='Igor' id='2'/>
                <DialogItem name='Vika' id='3'/>
                <DialogItem name='Stas' id='4'/>
                <DialogItem name='David' id='5'/>
                <DialogItem name='Lily' id='6'/>
            </div>
            <div className={classes.messages}>
                <MessageItem message='Hi' id='1'/>
                <MessageItem message='How are you?' id='2'/>
                <MessageItem message='Ahaha, this is fun!' id='3'/>
            </div>
        </div>
    )
}

export default Dialogs;