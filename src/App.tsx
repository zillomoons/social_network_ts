import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Settings from "./components/Settings";
import HomePage from "./components/HomePage";
import DialogsContainer from "./components/dIalogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import { initialize } from './redux/appReducer';
import {RootState} from "./redux/redux_store";
import {Preloader} from "./common/preloader";

type MapDispatchType = {
    initialize: () => void
}
type MapStateType = {
    initializedSuccess: boolean
}

class App extends React.Component<MapDispatchType & MapStateType> {
    componentDidMount() {
        this.props.initialize();
    }
    render() {
        if (!this.props.initializedSuccess){
            return <Preloader />
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <Route exact path='/'><HomePage/></Route>
                <Route exact path='/profile/:userId?'><ProfileContainer/></Route>
                <Route exact path='/dialogs'><DialogsContainer/></Route>
                <Route exact path='/users'><UsersContainer/></Route>
                <Route exact path='/news'><NewsPage/></Route>
                <Route exact path='/settings'><Settings/></Route>
                <Route exact path='/login'><Login/></Route>
            </div>
        );
    }
}
const mapState = (state: RootState) => ({
    initializedSuccess: state.app.initialized,
})

export default compose<React.ComponentType>(
    connect(mapState, {initialize}),
    withRouter
)(App);