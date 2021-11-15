import React from 'react';
import s from "../Profile.module.css";
import {ProfileInfoType} from "../../../redux/profileReducer";
import {Preloader} from "../../../common/preloader";
import ava from "../../../assets/images/user_ava.png"
import {ProfileStatus} from "../profile_status/ProfileStatus";

type PropsType = {
    profile: ProfileInfoType | null,
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = ({profile, status, updateStatus}: PropsType) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
            <div className={s.profileInfo}>
                <div className={s.profileImage}>
                    <img src={profile.photos.small || ava } alt='avatar'/>
                </div>
                <div className={s.description}>
                    Status: <ProfileStatus status={status} updateStatus={updateStatus} />
                    <div>Name: {profile.fullName}</div>
                    <div>looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
                    <div>Skills: {profile.lookingForAJobDescription}</div>
                    <ul>
                        <li>github: {profile.contacts.github}</li>
                        <li>facebook: {profile.contacts.facebook}</li>
                        <li>twitter: {profile.contacts.twitter}</li>
                    </ul>
                </div>

            </div>
    );
};

