import React from 'react';
import style from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}
export const Profile= ({profilePage, dispatch}: ProfilePagePropsType) => {

    return (
        <div className={style.MainContent}>
            <ProfileInfo/>
            <MyPostsContainer profilePage={profilePage} dispatch={dispatch}/>
        </div>
    );
};

