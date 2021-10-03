import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./dialogItem/dialogItem";
import {NavLink} from 'react-router-dom';
import {DialogsPageType} from "../redux/state";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageText: (newMessage: string) => void
    addMessageCallback: () => void
}
export const Dialogs = (props: DialogsPagePropsType) => {
    const onSendMessage = () => {
        props.addMessageCallback();
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    return (
        <div className={styles.dialogsWrapper}>
            <div>
                <h3>Contacts</h3>
                {
                    props.dialogsPage.contacts.map(c => {
                        return (
                            <div key={c.id}>
                                <NavLink to={c.path} className={styles.contacts}>
                                    <img src={c.userImage} alt='avatar'/>
                                    {c.name}
                                </NavLink>
                            </div>

                        )
                    })
                }

            </div>
            <div>
                {
                    props.dialogsPage.dialogItems.map(d => {
                        return <DialogItem key={d.id} id={d.id}
                                           userImage={d.userImage}
                                           name={d.name} text={d.text} time={d.time}/>
                    })
                }
                <div className={styles.addMessageWrapper}>
                    <textarea onChange={onNewMessageChange} value={props.dialogsPage.newMessageText} placeholder={'Write a message'}/>
                    <button onClick={onSendMessage}>Send</button>
                </div>

            </div>

        </div>
    );
};

