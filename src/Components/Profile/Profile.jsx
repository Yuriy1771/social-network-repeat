import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={classes.profile}>
            <div className={classes.content}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer

                />
            </div>
        </div>
    )
}

export default Profile;