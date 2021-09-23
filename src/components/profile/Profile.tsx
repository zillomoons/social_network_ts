import React from 'react';
import style from './Profile.module.css'
import MyPosts, {MyPostsPropsType} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";


export const Profile = (props: MyPostsPropsType) => {

    return (
        <div className={style.MainContent}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
};

