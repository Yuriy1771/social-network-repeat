import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {

    let state = props.store.getState();

    let addPostElement = () => {
        props.store.dispatch(addPostAC());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPostElement}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;