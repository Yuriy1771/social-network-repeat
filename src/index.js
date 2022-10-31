import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App

                    />
                </Provider>
            </BrowserRouter>
);


reportWebVitals();
