import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


function DialogsContainer(props) {
    let state = props.store.getState().dialogsPage;

    let onAddMessage = () => {
        props.store.dispatch(addMessageAC());

    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageAC(text));
    }

    return (
        <Dialogs addMessage={onAddMessage}
                 updateNewMessageText={onMessageChange}
                 store={props.store}
                 dialogsPage={state}

        />
    )
}

export default DialogsContainer;