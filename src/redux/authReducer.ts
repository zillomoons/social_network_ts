import {AppDispatch} from "./redux_store";
import {authAPI, profileAPI} from "../api/api";
import { setProfile } from "./profileReducer";

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
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}
// ActionCreator
export const setUserAuthData = (data: AuthDataType) => {
    return {type: 'SET-USER-DATA', data} as const;
}
//ThunkCreator
export const getAuthData = () => (dispatch: AppDispatch) =>{
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            let {id} = data.data;
            dispatch(setUserAuthData(data.data));
            id && profileAPI.getProfile(id.toString()).then(data => {
                dispatch(setProfile(data));
            })
        }
    })
}