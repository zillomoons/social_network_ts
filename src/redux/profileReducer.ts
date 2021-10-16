import {ActionTypes, PostType, ProfilePageType} from "./state";
import {v1} from "uuid";
import user_ava from "../assets/images/user_ava.png";

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: v1(), message: state.newPostText,
                likesCount: 0, userImage: user_ava
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case "UPDATE-POST":
            if (action.newText != null) {
                state.newPostText = action.newText;
            }
            return state;
        default:
            return state;
    }
}
export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updatePostAC = (text: string) => ({ type: 'UPDATE-POST', newText: text} as const)