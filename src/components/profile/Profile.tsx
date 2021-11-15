import React from 'react';
import style from '../../common/styles/Container.module.css';
import s from './Profile.module.css';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/profileReducer";

type PropsType = {
    profile: ProfileInfoType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div className={`${style.container} ${s.profileContainer}`}>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </div>
    );
};

