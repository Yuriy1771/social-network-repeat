import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import findUsersReducer from "./findUsersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    sidebar: sidebarReducer,
    findUsersPage: findUsersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;