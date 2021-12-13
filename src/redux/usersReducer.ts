import {AppDispatch} from "./redux_store";
import {FollowDataType, usersAPI} from "../api/api";

enum ACTIONS_TYPE {
    USERS_CHANGE_FOLLOW = 'social_network/users/CHANGE_FOLLOW',
    USERS_SET_USERS = 'social_network/users/SET_USERS',
    USERS_SET_CURRENT_PAGE = 'social_network/users/SET_CURRENT_PAGE',
    USERS_SET_FILTER = 'social_network/users/SET_FILTER',
    USERS_SET_TOTAL_USERS_COUNT = 'social_network/users/SET_TOTAL_USERS_COUNT',
    USERS_TOGGLE_FETCHING = 'social_network/users/TOGGLE_FETCHING',
    USERS_TOGGLE_FOLLOW_PROGRESS = 'social_network/users/TOGGLE_FOLLOW_PROGRESS',
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string | null, large: string | null }
    followed: boolean
}
// export type UsersType = {
//     users: UserType[]
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching: boolean
//     followInProgress: number[]
//     filter: {
//         term: string
//         friend: null | boolean
//     }
// }

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: [] as Array<number>,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}
export type UsersInitState = typeof initialState;

type ActionType = ReturnType<typeof changeFollow> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleFollowInProgress>
    | ReturnType<typeof setFilter>

export const usersReducer = (state = initialState, action: ActionType): UsersInitState => {
    switch (action.type) {
        case ACTIONS_TYPE.USERS_CHANGE_FOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userID
                    ? {...u, followed: action.follow} : u)
            }
        case ACTIONS_TYPE.USERS_SET_USERS:
            return {...state, users: action.users};
        case ACTIONS_TYPE.USERS_SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case ACTIONS_TYPE.USERS_SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case ACTIONS_TYPE.USERS_TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching};
        case ACTIONS_TYPE.USERS_TOGGLE_FOLLOW_PROGRESS:
            return {
                ...state,
                followInProgress:
                    action.isFetching
                        ? [...state.followInProgress, action.id]
                        : state.followInProgress.filter(num => num !== action.id)
            };
        case ACTIONS_TYPE.USERS_SET_FILTER:
            return {...state, filter: action.payload}
        default:
            return state;
    }
}

// ActionCreators
export const changeFollow = (userID: number, follow: boolean) => {
    return {type: ACTIONS_TYPE.USERS_CHANGE_FOLLOW, userID, follow} as const;
}
export const setUsers = (users: UserType[]) => {
    return {type: ACTIONS_TYPE.USERS_SET_USERS, users} as const;
}
export const setCurrentPage = (currentPage: number) => {
    return {type: ACTIONS_TYPE.USERS_SET_CURRENT_PAGE, currentPage} as const;
}
export const setFilter = (filter: FilterType) => {
    return {type: ACTIONS_TYPE.USERS_SET_FILTER, payload: filter} as const;
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: ACTIONS_TYPE.USERS_SET_TOTAL_USERS_COUNT, totalCount} as const;
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: ACTIONS_TYPE.USERS_TOGGLE_FETCHING, isFetching} as const;
}
export const toggleFollowInProgress = (isFetching: boolean, id: number) => {
    return {type: ACTIONS_TYPE.USERS_TOGGLE_FOLLOW_PROGRESS, isFetching, id} as const;
}
// ThunkCreators
export const requestUsers = (currentPage: number, pageSize: number, filter: FilterType) =>
    async (dispatch: AppDispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setFilter(filter));

        const data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }

const followUnfollowFlow = async (id: number, dispatch: AppDispatch,
                                  apiMethod: (id: number) => Promise<FollowDataType>,
                                  isFollowing: boolean) => {
    dispatch(toggleFollowInProgress(true, id));
    const data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispatch(changeFollow(id, isFollowing));
    }
    dispatch(toggleFollowInProgress(false, id))
}
export const followUser = (id: number) => async (dispatch: AppDispatch) => {
    await followUnfollowFlow(id, dispatch, usersAPI.followUser.bind(id), true);
}
export const unfollowUser = (id: number) => async (dispatch: AppDispatch) => {
    await followUnfollowFlow(id, dispatch, usersAPI.unfollowUser.bind(id), false);
}

export type FilterType = typeof initialState.filter