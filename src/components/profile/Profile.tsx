import React from 'react';
import style from '../../common/styles/Container.module.css';
import s from './Profile.module.css';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/profile-reducer/profileReducer";

type PropsType = {
    profile: ProfileInfoType | null,
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File)=> void
}

export const Profile = React.memo((props: PropsType) => {
    return (
        <div className={`${style.container} ${s.profileContainer}`}>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </div>
    );
});

