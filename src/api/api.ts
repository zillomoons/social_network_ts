import axios from "axios";
import {UserType} from "../redux/usersReducer";
import {AuthDataType} from "../redux/authReducer";
import {ProfileInfoType} from "../redux/profileReducer";

type UsersDataType = {
    items: UserType[]
    totalCount: number
}
type FollowDataType = {
    resultCode: number
}
type DataType = {
    data: AuthDataType
    resultCode: number
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'fcb32a2d-632d-4015-bf04-3cd982002469'
    }
})
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<UsersDataType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    followUser(id: number){
        return instance.post<FollowDataType>(`follow/${id}`).then(res => res.data)
    },
    unfollowUser(id: number){
        return instance.delete<FollowDataType>(`follow/${id}`).then(res=> res.data)
    }
}

export const authAPI = {
    authMe(){
        return instance.get<DataType>(`auth/me`).then(res=> res.data)
    }
}
export const profileAPI = {
    getProfile(userId: string){
        return instance.get<ProfileInfoType>(`profile/${userId}`).then(res=>res.data)
    }
}

