import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./redux_store";
import {AnyAction} from "redux";
import {getAuthData} from "./authReducer";

enum ACTION_TYPES {
    APP_INITIALIZED_SUCCESS = 'social_network/app/INITIALIZED_SUCCESS',
}

type AppType = {
    initialized: boolean
}
type ActionType = ReturnType<typeof initializedSuccess>

const initialState: AppType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: ActionType): AppType => {
    switch (action.type) {
        case ACTION_TYPES.APP_INITIALIZED_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
//actionCreators
export const initializedSuccess = () => {
    return {type: ACTION_TYPES.APP_INITIALIZED_SUCCESS, payload: {initialized: true}} as const;
}
//thunkCreators
export const initialize = () => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    await dispatch(getAuthData());
    dispatch(initializedSuccess());
}