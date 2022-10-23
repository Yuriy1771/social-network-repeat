import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {addMessageAC, updateNewMessageAC} from "../../Redux/state";


function Dialogs(props) {

    let newDialog = props.state.dialogsPage.dialogs.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>
        )
    })

    let newMessage = props.state.dialogsPage.messages.map((m) => {
        return (
            <MessageItem message={m.message} id={m.id}/>
        )
    })

    let onAddMessage = () => {
        props.dispatch(addMessageAC());

    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageAC(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {newDialog}
            </div>
            <div className={classes.messages}>
                {newMessage}
                <div className={classes.addMessage}>
                    <textarea value={props.newMessageText}
                              onChange={ onMessageChange }
                    />
                    <div className={classes.addMessageBtn}>
                        <button onClick={onAddMessage}>Send message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;