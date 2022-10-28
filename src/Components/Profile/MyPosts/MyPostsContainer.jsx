import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

function mapStateToProps(state) {
    return {
        posts : state.profilePage.posts,
        newPostText: state.profilePage.newPostText,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text))
        },
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;