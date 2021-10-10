import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../redux/state";

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}
export const Profile: React.FC<ProfilePagePropsType> = ({profilePage, dispatch}) => {

    return (
        <div className={style.MainContent}>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                     dispatch={dispatch}
            />
        </div>
    );
};

