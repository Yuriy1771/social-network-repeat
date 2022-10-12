import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

function Profile(props) {
    return (
        <div className={classes.profile}>
            <div className={classes.logo}>
                <img src="https://i.pinimg.com/originals/5c/7d/a0/5c7da0fe7025c9cadd0a1c656e5594c4.jpg"
                     alt="logo-profile"/>
            </div>
            <div className={classes.content}>
                <div className={classes.avatar}>
                    <img src="https://i.imgur.com/dmRcOOI.png" alt="ava"/>
                </div>
                <MyPosts/>
                <Post message='Hi, how are you?' likesCount='12' name='Yuriy'/>
                <Post message='Lol, this video is really cool!' likesCount='21' name='Yuriy'/>
            </div>
        </div>
    )
}

export default Profile;