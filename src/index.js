import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './Redux/state';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText,} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
