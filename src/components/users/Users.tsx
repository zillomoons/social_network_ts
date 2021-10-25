import React from "react";
import {User} from "./User";
import s from './users.module.css'
import ava_1 from "../../assets/images/ava_1.jpg";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {UserType} from "../../redux/usersReducer";

// type PropsType = {
//     users: UserType[]
//     changeFollow: (userID: string) => void
//     setUsers: (users: UserType[])=>void
// }
type DataType = {
    items: UserType[]
}

export const Users = ({users, changeFollow, setUsers}: UsersPropsType) => {
    if (users.length === 0){

        axios.get<DataType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                const { data } = response
                setUsers(data.items)
            })
    }

    const mappedUsers = users.map(u => {
            return <User key={u.id}
                         userImage={u.photos.small === null ? ava_1 : u.photos.small}
                         name={u.name}
                         status={u.status}
                         callback={() => changeFollow(u.id)}
                         followed={u.followed}/>
        })
    return (
        <div className={s.usersWrapper}>
            <h2>Users</h2>
            {mappedUsers}
            <button>Show More</button>
        </div>
    )
}
