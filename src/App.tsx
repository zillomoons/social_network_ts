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
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
}
const App: React.FC<AppPropsType> = ({store}) => {
    let state = store.getState();
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Route exact path={'/'}><HomePage/></Route>
                <Route exact path={'/profile'}>
                    <Profile profilePage={state.profilePage} dispatch={store.dispatch.bind(store)}/>
                </Route>
                <Route exact path={'/dialogs'}>
                    <Dialogs dialogsPage={state.dialogsPage} dispatch={store.dispatch.bind(store)}/>
                </Route>
                <Route exact path={'/news'}><NewsPage/></Route>
                <Route exact path={'/music'}><Music/></Route>
                <Route exact path={'/settings'}><Settings/></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
