import axios from "axios";
import {UserType} from "../redux/users-reducer/usersReducer";
import {AuthDataType} from "../redux/auth-reducer/authReducer";
import {ProfileType, UpdateProfileType} from "../redux/profile-reducer/profileReducer";


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
                ? '' : `&friend=${friend}`))
    },
    followUser(id: number) {
        return instance.post<ResponseType>(`follow/${id}`)
    },
    unfollowUser(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
    },
}

export const authAPI = {
    authMe() {
        return instance.get<ResponseType<AuthDataType>>(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean, captcha?: string) {
        return instance.post<ResponseType<LoginData>>(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete<ResponseType<LoginData>>(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data);
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data);
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status}).then(res => res.data);
    },
    uploadUserPhoto(photo: File) {
        const formData = new FormData();
        formData.append('image', photo);
        return instance.put<ResponseType<ResPhotoType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    updateProfileData(model: UpdateProfileType) {
        return instance.put<ResponseType>('profile', model).then(res => res.data)
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get<CaptchaResType>('security/get-captcha-url').then(res => res.data)
    }
}


//Types

export type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
type UsersDataType = {
    items: UserType[]
    totalCount: number
}
type CaptchaResType = { url: string }
type LoginData = {
    email: string
    password: string
    rememberMe: boolean
}
type ResPhotoType = {
    photos: {
        small: string
        large: string
    }
}