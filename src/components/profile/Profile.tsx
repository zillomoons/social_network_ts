import React from 'react';
import style from '../../common/styles/Container.module.css';
import s from './Profile.module.css';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileType, UpdateProfileType} from "../../redux/profile-reducer/profileReducer";

type PropsType = {
    profile: ProfileType | null,
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File)=> void
    updateProfileData: (model: UpdateProfileType, setFieldError: (field: string, message: (string | undefined)) => void) => Promise<any>
}

export const Profile = React.memo((props: PropsType) => {
    return (
        <div className={`${style.container} ${s.profileContainer}`}>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </div>
    );
});

