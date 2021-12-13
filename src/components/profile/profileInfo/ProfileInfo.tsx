import React, {ChangeEvent} from 'react';
import s from "../Profile.module.css";
import {ProfileInfoType} from "../../../redux/profile-reducer/profileReducer";
import {Preloader} from "../../../common/preloader/preloader";
import ava from "../../../assets/images/user_ava.png"
import {ProfileStatus} from "../profile_status/ProfileStatus";
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import {IconButton} from "@mui/material";

type PropsType = {
    profile: ProfileInfoType | null,
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: PropsType) => {
    const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) =>{
        // @ts-ignore: Object is possibly 'null'.
        if (e.target.files.length){
            // @ts-ignore: Object is possibly 'null'.
            savePhoto(e.target.files[0]);
        }
    }
    if (!profile) {
        return <Preloader/>
    }
    return (
            <div className={s.profileInfo}>
                <div className={s.profileImage}>
                    <img src={profile.photos.large || ava } alt='avatar'/>
                    {
                        isOwner && <input type='file' onChange={uploadPhoto}/>
                    }
                    <IconButton aria-label='add photo'><AddAPhotoOutlinedIcon/></IconButton>
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

