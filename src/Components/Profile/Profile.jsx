import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import {updateNewPostText} from "../../Redux/state";

function Profile(props) {
    return (
        <div className={classes.profile}>
            <div className={classes.content}>
                <MyPosts
                    state={props.state}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}

export default Profile;