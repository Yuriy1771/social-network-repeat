import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import findUsersReducer from "./findUsersReducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: newsReducer,
    sidebar: sidebarReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;