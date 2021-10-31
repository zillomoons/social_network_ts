import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./dialogItem/dialogItem";
import {Contacts} from "./contacts/contacts";
import {DialogsPageType} from '../../redux/dialogsReducer';

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateMessage: (newMessage: string) => void
}
export const Dialogs = ({dialogsPage, sendMessage, updateMessage}: DialogsPagePropsType) => {
    const onSendMessage = () => sendMessage();
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value;
        updateMessage(newMessage);
    }
    const mappedDialogItems = dialogsPage.dialogItems.map(d => <DialogItem key={d.id} id={d.id} userImage={d.userImage}
                                                                        name={d.name} text={d.text} time={d.time}/>)
    return (
        <div className={styles.dialogsWrapper}>
            <Contacts dialogsPage={dialogsPage}/>
            <div>
                {mappedDialogItems}
                <div className={styles.addMessageWrapper}>
                    <textarea onChange={onNewMessageChange}
                              value={dialogsPage.newMessageText}
                              placeholder={'Write a message'}/>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

