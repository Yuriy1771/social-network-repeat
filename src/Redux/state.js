import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi, how are you?', likesCount: '12', name: 'Yuriy', id: 1,},
                {message: 'Lol, this video is really cool!', likesCount: '21', name: 'Yuriy', id: 2,},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Stela',
                    avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1665922271~exp=1665922871~hmac=d991083635ddce751d0ffca987adebaa59b751da06e7cc584828800a7ccef4e6',
                },
                {
                    id: 2,
                    name: 'Igor',
                    avatar: 'https://img.freepik.com/free-photo/https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?w=740&t=st=1665924138~exp=1665924738~hmac=30cfa413717ec5655e357656e236521ae857e00a288d7f3d329e6e121ed3e706',
                },
                {
                    id: 3,
                    name: 'Nika',
                    avatar: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000',
                },
                {
                    id: 4,
                    name: 'Stas',
                    avatar: 'https://img.freepik.com/free-photo/cool-handsome-redhead-man-smiling-with-confidence-cross-arms-chest-looking-happy-unbothered-standing-casual-relaxed-pose-against-white-background_176420-53795.jpg?t=st=1665924131~exp=1665924731~hmac=c3b39af8f16c07f567f2845144338d9f319c4481e484a2598f26778746439e0c',
                },
                {
                    id: 5,
                    name: 'David',
                    avatar: 'https://img.freepik.com/free-photo/concept-people-young-man-yellow-background_185193-86324.jpg?w=740&t=st=1665924270~exp=1665924870~hmac=cd056926934ea380ec38b78812075cda6920244b0f357b2a390ca143cdb4951f',
                },
                {
                    id: 6,
                    name: 'Lily',
                    avatar: 'https://img.freepik.com/free-photo/https://https://img.freepik.com/premium-photo/portrait-confident-beautiful-brunette-woman-turning-face-camera-with-dreamy-look-white_1258-19144.jpg?w=740',
                },
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Ahaha, this is fun!'},
            ],
            newMessageText: '',
        },
        sidebar: [
            {
                id: 1,
                name: 'Stela',
                avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1665922271~exp=1665922871~hmac=d991083635ddce751d0ffca987adebaa59b751da06e7cc584828800a7ccef4e6',
            },
            {
                id: 2,
                name: 'Igor',
                avatar: 'https://img.freepik.com/free-photo/https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?w=740&t=st=1665924138~exp=1665924738~hmac=30cfa413717ec5655e357656e236521ae857e00a288d7f3d329e6e121ed3e706',
            },
            {
                id: 3,
                name: 'Nika',
                avatar: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000',
            },
        ],
        newsPage: {
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
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.newsPage = newsReducer(this._state.newsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;