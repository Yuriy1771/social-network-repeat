import React from 'react';
import classes from './MyPosts.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";

function MyPosts(props) {

    let newPost = props.posts.map((p) => {
        return (
            <Post message={p.message} likesCount={p.likesCount} name={p.name}/>
        )
    })


    let addPostElement = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <ProfileInfo/>
            <div className={classes.myPosts}>
                <p>My posts</p>
            </div>
            <div className={classes.addPostBlock}>
                <textarea onChange={onPostChange} value={props.newPostText}/>
                <div>
                    <button onClick={addPostElement}>Add post</button>
                </div>
                <div>
                    {newPost}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;