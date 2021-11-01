
export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
type ActionsType = ReturnType<typeof setUserAuthData>

export const authReducer = (state: AuthDataType = initialState, action: ActionsType): AuthDataType => {
    switch (action.type){
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export const setUserAuthData = (data: AuthDataType) => {
    return {type: 'SET-USER-DATA', data} as const;
}