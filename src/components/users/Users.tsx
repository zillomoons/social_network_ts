import React from "react";
import {UserType} from "../../redux/usersReducer";
import {User} from "./User";
import s from './users.module.css'
import ava_1 from "../../assets/images/ava_1.jpg";
import ava_7 from "../../assets/images/logo.jpg";
import ava_3 from "../../assets/images/ava_3.jpg";
import ava_4 from "../../assets/images/ava_4.jpg";
import ava_5 from "../../assets/images/ava_5.jpg";
import ava_6 from "../../assets/images/ava_6.jpg";


type PropsType = {
    users: UserType[]
    changeFollow: (userID: string) => void
    setUsers: (users: UserType[])=>void
}

export const Users = ({users, changeFollow, setUsers}: PropsType) => {
    if (users.length === 0){
        setUsers([
                {id: "1", name: 'Nick', followed: true, city: 'Moscow', userImage: ava_1},
                {id: '2', name: 'John', followed: true, city: 'New York', userImage: ava_7},
                {id: '3', name: 'Max', followed: false, city: 'Kiev', userImage: ava_3},
                {id: '4', name: 'Ann', followed: true, city: 'Tallinn', userImage: ava_4},
                {id: '5', name: 'Kate', followed: false, city: 'London', userImage: ava_5},
                {id: '6', name: 'Rupert', followed: false, city: 'Edinburgh', userImage: ava_6},
            ]
        )
    }

    const mappedUsers = users.map(u => {
            return <User key={u.id}
                         userImage={u.userImage}
                         name={u.name}
                         city={u.city}
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
