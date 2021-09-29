import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./dialogItem/dialogItem";
import {NavLink} from 'react-router-dom';
import {DialogsPageType} from "../redux/state";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
}
export const Dialogs = (props: DialogsPagePropsType) => {
    const onSendMessage = () => { alert('New Message')}
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        console.log(newMessage)
    }

    return (
        <div className={styles.dialogsWrapper}>
            <div>
                <h3>Contacts</h3>
                {
                    props.dialogsPage.contacts.map(c => {
                        return (
                            <div key={c.id} >
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
                    <textarea onChange={onNewMessageChange} placeholder={'Write a message'}></textarea>
                    <button onClick={onSendMessage}>Send</button>
                </div>

            </div>

        </div>
    );
};

