import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Profile} from "./components/profile/Profile";
import {Route} from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Settings from "./components/Settings";
import HomePage from "./components/HomePage";
import {DialogsContainer} from "./components/dIalogs/DialogsContainer";
import {UsersContainer} from "./components/users/UsersContainer";


const App = () => {

    return (
        <div className="App">
            <Header/>
            <Route exact path={'/'}><HomePage/></Route>
            <Route exact path={'/profile'}><Profile/></Route>
            <Route exact path={'/dialogs'}><DialogsContainer /></Route>
            <Route exact path={'/users'}><UsersContainer /></Route>
            <Route exact path={'/news'}><NewsPage/></Route>
            <Route exact path={'/settings'}><Settings/></Route>
        </div>
    );
}

export default App;
