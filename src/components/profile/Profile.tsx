import React from 'react';
import style from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/profileReducer";

type PropsType = {
    profile: ProfileInfoType | null
}

export const Profile = (props: PropsType) => {
    return (
        <div className={style.MainContent}>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </div>
    );
};

