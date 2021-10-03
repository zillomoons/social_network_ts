import ava_1 from "../../assets/images/ava_1.jpg";
import ava_2 from "../../assets/images/ava_2.jpg";
import ava_3 from "../../assets/images/ava_3.jpg";
import ava_4 from "../../assets/images/ava_4.jpg";
import ava_5 from "../../assets/images/ava_5.jpg";
import ava_6 from "../../assets/images/ava_6.jpg";
import ava_7 from "../../assets/images/logo.jpg";
import user_ava from "../../assets/images/user_ava.png"
import {v1} from "uuid";

let rerenderEntireTree = (state: RootStateType) => {
    console.log('state has changed')
}

export type DialogItemType = {
    id: string
    userImage: string
    name: string
    text: string
    time: string
}
export type ContactType = {
    id: string
    name: string
    path: string
    userImage: string
}
export type DialogsPageType = {
    contacts: Array<ContactType>
    dialogItems: Array<DialogItemType>
    newMessageText: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
    userImage: string
}
export type ProfilePageType = { posts : Array<PostType>, newPostText: string }

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Prepare yourself for what may come', likesCount: 45, userImage: ava_1},
            {id: v1(), message: "Bazinga! I don't care", likesCount: 5, userImage: ava_2},
            {id: v1(), message: 'I am not insane. My mother had me tested', likesCount: 12, userImage: ava_3},
            {id: v1(), message: "Here's only one donut left, so wheelchair", likesCount: 3, userImage: ava_4},
            {id: v1(), message: "Are you still depressed, because you're alone and no one loves you?", likesCount: 0, userImage: ava_5},
        ],
        newPostText: ''
    },
    dialogsPage: {
        contacts: [
            {id: v1(), name: 'Nick', path: '/dialogs/1', userImage: ava_1},
            {id: v1(), name: 'John', path: '/dialogs/2', userImage: ava_7 },
            {id: v1(), name: 'Max', path: '/dialogs/3', userImage: ava_3},
            {id: v1(), name: 'Ann', path: '/dialogs/4', userImage: ava_4},
            {id: v1(), name: 'Kate', path: '/dialogs/5', userImage: ava_5},
            {id: v1(), name: 'Rupert', path: '/dialogs/6', userImage: ava_6},
        ],
        dialogItems: [
            {id: v1(), userImage: ava_1, name: 'Nick', text: 'Hey, wassup?', time: '20.00'},
            {id: v1(), userImage: ava_2, name: 'Alex', text: 'alright, and you', time: '20.15'},
            {id: v1(), userImage: ava_1, name: 'Nick', text: 'working', time: '20.35'},
            {id: v1(), userImage: ava_2, name: 'Alex', text: 'you better be))', time: '21.00'},
        ],
        newMessageText: ''
    }
}

export const addPostCallback = () => {
    let newPost = { id: v1(), message: state.profilePage.newPostText, likesCount: 0, userImage: user_ava}
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)
    // state.profilePage.posts = [...state.profilePage.posts, newPost]
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const addMessageCallback = () => {
    let dialogItem = {id: v1(), userImage: user_ava, name: 'Someone', text: state.dialogsPage.newMessageText, time: '15.45'}
    state.dialogsPage.dialogItems.push(dialogItem);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}
export const updateNewMessageText = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export const subscribe = (observer: (state: RootStateType) => void) => {
    rerenderEntireTree = observer;
}