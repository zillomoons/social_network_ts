import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem, {DialogItemPropsType} from "./dialogItem/dialogItem";
import {NavLink} from 'react-router-dom';

export type ContactPropsType = {
    id: number
    name: string
    path: string
}

export type DialogsPropsType = {
    contacts: Array<ContactPropsType>
    dialogItems: Array<DialogItemPropsType>
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={styles.dialogsWrapper}>
            <div>
                <h3>Contacts</h3>
                <ul>
                    {
                        props.contacts.map(c => {
                            return (
                                <div key={c.id} className={styles.contacts}>
                                    <NavLink to={c.path}>{c.name}</NavLink>
                                </div>

                            )
                        })
                    }
                </ul>
            </div>
            <div>
                {
                    props.dialogItems.map(d => {
                        return <DialogItem key={d.id} id={d.id}
                                           userImage={d.userImage}
                                           name={d.name} text={d.text} time={d.time}/>
                    })
                }
            </div>

        </div>
    );
};

