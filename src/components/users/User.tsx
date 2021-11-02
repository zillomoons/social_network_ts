import React from "react";
import {NavLink} from "react-router-dom";
import s from './users.module.css';
import {followAPI} from "../../api/api";

type UserPropsType = {
    id: number
    userImage: string
    name: string
    status: string
    followed: boolean
    callback: (follow: boolean) => void
    toggleFollowInProgress: (isFetching: boolean, id: number) => void
    followInProgress: number[]
}

export const User = ({
                         id, userImage, name, status, followed, callback,
                         toggleFollowInProgress, followInProgress
                     }: UserPropsType) => {

    const followUser = () => {
        toggleFollowInProgress(true, id);
        followAPI.followUser(id).then(data => {
            if (data.resultCode === 0) {
                callback(true);
            }
            toggleFollowInProgress(false, id);
        });
    }
    const unfollowUser = () => {
        toggleFollowInProgress(true, id);
        followAPI.unfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                callback(false);
            }
            toggleFollowInProgress(false, id);
        })
    }
    const disabledBtn = followInProgress.some(num => num === id);

    return <div className={s.userStyle}>
        <div className={s.userPhoto}>
            <NavLink to={'/profile/' + id}>
                <img src={userImage} alt="ava"/>
            </NavLink>
            <div>
                {
                    followed
                        ? <button disabled={disabledBtn} onClick={unfollowUser}>UNFOLLOW</button>
                        : <button disabled={disabledBtn} className={s.follow} onClick={followUser}>FOLLOW</button>
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