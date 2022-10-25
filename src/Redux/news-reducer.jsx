const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEWS_POST_TEXT = 'UPDATE-NEWS-POST-TEXT';

let initialState = {
    news: [
        {
            id: 1,
            avatar: "https://i.imgur.com/dmRcOOI.png",
            name: 'Yuriy',
            textNews: 'I was recently in the desert and this is the sunset I managed to photograph🌆',
            imgNews: 'https://i.pinimg.com/originals/98/82/d4/9882d4ce3b6cd15cbc3c2a49b7e3a24d.jpg',
            likesCount: 17,
        },
        {
            id: 2,
            avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1665922271~exp=1665922871~hmac=d991083635ddce751d0ffca987adebaa59b751da06e7cc584828800a7ccef4e6',
            name: 'Stela',
            textNews: 'This is Paris baby!',
            imgNews: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxH_Irr22CoCBxL406yY-5iSBqs9aOaoGKoiAcO0JXN3sgsbSr61LtKdg_MwFEJUKwPE&usqp=CAU',
            likesCount: 28,
        },
        {
            id: 3,
            avatar: 'https://img.freepik.com/free-photo/https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?w=740&t=st=1665924138~exp=1665924738~hmac=30cfa413717ec5655e357656e236521ae857e00a288d7f3d329e6e121ed3e706',
            name: 'Igor',
            textNews: 'Sea, sunset, summer ...',
            imgNews: 'https://i.pinimg.com/236x/e0/4f/7a/e04f7a1da23b645de18d885009c6aa67.jpg',
            likesCount: 53,
        },
        {
            id: 4,
            avatar: 'https://img.freepik.com/free-photo/https://https://img.freepik.com/premium-photo/portrait-confident-beautiful-brunette-woman-turning-face-camera-with-dreamy-look-white_1258-19144.jpg?w=740',
            name: 'Lily',
            textNews: 'I was in Paris with my friend Stela',
            imgNews: 'https://www.state.gov/wp-content/uploads/2018/11/France-1980x1406.jpg',
            likesCount: 22,
        },
        {
            id: 5,
            avatar: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000',
            name: 'Nika',
            textNews: 'Wow, this is a wonderful picture!',
            imgNews: 'https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg?w=1600&h=1200&q=88&f=ee2b0e8d2fcaeb2fb7313f07712a2440',
            likesCount: 32,
        },
    ],
    newPostText: '',
    newPostImg: '',
}

const newsReducer = (state = initialState, action) => {

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