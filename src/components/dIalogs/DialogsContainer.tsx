import React from 'react';
import {ActionTypes, DialogsPageType} from "../../redux/store";
import {addMessageAC, updateMessageAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionTypes) => void
}
export const DialogsContainer = ({dialogsPage, dispatch}: DialogsPagePropsType) => {
    const onSendMessage = () => dispatch(addMessageAC());
    const onNewMessageChange = (newMessage: string) => dispatch(updateMessageAC(newMessage))

    return (
        <Dialogs dialogsPage={dialogsPage} sendMessage={onSendMessage} updateMessage={onNewMessageChange}/>
    );
};

