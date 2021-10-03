import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dIalogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Music from "./components/Music";
import Settings from "./components/Settings";
import HomePage from "./components/HomePage";
import {RootStateType} from "./components/redux/state";

type AppPropsType = {
    state: RootStateType
    addPostCallback: () => void
    updateNewPostText: (newText: string) => void
    updateNewMessageText: (newMessage: string) => void
    addMessageCallback: () => void
}
const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Route exact path={'/'}><HomePage/></Route>
                <Route exact path={'/profile'}><Profile profilePage={props.state.profilePage}
                                                        addPostCallback={props.addPostCallback}
                                                        updateNewPostText={props.updateNewPostText}/></Route>
                <Route exact path={'/dialogs'}><Dialogs dialogsPage={props.state.dialogsPage}
                                                        addMessageCallback={props.addMessageCallback}
                                                        updateNewMessageText={props.updateNewMessageText}/></Route>
                <Route exact path={'/news'}><NewsPage/></Route>
                <Route exact path={'/music'}><Music/></Route>
                <Route exact path={'/settings'}><Settings/></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
