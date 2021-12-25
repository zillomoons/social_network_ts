import React, {useCallback, useState} from 'react';
import {ProfileType, UpdateProfileType} from "../../../redux/profile-reducer/profileReducer";
import {Preloader} from "../../../common/preloader/preloader";
import {ProfileMain} from "./ProfileMain";
import {ProfileDescription} from "./ProfileDescription";
import {ProfileForm} from "./ProfileForm";
import s from "../Profile.module.css";
import {MdEdit} from "react-icons/all";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    updateProfileData: (model: UpdateProfileType, setFieldError: (field: string, message: (string | undefined)) => void) => Promise<any>
}

export const ProfileInfo = React.memo(({profile, status, updateStatus, isOwner, savePhoto, updateProfileData}: PropsType) => {
    const [editMode, setEditMode] = useState(false);
    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = useCallback(() => setEditMode(false), [])
    if (!profile) {
        return <Preloader/>
    }

    return (
        <>
            <ProfileMain profile={profile} savePhoto={savePhoto} isOwner={isOwner} status={status}
                         updateStatus={updateStatus}/>
            {editMode
                ? <ProfileForm profile={profile} deactivateEditMode={deactivateEditMode} updateProfileData={updateProfileData}/>
                : <div>
                    {isOwner && <button className={s.statusEditBtn} onClick={activateEditMode}>Profile<MdEdit/></button>}
                    <ProfileDescription profile={profile} />
                </div>
            }
        </>
    );
});

