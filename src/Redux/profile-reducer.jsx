const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {message: 'Hi, how are you?', likesCount: '12', name: 'Yuriy', id: 1,},
        {message: 'Lol, this video is really cool!', likesCount: '21', name: 'Yuriy', id: 2,},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                message: state.newPostText,
                likesCount: '0',
                name: 'Yuriy',
                id: 3,
            }
            let copyState = {...state};
            copyState.posts = [...state.posts];
            copyState.posts.push(newPost)
            copyState.newPostText = '';
            return copyState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = {...state};
            copyState.newPostText = action.newText;
            return copyState;
        }
        default: return state
    }
}
export const addPostAC = () => {
    return {
        type: ADD_POST,
    }
}

export const updateNewPostTextAC = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}
export default profileReducer;