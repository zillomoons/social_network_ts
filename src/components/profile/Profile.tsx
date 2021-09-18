import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";

export const Profile = (props: any) => {
    return (
        <div className={s.MainContent}>
            <img className={s.Poster} src="https://images.theconversation.com/files/379026/original/file-20210115-21-90wsyw.jpg?ixlib=rb-1.1.0&rect=7%2C131%2C4876%2C2438&q=45&auto=format&w=1356&h=668&fit=crop" alt="mountains"/>
            <div>ava + description</div>
            <MyPosts />
        </div>
    );
};

