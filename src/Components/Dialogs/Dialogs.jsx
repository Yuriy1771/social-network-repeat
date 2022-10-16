import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


function Dialogs(props) {

    let newDialog = props.state.dialogsPage.dialogs.map((d) => {
        return (
        <DialogItem name={d.name} id={d.id}/>
        )
    })

    let newMessage = props.state.dialogsPage.messages.map((m) => {
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