import React from 'react';
import classes from './MyPosts.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function MyPosts(props) {
    return (
        <div>
            <ProfileInfo/>
            <div className={classes.myPosts}>
                <p>My posts</p>
            </div>
            <div className={classes.addPostBlock}>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;