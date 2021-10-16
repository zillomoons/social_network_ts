import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Profile} from "./components/profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Music from "./components/Music";
import Settings from "./components/Settings";
import HomePage from "./components/HomePage";
import {AppDispatch, RootState} from "./redux/reduxStore";
import {DialogsContainer} from "./components/dIalogs/DialogsContainer";

type AppPropsType = {
    state: RootState
    dispatch: AppDispatch
}
const App = ({state, dispatch, ...props}: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Route exact path={'/'}><HomePage/></Route>
                <Route exact path={'/profile'}>
                    <Profile profilePage={state.profilePage} dispatch={dispatch}/>
                </Route>
                <Route exact path={'/dialogs'}>
                    <DialogsContainer dialogsPage={state.dialogsPage} dispatch={dispatch}/>
                </Route>
                <Route exact path={'/news'}><NewsPage/></Route>
                <Route exact path={'/music'}><Music/></Route>
                <Route exact path={'/settings'}><Settings/></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
