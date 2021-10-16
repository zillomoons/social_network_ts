import ava_1 from "../assets/images/ava_1.jpg";
import ava_2 from "../assets/images/ava_2.jpg";
import ava_3 from "../assets/images/ava_3.jpg";
import ava_4 from "../assets/images/ava_4.jpg";
import ava_5 from "../assets/images/ava_5.jpg";
import ava_6 from "../assets/images/ava_6.jpg";
import ava_7 from "../assets/images/logo.jpg";
import {v1} from "uuid";
import {addPostAC, profileReducer, updatePostAC} from "./profileReducer";
import {addMessageAC, dialogsReducer, updateMessageAC} from "./dialogsReducer";


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
export type ProfilePageType = { posts : PostType[], newPostText: string }

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updatePostAC>
    | ReturnType<typeof addMessageAC> | ReturnType<typeof updateMessageAC>

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionTypes) => void
}

export const store: StoreType = {
    _state: {
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
                {id: v1(), userImage: ava_1, name: 'Nick', text: 'Hey, wassup?', time: '22.25'},
                {id: v1(), userImage: ava_2, name: 'Alex', text: 'alright, and you', time: '23.15'},
                {id: v1(), userImage: ava_1, name: 'Nick', text: 'working', time: '23.45'},
                {id: v1(), userImage: ava_2, name: 'Alex', text: 'you better be))', time: '01.45'},
            ],
            newMessageText: ''
        }
    },
    _callSubscriber(){
        console.log('state has changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
        // if (action.type === 'ADD-POST'){
        //     let newPost: PostType = { id: v1(), message: this._state.profilePage.newPostText,
        //         likesCount: 0, userImage: user_ava}
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber()
        // } else if (action.type === 'UPDATE-POST'){
        //     if (action.newText != null) {
        //         this._state.profilePage.newPostText = action.newText;
        //     }
        //     this._callSubscriber();
        // } else if (action.type === 'SEND-MESSAGE') {
        //     let dialogItem = {id: v1(), userImage: user_ava, name: 'Someone',
        //         text: this._state.dialogsPage.newMessageText,
        //         time: today.getHours()+'.'+ today.getMinutes()}
        //     this._state.dialogsPage.dialogItems.push(dialogItem);
        //     this._state.dialogsPage.newMessageText = '';
        //     this._callSubscriber();
        // } else if (action.type === 'UPDATE-MESSAGE'){
        //     if (action.newText != null) {
        //         this._state.dialogsPage.newMessageText = action.newText;
        //     }
        //     this._callSubscriber();
        // }
    }
}






