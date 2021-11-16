import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Settings from "./components/Settings";
import HomePage from "./components/HomePage";
import DialogsContainer from "./components/dIalogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import {Login} from "./components/login/Login";


const App = () => {

    return (
        <div className="App">
            <HeaderContainer />
            <Route exact path='/' ><HomePage/></Route>
            <Route exact path='/profile/:userId?' ><ProfileContainer /></Route>
            <Route exact path='/dialogs'><DialogsContainer /></Route>
            <Route exact path='/users'><UsersContainer /></Route>
            <Route exact path='/news' ><NewsPage/></Route>
            <Route exact path='/settings'><Settings/></Route>
            <Route exact path='/login'><Login /></Route>
        </div>
    );
}

export default App;
