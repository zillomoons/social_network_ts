import {v1} from "uuid";
import user_ava from "../../assets/images/user_ava.png";
import ava_1 from "../../assets/images/ava_1.jpg";
import ava_3 from "../../assets/images/ava_3.jpg";
import ava_4 from "../../assets/images/ava_4.jpg";
import {AppDispatch} from "../redux_store";
import {profileAPI} from "../../api/api";

enum ACTIONS_TYPE {
    PROFILE_ADD_POST = 'social_network/profile/ADD_POST',
    PROFILE_SET_PROFILE = 'social_network/profile/SET_PROFILE',
    PROFILE_SET_STATUS = 'social_network/profile/SET_STATUS',
    PROFILE_REMOVE_POST = 'social_network/profile/REMOVE_POST',
    PROFILE_SET_PHOTO = 'social_network/profile/SET_PHOTO',
}

export type PostType = {
    id: string
    message: string
    likesCount: number
    userImage: string
}
export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
// export type ProfilePageType = {
//     posts: PostType[]
//     status: string
//     profile: ProfileInfoType
//     newPostText: string
// }

export type ActionTypes = ReturnType<typeof addPost> | ReturnType<typeof setProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof removePost>
    | ReturnType<typeof setPhoto>

const initialState = {
    posts: [
        {id: v1(), message: 'Prepare yourself for what may come', likesCount: 45, userImage: ava_1},
        {id: v1(), message: 'I am not insane. My mother had me tested', likesCount: 12, userImage: ava_3},
        {id: v1(), message: "Here's only one donut left, so wheelchair", likesCount: 3, userImage: ava_4},
    ] as PostType[],
    profile: null as ProfileType | null,
    status: '',
    newPostText: '',
}
export type ProfileInitStateType = typeof initialState;

export const profileReducer = (state = initialState, action: ActionTypes): ProfileInitStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.PROFILE_ADD_POST:
            let newPost: PostType = {id: v1(), message: action.text, likesCount: 0, userImage: user_ava}
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case ACTIONS_TYPE.PROFILE_SET_PROFILE:
            return {...state, profile: action.profile};
        case ACTIONS_TYPE.PROFILE_SET_STATUS:
            return {...state, status: action.status};
        case ACTIONS_TYPE.PROFILE_REMOVE_POST:
            return {...state, posts: [...state.posts.filter(p => p.id !== action.id)]};
        case ACTIONS_TYPE.PROFILE_SET_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state;
    }
}
// ActionCreators
export const addPost = (text: string) => ({type: ACTIONS_TYPE.PROFILE_ADD_POST, text} as const);
export const setProfile = (profile: ProfileType) => ({type: ACTIONS_TYPE.PROFILE_SET_PROFILE, profile} as const);
export const setStatus = (status: string) => ({type: ACTIONS_TYPE.PROFILE_SET_STATUS, status} as const);
export const removePost = (id: string) => ({type: ACTIONS_TYPE.PROFILE_REMOVE_POST, id} as const);
export const setPhoto = (photos: PhotosType ) => ({type: ACTIONS_TYPE.PROFILE_SET_PHOTO, photos} as const);

// ThunkCreators
export const getProfile = (userId: string) => async (dispatch: AppDispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setProfile(data));
}
export const getStatus = (userId: string) => async (dispatch: AppDispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
}
export const updateStatus = (status: string) => async (dispatch: AppDispatch) => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (photo: File) => async (dispatch: AppDispatch) => {
    const data = await profileAPI.uploadUserPhoto(photo);
    if (data.resultCode === 0) {
        dispatch(setPhoto(data.data.photos));
    }
}