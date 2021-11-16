import React from "react";
import {NavLink} from "react-router-dom";
import styles from "../Dialogs.module.css";
import {ContactType} from "../../../redux/dialogsReducer";

type PropsType = {
    contacts: ContactType[]
}

export const Contacts = React.memo(({contacts}: PropsType) => {
    const mappedContacts = contacts.map(c => {
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
        <div className={styles.contacts}>
            <h3>Contacts</h3>
            { mappedContacts }
        </div>
    )
})