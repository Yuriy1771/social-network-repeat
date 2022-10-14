import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

function Profile(props) {
    return (
        <div className={classes.profile}>
            <div className={classes.content}>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;