import React from 'react';
import style from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

// type ProfilePagePropsType = {
//     profilePage: ProfilePageType
//     dispatch: (action: ActionTypes) => void
// }
export const Profile= () => {

    return (
        <div className={style.MainContent}>
            <ProfileInfo/>
            <MyPostsContainer />
            {/*<MyPostsContainer profilePage={profilePage} dispatch={dispatch}/>*/}
        </div>
    );
};

