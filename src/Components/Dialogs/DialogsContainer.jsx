import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


function mapStateToProps(state) {
    return {
        dialogsPage: state.dialogsPage,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageAC(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;