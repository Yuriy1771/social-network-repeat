import React from 'react';
import classes from './MyPosts.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./Post/Post";

function MyPosts(props) {

    let newPost = props.state.profilePage.posts.map((p) => {
        return (
            <Post message={p.message} likesCount={p.likesCount} name={p.name}/>
        )
    })

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
                <div>
                    {newPost}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;