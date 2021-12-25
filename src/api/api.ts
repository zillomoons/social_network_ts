import axios from "axios";
import {UserType} from "../redux/usersReducer";
import {AuthDataType} from "../redux/authReducer";
import {ProfileType, UpdateProfileType} from "../redux/profile-reducer/profileReducer";

type UsersDataType = {
    items: UserType[]
    totalCount: number
}
type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
export type FollowDataType = {
    resultCode: number
}
// type DataType = {
//     data: AuthDataType
//     resultCode: number
// }
type StatusResType={
    resultCode: number
    messages: string[]
    data: {}
}
type LoginData = {
    email: string
    password: string
    rememberMe: boolean
    resultCode: number
    messages: string
}
type ResPhotoType = {
    resultCode: number
    data: {
        photos: {
            small: string
            large: string
        }
    }

}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': process.env.REACT_APP_API_KEY as string
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term = "", friend: null | boolean = null) {
        return instance
            .get<UsersDataType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null
                ? '' : `&friend=${friend}` ))
            .then(res => res.data)
    },
    followUser(id: number){
        return instance.post<FollowDataType>(`follow/${id}`).then(res => res.data);
    },
    unfollowUser(id: number){
        return instance.delete<FollowDataType>(`follow/${id}`).then(res=> res.data);
    },
}

export const authAPI = {
    authMe(){
        return instance.get<ResponseType<AuthDataType>>(`auth/me`).then(res=> res.data);
    },
    login(email: string, password: string, rememberMe: boolean){
        return instance.post<LoginData>(`auth/login`, {email, password, rememberMe})
            .then(res => res.data);
    },
    logout(){
        return instance.delete<LoginData>(`auth/login`).then(res => res.data)
    }
}
export const profileAPI = {
    getProfile(userId: string){
        return instance.get<ProfileType>(`profile/${userId}`).then(res=>res.data);
    },
    getStatus(userId: string){
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data);
    },
    updateStatus(status: string){
        return instance.put<StatusResType>(`profile/status`, {status}).then(res => res.data);
    },
    uploadUserPhoto(photo: File){
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put<ResPhotoType>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    updateProfileData(model: UpdateProfileType){
        return instance.put<ResponseType>('profile', model).then(res => res.data)
    }
}
