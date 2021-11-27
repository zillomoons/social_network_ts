import {authAPI, profileAPI} from "../api/api";
import { setProfile } from "./profileReducer";
import {AppDispatch, RootState} from "./redux_store";
import { ThunkDispatch} from 'redux-thunk';
import { AnyAction } from 'redux';

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
type ActionsType = ReturnType<typeof setUserAuthData>

export const authReducer = (state: AuthDataType = initialState, action: ActionsType): AuthDataType => {
    switch (action.type){
        case "SET-USER-DATA":
            return {...state, ...action.payload};
        default:
            return state;
    }
}
// ActionCreator
export const setUserAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: 'SET-USER-DATA', payload: {id, email, login, isAuth}} as const;
}
//ThunkCreator
export const getAuthData = () => (dispatch: AppDispatch) =>{
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserAuthData(id, email, login, true));
            id && profileAPI.getProfile(id.toString()).then(data => {
                dispatch(setProfile(data));
            })
        }
    })
};

export const login = (email: string, password: string, rememberMe: boolean, setFieldError: (field: string, message: string | undefined) => void) =>
    (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0){
                 dispatch(getAuthData());
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
                setFieldError('general', message);
            }
        })
};
export const logout = () => (dispatch: AppDispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0){
            dispatch(setUserAuthData(null,null,null,false));
        }
    })

}