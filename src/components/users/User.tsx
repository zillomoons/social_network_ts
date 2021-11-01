import React from "react";
import {NavLink} from "react-router-dom";
import s from './users.module.css'
import axios from "axios";

type UserPropsType = {
    id: number
    userImage: string
    name: string
    status: string
    followed: boolean
    callback: (follow: boolean) => void
}
type DataType = {
    resultCode: number
}

export const User = ({id, userImage, name, status, followed, callback}: UserPropsType) => {

    const followUser = () => {
        axios.post<DataType>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {}, {
                withCredentials: true,
                headers: {
                    'API-KEY': 'fcb32a2d-632d-4015-bf04-3cd982002469'
                }
            }).then(response => {
            const {data} = response;
            if (data.resultCode === 0) {
                callback(true);
            }
        });
    }
    const unfollowUser = () => {
        axios.delete<DataType>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {
                withCredentials: true,
                headers: {
                    'API-KEY': 'fcb32a2d-632d-4015-bf04-3cd982002469'
                }
            }).then(response => {
            const {data} = response;
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