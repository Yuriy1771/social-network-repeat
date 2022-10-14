import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

function Profile(props) {
    return (
        <div className={classes.profile}>
            <div className={classes.content}>
                <MyPosts/>
                <Post message='Hi, how are you?' likesCount='12' name='Yuriy'/>
                <Post message='Lol, this video is really cool!' likesCount='21' name='Yuriy'/>
            </div>
        </div>
    )
}

export default Profile;