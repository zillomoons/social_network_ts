import React from 'react';
import style from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/profileReducer";


export const Profile = (props: { profile: ProfileInfoType | null }) => {
    return (
        <div className={style.MainContent}>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </div>
    );
};

