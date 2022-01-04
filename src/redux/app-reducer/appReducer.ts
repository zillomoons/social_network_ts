import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../redux_store";
import {AnyAction} from "redux";
import {getAuthData} from "../auth-reducer/authReducer";

enum ACTION_TYPES {
    APP_INITIALIZED_SUCCESS = 'social_network/app/INITIALIZED_SUCCESS',
    APP_SET_APP_ERROR = 'social_network/app/SET_APP_ERROR',
}

const initialState: InitAppType = {
    initialized: false,
    error: null,
}

export const appReducer = (state = initialState, action: ActionType): InitAppType => {
    switch (action.type) {
        case ACTION_TYPES.APP_INITIALIZED_SUCCESS:
        case ACTION_TYPES.APP_SET_APP_ERROR:
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

//thunkCreators
export const initialize = () => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
        await dispatch(getAuthData());
        dispatch(initializedSuccess());
    } catch (e: any) {
        dispatch(setAppError(e.message))
    }
}

export type InitAppType = {
    initialized: boolean
    error: string | null
}
type ActionType = ReturnType<typeof initializedSuccess> | ReturnType<typeof setAppError>