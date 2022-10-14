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

    let dialogs = [
        {id : 1, name : 'Stela'},
        {id : 2, name : 'Igor'},
        {id : 3, name : 'Vika'},
        {id : 4, name : 'Stas'},
        {id : 5, name : 'David'},
        {id : 6, name : 'Lily'},
    ]

    let newDialog = dialogs.map((d) => {
        return (
        <DialogItem name={d.name} id={d.id}/>
        )
    })

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Ahaha, this is fun!'},
    ]

    let newMessage = messages.map((m) => {
        return (
            <MessageItem message={m.message} id={m.id} />
        )
    })


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {newDialog}
            </div>
            <div className={classes.messages}>
                {newMessage}
            </div>
        </div>
    )
}

export default Dialogs;