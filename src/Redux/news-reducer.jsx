const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEWS_POST_TEXT = 'UPDATE-NEWS-POST-TEXT';

const newsReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEWS:
            let newNews = {
                id: 6,
                avatar: "https://i.imgur.com/dmRcOOI.png",
                name: 'Yuriy',
                textNews: state.newPostText,
                imgNews: state.newPostImg,
                likesCount: 0,
            }
            state.news.push(newNews);
            state.newPostText = '';
            return state;
        case UPDATE_NEWS_POST_TEXT:
            state.newPostText = action.newText;
            state.newPostImg = action.newImg;
            return state;

        default: return state;
    }
}

export const addNewsAC = () => {
    return {
        type: ADD_NEWS,
    }
}

export const updateNewsTextAC = (text, img) => {
    return {
        type: UPDATE_NEWS_POST_TEXT,
        newText: text,
        newImg: img,
    }
}
export default newsReducer;