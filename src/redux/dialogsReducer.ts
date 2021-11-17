import {v1} from "uuid";
import user_ava from "../assets/images/user_ava.png";
import ava_1 from "../assets/images/ava_1.jpg";
import ava_7 from "../assets/images/logo.jpg";
import ava_3 from "../assets/images/ava_3.jpg";
import ava_4 from "../assets/images/ava_4.jpg";
import ava_5 from "../assets/images/ava_5.jpg";
import ava_6 from "../assets/images/ava_6.jpg";
import ava_2 from "../assets/images/ava_2.jpg";

let today = new Date();

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
}

export type ActionTypes = ReturnType<typeof sendMessage>

let initialState = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let newDialogItem = {
                id: v1(), userImage: user_ava, name: 'Someone',
                text: action.text,
                time: today.getHours() + '.' + today.getMinutes()
            }
            return {...state, dialogItems: [...state.dialogItems, newDialogItem], newMessageText: ''};
        default:
            return state;
    }
}
export const sendMessage = (text: string) => ({type: 'SEND-MESSAGE', text} as const);