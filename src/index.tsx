import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './index.css';
import {
    addMessageCallback,
    addPostCallback,
    RootStateType,
    state, subscribe,
    updateNewMessageText,
    updateNewPostText
} from "./components/redux/state";

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 updateNewPostText={updateNewPostText}
                 addPostCallback={addPostCallback}
                 addMessageCallback={addMessageCallback}
                 updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);


