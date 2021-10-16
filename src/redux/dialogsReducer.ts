import {ActionTypes, DialogsPageType} from "./state";
import {v1} from "uuid";
import user_ava from "../assets/images/user_ava.png";

let today = new Date();

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let dialogItem = {
                id: v1(), userImage: user_ava, name: 'Someone',
                text: state.newMessageText,
                time: today.getHours() + '.' + today.getMinutes()
            }
            state.dialogItems.push(dialogItem);
            state.newMessageText = '';
            return state;
        case "UPDATE-MESSAGE":
            if (action.newText != null) {
                state.newMessageText = action.newText;
            }
            return state;
        default:
            return state;
    }
}
export const addMessageAC = () => ({type: 'SEND-MESSAGE'} as const)
export const updateMessageAC = (text: string) => ({ type: 'UPDATE-MESSAGE', newText: text} as const)