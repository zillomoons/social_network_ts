import React from "react";
import {User} from "./User";
import s from './users.module.css'
import ava_1 from "../../assets/images/ava_1.jpg";
import Pagination from "../pagination/Pagination";
import {UserType} from "../../redux/usersReducer";

type PropsType={
    users: UserType[]
    changeFollow: (userID: number, follow: boolean) => void
    onPageChanged: (p: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export const Users = ({users, changeFollow, totalUsersCount,
                          pageSize, onPageChanged, currentPage
                      }: PropsType) => {

    const mappedUsers = users.map(u => {
        return <User key={u.id} id={u.id}
                     userImage={u.photos.small === null ? ava_1 : u.photos.small}
                     name={u.name}
                     status={u.status}
                     callback={(follow: boolean) => changeFollow(u.id, follow)}
                     followed={u.followed}/>
    })
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.usersWrapper}>
            <h2>Users</h2>
            {mappedUsers}
            <Pagination onPageChanged={onPageChanged}
                        totalCount={totalUsersCount}
                        pageSize={pageSize}
                        siblingCount={1}
                        currentPage={currentPage}
                        className={s.paginationBar} />
        </div>
    )
}
