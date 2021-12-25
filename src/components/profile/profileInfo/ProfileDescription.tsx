import s from "../Profile.module.css";
import React from "react";
import {ProfileType} from "../../../redux/profile-reducer/profileReducer";
import {Preloader} from "../../../common/preloader/preloader";

type DesriptionProps = {
    profile: ProfileType | null
}
export const ProfileDescription = React.memo(({profile}: DesriptionProps) => {
    if (!profile) {
        return <Preloader/>
    }
    const myContacts: { [index: string]: any } = profile.contacts;
    return <div>
        <div className={s.descriptionItem}><b>About me</b>: {profile.aboutMe}</div>
        <div className={s.descriptionItem}><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        <div><b>Skills</b>: {profile.lookingForAJobDescription}</div>
        <div className={s.descriptionItem}>
            <b>Contacts</b>: {Object.keys(myContacts).map((item) => {
            return <Contact key={item} contactTitle={item} contactValue={myContacts[item]}/>
        })}
        </div>
    </div>
})

type ContactProps = {
    contactTitle: string
    contactValue: string
}
const Contact = React.memo(({contactTitle, contactValue}: ContactProps) => {
    return <div className={s.contactsStyle}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
})