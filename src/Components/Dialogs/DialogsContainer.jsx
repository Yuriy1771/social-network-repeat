import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import storeContext from "../../storeContext";

function DialogsContainer(props) {

    return (
        <storeContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage;

                let onAddMessage = () => {
                    store.dispatch(addMessageAC());

                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageAC(text));
                }
                return <Dialogs
                    addMessage={onAddMessage}
                    updateNewMessageText={onMessageChange}
                    store={props.store}
                    dialogsPage={state}
                />
            }
            }
        </storeContext.Consumer>
    )
}

export default DialogsContainer;