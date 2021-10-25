
export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string | null, large: string | null }
    followed: boolean
}
export type UsersType = {
    users: UserType[]
}
const initialState =  {
    users: []
}
type ActionType = ReturnType<typeof changeFollowAC> | ReturnType<typeof setUsersAC>

export const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case 'CHANGE-FOLLOW':
            return {...state, users : state.users.map(u=> u.id === action.userID
                    ? {...u, followed: !u.followed} : u)}
        case "SET-USERS":
            return {...state, users : [...state.users,...action.users] }
        default:
            return state;
    }
}
export const changeFollowAC = (userID: number) => {
    return {type: 'CHANGE-FOLLOW', userID} as const;
}
export const setUsersAC = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const;
}