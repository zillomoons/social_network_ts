import {v1} from "uuid";
import user_ava from "../../assets/images/user_ava.png";
import ava_1 from "../../assets/images/ava_1.jpg";
import ava_4 from "../../assets/images/ava_4.jpg";
import ava_5 from "../../assets/images/ava_5.jpg";
import ava_6 from "../../assets/images/ava_6.jpg";
import ava_2 from "../../assets/images/ava_2.jpg";

enum ACTIONS_TYPE {
    DIALOGS_SEND_MESSAGE = 'social_network/dialogs/SEND_MESSAGE',
    DIALOGS_REMOVE_MESSAGE = 'social_network/dialogs/REMOVE_MESSAGE',
    DIALOGS_EDIT_MESSAGE = 'social_network/dialogs/EDIT_MESSAGE',
    DIALOGS_ADD_CONTACT = 'social_network/dialogs/ADD_CONTACT',
}

const today = new Date();


const initialState = {
    contacts: [
        {id: v1(), name: 'Ann', path: '/dialogs/4', userImage: ava_4},
        {id: v1(), name: 'Kate', path: '/dialogs/5', userImage: ava_5},
        {id: v1(), name: 'Rupert', path: '/dialogs/6', userImage: ava_6},
    ] as ContactType[],
    dialogItems: [
        {id: v1(), userImage: ava_1, name: 'Nick', text: 'Hey, wassup?', time: '22.25'},
        {id: v1(), userImage: ava_2, name: 'Alex', text: 'alright, and you', time: '23.15'},
        {id: v1(), userImage: ava_1, name: 'Nick', text: 'working', time: '23.45'},
    ] as DialogItemType[],
    newMessageText: ''
}
//Action Creators
export const dialogsReducer = (state = initialState, action: ActionTypes): DialogsInitStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.DIALOGS_SEND_MESSAGE:
            let newDialogItem = {
                id: v1(), userImage: user_ava, name: 'Someone',
                text: action.text,
                time: today.getHours() + '.' + today.getMinutes()
            }
            return {...state, dialogItems: [...state.dialogItems, newDialogItem], newMessageText: ''};
        case ACTIONS_TYPE.DIALOGS_REMOVE_MESSAGE:
            return {...state, dialogItems: [...state.dialogItems.filter(d => d.id !== action.id)]};
        case ACTIONS_TYPE.DIALOGS_EDIT_MESSAGE:
            return {
                ...state, dialogItems: [...state.dialogItems.map(d => d.id === action.id
                    ? {...d, text: action.text}
                    : d)]
            };
        case ACTIONS_TYPE.DIALOGS_ADD_CONTACT:
            return {...state, contacts: [...state.contacts, {...action.payload}]}
        default:
            return state;
    }
}
export const sendMessage = (text: string) => ({type: ACTIONS_TYPE.DIALOGS_SEND_MESSAGE, text} as const);
export const removeMessage = (id: string) => ({type: ACTIONS_TYPE.DIALOGS_REMOVE_MESSAGE, id} as const);
export const editMessage = (id: string, text: string) => ({type: ACTIONS_TYPE.DIALOGS_EDIT_MESSAGE, id, text} as const);
export const addContact = (id: string, name: string, userImage: string, path: string) =>
    ({type: ACTIONS_TYPE.DIALOGS_ADD_CONTACT, payload: {id, name, userImage, path}} as const);

//Types
export type DialogsInitStateType = typeof initialState;

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
// export type DialogsPageType = {
//     contacts: Array<ContactType>
//     dialogItems: Array<DialogItemType>
//     newMessageText: string
// }

export type ActionTypes = ReturnType<typeof sendMessage>
    | ReturnType<typeof removeMessage>
    | ReturnType<typeof editMessage>
    | ReturnType<typeof addContact>
