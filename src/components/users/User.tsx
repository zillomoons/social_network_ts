import React from "react";
import {NavLink} from "react-router-dom";
import s from './users.module.css';
import {followUserAPI, unfollowUserAPI} from "../../api/api";

type UserPropsType = {
    id: number
    userImage: string
    name: string
    status: string
    followed: boolean
    callback: (follow: boolean) => void
}

export const User = ({id, userImage, name, status, followed, callback}: UserPropsType) => {

    const followUser = () => {
        followUserAPI(id).then(data => {
            if (data.resultCode === 0) {
                callback(true);
            }
        });
    }
    const unfollowUser = () => {
        unfollowUserAPI(id).then(data => {
            if (data.resultCode === 0) {
                callback(false);
            }
        })
    }

    return <div className={s.userStyle}>
        <div className={s.userPhoto}>
            <NavLink to={'/profile/' + id}>
                <img src={userImage} alt="ava"/>
            </NavLink>
            <div>
                {
                    followed
                        ? <button onClick={unfollowUser}>UNFOLLOW</button>
                        : <button className={s.follow} onClick={followUser}>FOLLOW</button>
                }
            </div>
        </div>
        <div className={s.userInfo}>
            <div>
                <div>{name}</div>
                <div>{status !== null ? status : "I'm frontend developer, looking for a job."}</div>
            </div>
            <div>city: Unknown</div>
        </div>
    </div>
}