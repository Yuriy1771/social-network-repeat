import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1'>Stela</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Igor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Vika</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Stas</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>David</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/6'>Lily</NavLink>
                </div>

            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Ahaha, this is fun!</div>
            </div>
        </div>
    )
}

export default Dialogs;