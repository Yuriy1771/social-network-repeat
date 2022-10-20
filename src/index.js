import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    addMessage={store.addMessage.bind(store)}
                    updateNewMessageText={store.updateNewMessageText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
