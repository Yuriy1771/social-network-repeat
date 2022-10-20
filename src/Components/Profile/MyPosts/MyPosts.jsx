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

    let newPostElement = React.createRef();

    let addPostElement = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }

    return (
        <div>
            <ProfileInfo/>
            <div className={classes.myPosts}>
                <p>My posts</p>
            </div>
            <div className={classes.addPostBlock}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
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