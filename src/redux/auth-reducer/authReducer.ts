import {authAPI, securityAPI} from "../../api/api";
import {AppDispatch, RootState} from "../redux_store";
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction, Dispatch} from 'redux';
import {setAppError} from "../app-reducer/appReducer";
import {handleServerAppError} from "../../utils/error-utils";

enum ACTIONS_TYPE {
    AUTH_SET_USER_DATA = 'social_network/auth/SET_USER_AUTH_DATA',
    AUTH_SET_CAPTCHA = 'social_network/auth/SET_CAPTCHA',
}

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaURL: null as string | null,
}

export const authReducer = (state = initialState, action: ActionsType): InitAuthStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.AUTH_SET_USER_DATA:
        case ACTIONS_TYPE.AUTH_SET_CAPTCHA:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
// ActionCreator
export const setUserAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: ACTIONS_TYPE.AUTH_SET_USER_DATA, payload: {id, email, login, isAuth}} as const;
}
export const setCaptchaURL = (captchaURL: string | null) => ({
    type: ACTIONS_TYPE.AUTH_SET_CAPTCHA,
    payload: {captchaURL}
} as const)

//ThunkCreator
export const getAuthData = () => async (dispatch: Dispatch) => {
    try {
        const  { data } = await authAPI.authMe();
        if (data.resultCode === 0) {
            const {id, login, email} = data.data;
            dispatch(setUserAuthData(id, email, login, true));
            // if (id) {
            //     const { data } = await profileAPI.getProfile(id.toString());
            //     await profileAPI.getStatus(id.toString());
            //     dispatch(setProfile(data));
            // }
        } else {
            handleServerAppError(dispatch, data)
        }
    } catch (e: any) {
        dispatch(setAppError(e.message))
    }
};

export const login = (email: string, password: string,
                      rememberMe: boolean,
                      setFieldError: (field: string, message: string | undefined) => void,
                      captcha?: string | null) => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>, getState: ()=> RootState) => {

        try {
            const { data }  = await authAPI.login(email, password, rememberMe, captcha);
            const currentCaptcha = getState().auth.captchaURL;
            if (data.resultCode === 0) {
                dispatch(getAuthData());
                currentCaptcha && dispatch(setCaptchaURL(null));
            } else {
                if (data.resultCode === 10) {
                    dispatch(getCaptchaURL());
                }
                const message = data.messages.length > 0 ? data.messages[0] : 'Some login error';
                setFieldError('general', message);
            }
        } catch (e: any) {
            dispatch(setAppError(e.message));
        }
    };
export const logout = () => async (dispatch: Dispatch) => {
    try {
        const { data }  = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setUserAuthData(null, null, null, false));
        } else {
            handleServerAppError(dispatch, data);
        }
    } catch (e: any) {
        dispatch(setAppError(e.message))
    }

}

export const getCaptchaURL = () => async (dispatch: AppDispatch) => {
    try {
        const captcha = await securityAPI.getCaptchaURL();
        dispatch(setCaptchaURL(captcha.url));
    } catch (e: any) {
        dispatch(setAppError(e.message));
    }
}

//Types
export type InitAuthStateType = typeof initialState;
type ActionsType = ReturnType<typeof setUserAuthData> | ReturnType<typeof setCaptchaURL>