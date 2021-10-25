import React from "react";
import s from './users.module.css'

type UserPropsType = {
    userImage: string
    name: string
    status: string
    followed: boolean
    callback: () => void
}

export const User = ({userImage, name, status, followed, callback}: UserPropsType) => {
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
                <div>{status !== null ? status : "I'm frontend developer, looking for a job."}</div>
            </div>
            <div>city: Unknown</div>
        </div>
    </div>
}