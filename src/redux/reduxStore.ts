import {createStore, combineReducers} from 'redux'
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

export const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch