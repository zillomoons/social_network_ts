import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {profileReducer} from "./profile-reducer/profileReducer";
import {dialogsReducer} from "./dialogs-reducer/dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
