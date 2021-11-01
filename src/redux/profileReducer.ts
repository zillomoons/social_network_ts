import {v1} from "uuid";
import user_ava from "../assets/images/user_ava.png";
import ava_1 from "../assets/images/ava_1.jpg";
import ava_2 from "../assets/images/ava_2.jpg";
import ava_3 from "../assets/images/ava_3.jpg";
import ava_4 from "../assets/images/ava_4.jpg";
import ava_5 from "../assets/images/ava_5.jpg";
import ava from "../assets/images/ava.jpg"


export type PostType = {
    id: string
    message: string
    likesCount: number
    userImage: string
}
export type ProfileInfoType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profile: ProfileInfoType | null
}

export type ActionTypes = ReturnType<typeof addPost> | ReturnType<typeof updatePost>
    | ReturnType<typeof setProfile>

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Prepare yourself for what may come', likesCount: 45, userImage: ava_1},
        {id: v1(), message: "Bazinga! I don't care", likesCount: 5, userImage: ava_2},
        {id: v1(), message: 'I am not insane. My mother had me tested', likesCount: 12, userImage: ava_3},
        {id: v1(), message: "Here's only one donut left, so wheelchair", likesCount: 3, userImage: ava_4},
        {
            id: v1(),
            message: "Are you still depressed, because you're alone and no one loves you?",
            likesCount: 0,
            userImage: ava_5
        },
    ],
    newPostText: '',
    profile : null,
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: v1(), message: state.newPostText,
                likesCount: 0, userImage: user_ava
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "UPDATE-POST":
            if (action.newText != null) {
                return {...state, newPostText: action.newText}
            }
            return state;
        case "SET-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state;
    }
}
export const addPost = () => ({type: 'ADD-POST'} as const);
export const updatePost = (text: string) => ({type: 'UPDATE-POST', newText: text} as const);
export const setProfile = (profile: ProfileInfoType) => ({type: 'SET-PROFILE', profile} as const);