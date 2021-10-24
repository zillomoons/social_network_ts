import React from "react";
import s from './users.module.css'

type UserPropsType = {
    userImage: string
    name: string
    city: string
    followed: boolean
    callback: () => void
}

export const User = ({userImage, name, city, followed, callback}: UserPropsType) => {
    return <div className={s.userStyle}>
        <div className={s.userPhoto}>
            <img src={userImage} alt="ava"/>
            <div>
                {
                    followed
                        ? <button onClick={callback}>UNFOLLOW</button>
                        : <button className={s.follow} onClick={callback}>FOLLOW</button>
                }
            </div>
        </div>
        <div className={s.userInfo}>
            <div>
                <div>{name}</div>
                <div>Status: I'm looking for a job...</div>
            </div>
            <div>{city}</div>
        </div>
    </div>
}