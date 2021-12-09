import {authAPI, profileAPI} from "../api/api";
import {setProfile} from "./profile-reducer/profileReducer";
import {AppDispatch, RootState} from "./redux_store";
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

enum ACTIONS_TYPE {
    AUTH_SET_USER_DATA = 'social_network/auth/SET_USER_AUTH_DATA',
}

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
    switch (action.type) {
        case ACTIONS_TYPE.AUTH_SET_USER_DATA:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
// ActionCreator
export const setUserAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: ACTIONS_TYPE.AUTH_SET_USER_DATA, payload: {id, email, login, isAuth}} as const;
}
//ThunkCreator
export const getAuthData = () => async (dispatch: AppDispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setUserAuthData(id, email, login, true));

        if (id) {
            let profile = await profileAPI.getProfile(id.toString());
            await profileAPI.getStatus(id.toString());
            dispatch(setProfile(profile));

        }
    }
};

export const login = (email: string, password: string, rememberMe: boolean, setFieldError: (field: string, message: string | undefined) => void) =>
    async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
        let data = await authAPI.login(email, password, rememberMe);

        if (data.resultCode === 0) {
            dispatch(getAuthData());
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
            setFieldError('general', message);
        }

    };
export const logout = () => async (dispatch: AppDispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false));
    }
}