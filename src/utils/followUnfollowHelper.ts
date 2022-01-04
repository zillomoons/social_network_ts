import {AxiosResponse} from "axios";
import {changeFollow, toggleFollowInProgress} from "../redux/users-reducer/usersReducer";
import {handleServerAppError} from "./error-utils";
import {Dispatch} from "redux";

export const followUnfollowFlow = async (id: number, dispatch: Dispatch,
                                         apiMethod: (id: number) => Promise<AxiosResponse<any>>,
                                         isFollowing: boolean) => {
    dispatch(toggleFollowInProgress(true, id));
    const {data} = await apiMethod(id);
    if (data.resultCode === 0) {
        dispatch(changeFollow(id, isFollowing));
    } else {
        handleServerAppError(dispatch, data)
    }
    dispatch(toggleFollowInProgress(false, id))
}