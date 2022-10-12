import React from 'react';
import classes from "./Post.module.css";

function Post(props) {
    return (
        <div className={classes.item}>
            <div>{props.name}</div>
            <img src="https://i.imgur.com/dmRcOOI.png" alt="avatar" className={classes.avatar}/>
            <span className={classes.textPost}>{props.message}</span>
            <div className={classes.likes}>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;