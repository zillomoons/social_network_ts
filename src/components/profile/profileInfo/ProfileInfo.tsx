import React from 'react';
import s from "../Profile.module.css";
import {ProfileInfoType} from "../../../redux/profileReducer";
import {Preloader} from "../../../common/preloader";


export const ProfileInfo = (props: { profile: ProfileInfoType | null }) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img className={s.poster}
                 src="https://images.theconversation.com/files/379026/original/file-20210115-21-90wsyw.jpg?ixlib=rb-1.1.0&rect=7%2C131%2C4876%2C2438&q=45&auto=format&w=1356&h=668&fit=crop"
                 alt="mountains"/>
            <div className={s.description}>
                <img src={props.profile.photos.small} alt='avatar'/>
                <div>{props.profile.fullName}</div>
                <div>looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
                <div>Skills: {props.profile.lookingForAJobDescription}</div>
                <ul>
                    <li>github: {props.profile.contacts.github}</li>
                    <li>facebook: {props.profile.contacts.facebook}</li>
                    <li>twitter: {props.profile.contacts.twitter}</li>
                </ul>
            </div>
        </div>
    );
};

