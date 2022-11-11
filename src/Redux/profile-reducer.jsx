const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {message: 'Hi, how are you?', likesCount: '12', name: 'Yuriy', id: 1,},
        {message: 'Lol, this video is really cool!', likesCount: '21', name: 'Yuriy', id: 2,},
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            let newPost = {
                message: state.newPostText,
                likesCount: '0',
                name: 'Yuriy',
                id: 3,
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }

        default:
            return state
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

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}
export default profileReducer;