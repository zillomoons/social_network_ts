import ava_1 from "../assets/images/ava_1.jpg";
import ava_7 from "../assets/images/logo.jpg";
import ava_3 from "../assets/images/ava_3.jpg";
import ava_4 from "../assets/images/ava_4.jpg";
import ava_5 from "../assets/images/ava_5.jpg";
import ava_6 from "../assets/images/ava_6.jpg";

export type UserType = {
    id: string
    name: string
    userImage: string
    followed: boolean
    city: string
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
            return {...state, users : [...state.users, ...action.users] }
        default:
            return state;
    }
}
export const changeFollowAC = (userID: string) => {
    return {type: 'CHANGE-FOLLOW', userID} as const;
}
export const setUsersAC = (users: UserType[]) => {
    return {type: 'SET-USERS', users} as const;
}