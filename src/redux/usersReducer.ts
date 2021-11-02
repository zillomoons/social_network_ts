export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string | null, large: string | null }
    followed: boolean
}
export type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: number[]
}
const initialState: UsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []

}
type ActionType = ReturnType<typeof changeFollow> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching> | ReturnType<typeof toggleFollowInProgress>

export const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case 'CHANGE-FOLLOW':
            return {
                ...state, users: state.users.map(u => u.id === action.userID
                    ? {...u, followed: action.follow} : u)
            }
        case "SET-USERS":
            return {...state, users: action.users};
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage};
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalCount};
        case "TOGGLE-FETCHING":
            return {...state, isFetching: action.isFetching};
        case "TOGGLE-FOLLOW-PROGRESS":
            return {
                ...state, followInProgress:
                    action.isFetching
                        ? [...state.followInProgress, action.id]
                        : state.followInProgress.filter(num => num !== action.id)
            }
        default:
            return state;
    }
}
export const changeFollow = (userID: number, follow: boolean) => {
    return {type: 'CHANGE-FOLLOW', userID, follow} as const;
}
export const setUsers = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const;
}
export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const;
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', totalCount} as const;
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'TOGGLE-FETCHING', isFetching} as const;
}
export const toggleFollowInProgress = (isFetching: boolean, id: number) => {
    return {type: 'TOGGLE-FOLLOW-PROGRESS', isFetching, id} as const;
}