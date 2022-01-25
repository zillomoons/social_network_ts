import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../redux_store";
import {AnyAction} from "redux";
import {getAuthData} from "../auth-reducer/authReducer";

enum ACTION_TYPES {
    APP_INITIALIZED_SUCCESS = 'social_network/app/INITIALIZED_SUCCESS',
    APP_SET_APP_ERROR = 'social_network/app/SET_APP_ERROR',
    APP_SET_APP_STATUS = 'social_network/app/SET_APP_STATUS'
}

const initialState = {
    initialized: false,
    error: null as string | null,
    appStatus: 'idle' as AppStatusType
}

export const appReducer = (state = initialState, action: ActionType): InitAppType => {
    switch (action.type) {
        case ACTION_TYPES.APP_INITIALIZED_SUCCESS:
        case ACTION_TYPES.APP_SET_APP_ERROR:
        case ACTION_TYPES.APP_SET_APP_STATUS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
//actionCreators
export const initializedSuccess = () => {
    return {type: ACTION_TYPES.APP_INITIALIZED_SUCCESS, payload: {initialized: true}} as const;
}
export const setAppError = (error: string | null) => ({
    type: ACTION_TYPES.APP_SET_APP_ERROR,
    payload: {error}
} as const);
export const setAppStatus = (appStatus: AppStatusType) => ({type: ACTION_TYPES.APP_SET_APP_STATUS, payload: {appStatus} } as const)

//thunkCreators
export const initialize = () => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    dispatch(setAppStatus('loading'))
    try {
        await dispatch(getAuthData());
        dispatch(initializedSuccess());

    } catch (e: any) {
        dispatch(setAppError(e.message))
    } finally {
        dispatch(setAppStatus('idle'))
    }
}

export type InitAppType = typeof initialState;
type ActionType = ReturnType<typeof initializedSuccess> | ReturnType<typeof setAppError> | ReturnType<typeof setAppStatus>
export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'