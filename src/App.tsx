import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dIalogs/Dialogs";

const App = () => {

    return (
        <div className="App">
            <Header />
            <Navbar />
            {/*<Profile />*/}
            <Dialogs />
        </div>
    );
}

export default App;
