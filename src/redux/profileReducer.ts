import {ActionTypes, PostType, ProfilePageType} from "./store";
import {v1} from "uuid";
import user_ava from "../assets/images/user_ava.png";
import ava_1 from "../assets/images/ava_1.jpg";
import ava_2 from "../assets/images/ava_2.jpg";
import ava_3 from "../assets/images/ava_3.jpg";
import ava_4 from "../assets/images/ava_4.jpg";
import ava_5 from "../assets/images/ava_5.jpg";

let initialState = {
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
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {
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
export const updatePostAC = (text: string) => ({type: 'UPDATE-POST', newText: text} as const)