import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./dialogItem/dialogItem";
import {NavLink} from 'react-router-dom';
import {ActionType, addMessageAC, DialogsPageType, updateMessageAC} from "../redux/state";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}
export const Dialogs: React.FC<DialogsPagePropsType> = ({dialogsPage, dispatch}) => {
    const onSendMessage = () => {
        dispatch(addMessageAC());
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateMessageAC(e.currentTarget.value))
    }
    const mappedContacts = dialogsPage.contacts.map(c => {
        return (
            <div key={c.id}>
                <NavLink to={c.path} className={styles.contacts}>
                    <img src={c.userImage} alt='avatar'/>
                    {c.name}
                </NavLink>
            </div>
        )
    })

    return (
        <div className={styles.dialogsWrapper}>
            <div>
                <h3>Contacts</h3>
                { mappedContacts }
            </div>
            <div>
                {
                    dialogsPage.dialogItems.map(d => {
                        return <DialogItem key={d.id} id={d.id}
                                           userImage={d.userImage}
                                           name={d.name} text={d.text} time={d.time}/>
                    })
                }
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

