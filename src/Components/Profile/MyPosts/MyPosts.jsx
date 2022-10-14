import React from 'react';
import classes from './MyPosts.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./Post/Post";

function MyPosts(props) {

    let posts = [
        {message: 'Hi, how are you?', likesCount: '12', name: 'Yuriy'},
        {message: 'Lol, this video is really cool!', likesCount: '21', name: 'Yuriy'},
    ]

    let newPost = posts.map((p) => {
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