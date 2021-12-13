import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Settings from "./components/Settings";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {compose} from 'redux';
import {initialize} from './redux/appReducer';
import {RootState, store} from "./redux/redux_store";
import {Preloader} from "./common/preloader/preloader";
import HomePage from "./components/HomePage";
import {WithSuspense} from "./hoc/withSuspence";
const ProfileContainer = React.lazy(()=> import("./components/profile/ProfileContainer"));
const DialogsContainer = React.lazy(()=> import('../src/components/dIalogs/DialogsContainer'));

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
        if (!this.props.initializedSuccess) {
            return <Preloader/>
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <Route exact path='/' render={() => <HomePage/>}/>
                <Route exact path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                <Route exact path='/dialogs' render={ WithSuspense(DialogsContainer) }/>
                <Route exact path='/users' render={() => <UsersContainer/>}/>
                <Route exact path='/news' render={() => <NewsPage/>}/>
                <Route exact path='/settings' render={() => <Settings/>}/>
                <Route exact path='/login' render={() => <Login/>}/>
            </div>
        );
    }
}

const mapState = (state: RootState) => ({
    initializedSuccess: state.app.initialized,
})

const AppContainer = compose<React.ComponentType>(
    connect(mapState, {initialize}),
    withRouter
)(App);

const SNGlobalApp = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}
export default SNGlobalApp;
