import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// import {state} from './state';

let state = {
    dialogsPage: {
        dialogs: [
            {id : 1, name : 'Stela'},
            {id : 2, name : 'Igor'},
            {id : 3, name : 'Vika'},
            {id : 4, name : 'Stas'},
            {id : 5, name : 'David'},
            {id : 6, name : 'Lily'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Ahaha, this is fun!'},
        ]
    },
    profilePage: {
        posts: [
            {message: 'Hi, how are you?', likesCount: '12', name: 'Yuriy'},
            {message: 'Lol, this video is really cool!', likesCount: '21', name: 'Yuriy'},
        ]
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
    <App state={state}/>
      </BrowserRouter>
  </React.StrictMode>
);



reportWebVitals();
