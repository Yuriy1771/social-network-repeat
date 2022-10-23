import React from 'react';
import classes from './MyPosts.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/state";

function MyPosts(props) {

    let newPost = props.state.profilePage.posts.map((p) => {
        return (
            <Post message={p.message} likesCount={p.likesCount} name={p.name}/>
        )
    })


    let addPostElement = () => {
        props.dispatch(addPostAC());
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextAC(text))
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