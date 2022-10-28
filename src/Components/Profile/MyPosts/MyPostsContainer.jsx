import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import storeContext from "../../../storeContext";

function MyPostsContainer(props) {

    return (
        <storeContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPostElement = () => {
                    store.dispatch(addPostAC());
                }

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPostElement}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                />
              }
            }
        </storeContext.Consumer>
    )
}

export default MyPostsContainer;