import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    return (
        <div className={classes.profile}>
            <div className={classes.content}>
                <MyPostsContainer

                />
            </div>
        </div>
    )
}

export default Profile;