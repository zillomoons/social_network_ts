import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dIalogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Music from "./components/Music";
import Settings from "./components/Settings";

const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Route path={'/profile'} component={Profile}/>
                <Route exact path={'/dialogs'}component={Dialogs}/>
                <Route path={'/news'}component={NewsPage}/>
                <Route path={'/music'}component={Music}/>
                <Route path={'/settings'}component={Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
