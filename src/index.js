import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
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
                    dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

reportWebVitals();
