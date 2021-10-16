import React from "react";
import {NavLink} from "react-router-dom";
import styles from "../Dialogs.module.css";
import {DialogsPageType} from "../../../redux/store";

type PropsType = {
    dialogsPage: DialogsPageType
}

export const Contacts = ({dialogsPage}: PropsType) => {
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
        <div>
            <h3>Contacts</h3>
            { mappedContacts }
        </div>
    )
}