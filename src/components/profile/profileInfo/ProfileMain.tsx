import {Preloader} from "../../../common/preloader/preloader";
import s from "../Profile.module.css";
import ava from "../../../assets/images/user_ava.png";
import {UploadFileInput} from "../../../common/uploadFileInput/UploadFileInput";
import {ProfileStatus} from "../profile_status/ProfileStatus";
import React from "react";
import {ProfileType} from "../../../redux/profile-reducer/profileReducer";

type ProfileMainProps = {
    profile: ProfileType | null,
    savePhoto: (photo: File) => void
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void

}
export const ProfileMain = React.memo(({profile, savePhoto, isOwner, status, updateStatus}: ProfileMainProps) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfilePhoto profile={profile} savePhoto={savePhoto} isOwner={isOwner} />
            <h3>{profile.fullName}</h3>
            <div><b>Status:</b> <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus}/></div>
        </div>
    )
})

type ProfilePhotoProps = {
    profile: ProfileType | null,
    savePhoto: (photo: File) => void
    isOwner: boolean
}
const ProfilePhoto = React.memo(({profile, savePhoto, isOwner}: ProfilePhotoProps) => {
    if (!profile) {
        return <Preloader/>
    }
    return <div>
        <img src={profile.photos.large || ava} alt='avatar' className={s.profilePhoto}/>
        { isOwner && <UploadFileInput savePhoto={savePhoto}/> }
    </div>
})