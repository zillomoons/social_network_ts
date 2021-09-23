import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./dialogItem/dialogItem";
import {NavLink} from 'react-router-dom';
import {DialogsPageType} from "../redux/state";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
}
export const Dialogs = (props: DialogsPagePropsType) => {
    return (
        <div className={styles.dialogsWrapper}>
            <div>
                <h3>Contacts</h3>
                {
                    props.dialogsPage.contacts.map(c => {
                        return (
                            <div key={c.id} className={styles.contacts}>
                                <NavLink to={c.path}>{c.name}</NavLink>
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
            </div>

        </div>
    );
};

