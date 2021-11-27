import {ThunkDispatch} from "redux-thunk";
import {RootState} from "./redux_store";
import {AnyAction} from "redux";
import {getAuthData} from "./authReducer";

type AppType = {
    initialized: boolean
}
type ActionType = ReturnType<typeof initializedSuccess>

const initialState: AppType = {
    initialized: false,
}

export const appReducer = (state = initialState, action: ActionType): AppType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, ...action.payload}
        default:
            return state;
    }
}
//actionCreators
export const initializedSuccess = () => {
    return {type: 'INITIALIZED-SUCCESS', payload: {initialized: true}} as const;
}
//thunkCreators
export const initialize = () => (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    let promise = dispatch(getAuthData());
    promise.then(()=>{
        dispatch(initializedSuccess());
    });
}