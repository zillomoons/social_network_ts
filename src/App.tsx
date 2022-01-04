import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import NewsPage from "./components/NewsPage";
import Settings from "./components/Settings";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {compose} from 'redux';
import {initialize} from './redux/app-reducer/appReducer';
import {RootState, store} from "./redux/redux_store";
import {Preloader} from "./common/preloader/preloader";
import {WithSuspense} from "./hoc/withSuspence";
import {ErrorSnackBar} from "./common/error_snackbar/error-snackbar";
// import ProfileContainer from "./components/profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import('../src/components/dIalogs/DialogsContainer'));

type MapDispatchType = {
    initialize: () => void
}
type MapStateType = {
    initializedSuccess: boolean
}

class App extends React.Component<MapDispatchType & MapStateType> {
    // catchAllUnhandledErrors = (promiseRejectionEvent:any) => {
    //     alert('some error occured');
    //
    // }
    componentDidMount() {
        this.props.initialize();
        // window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        // window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initializedSuccess) {
            return <Preloader/>
        }
        return (
            <div className="App">
                <HeaderContainer/>
                {/*<Route exact path='/' render={() => <HomePage/>}/>*/}
                {/*<Route exact path='/profile/:userId?' render={() => <ProfileContainer/>}/>*/}
                <Switch>
                    <Route exact path='/' render={()=> <Redirect to='/profile' />} />
                    {/*How to get rid off :userId in path? */}
                    <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)}/>
                    <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <NewsPage/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='*' render={() => <div>404 not found</div>}/>
                </Switch>
                <ErrorSnackBar />
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

const GlobalApp = () => {
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
export default GlobalApp;
