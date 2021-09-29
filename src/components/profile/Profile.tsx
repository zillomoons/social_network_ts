import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";

type ProfilePagePropsType = {
    profilePage: ProfilePageType
    addPostCallback: (postMessage: string) => void
}
export const Profile = (props: ProfilePagePropsType) => {

    return (
        <div className={style.MainContent}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} addPostCallback={props.addPostCallback}/>
        </div>
    );
};

