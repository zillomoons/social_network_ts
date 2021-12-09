import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Settings from "./components/Settings";
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
import HomePage from "./components/HomePage";

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
                <Route exact path='/' render={()=><HomePage/> } />
                <Route exact path='/profile/:userId?' render={()=><ProfileContainer/>} />
                <Route exact path='/dialogs' render={ ()=><DialogsContainer/> } />
                <Route exact path='/users' render={ ()=><UsersContainer/> } />
                <Route exact path='/news' render={()=><NewsPage /> } />
                <Route exact path='/settings' render={()=><Settings/> } />
                <Route exact path='/login' render={()=><Login/> } />
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