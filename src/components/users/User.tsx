import React from "react";
import {NavLink} from "react-router-dom";
import s from './Users.module.css';

type UserPropsType = {
    id: number
    userImage: string
    name: string
    status: string
    followed: boolean
    followInProgress: number[]
    followUser: () => void
    unfollowUser: () => void
}

export const User = ({id, userImage, name, status, followed, followInProgress,
                         followUser, unfollowUser}: UserPropsType) => {

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