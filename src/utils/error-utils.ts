import {Dispatch} from "redux";
import { setAppError } from "../redux/app-reducer/appReducer";
import {ResponseType} from '../api/api'



export function handleServerAppError<T>(dispatch: Dispatch, data: ResponseType<T>) {
     const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong';
     dispatch(setAppError(message));
 }
