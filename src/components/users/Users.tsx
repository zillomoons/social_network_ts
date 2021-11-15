import React from "react";
import {User} from "./User";
import s from './Users.module.css'
import styleContainer from '../../common/styles/Container.module.css';
import ava_1 from "../../assets/images/ava_1.jpg";
import Pagination from "../pagination/Pagination";
import {UserType} from "../../redux/usersReducer";

type PropsType = {
    users: UserType[]
    onPageChanged: (p: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followInProgress: number[]
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
}

export const Users = ({
                          users, totalUsersCount, followInProgress,
                          pageSize, onPageChanged, currentPage, unfollowUser, followUser
                      }: PropsType) => {

    const mappedUsers = users.map(u => {
        return <User key={u.id} id={u.id}
                     userImage={u.photos.small === null ? ava_1 : u.photos.small}
                     name={u.name} status={u.status}
                     followed={u.followed}
                     followInProgress={followInProgress}
                     followUser={() => followUser(u.id)}
                     unfollowUser={() => unfollowUser(u.id)}
        />
    })
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={`${styleContainer.container} ${s.usersWrapper}`}>
            <h2>Users</h2>
            {mappedUsers}
            <Pagination onPageChanged={onPageChanged}
                        totalCount={totalUsersCount}
                        pageSize={pageSize}
                        siblingCount={1}
                        currentPage={currentPage}
                        className={s.paginationBar}/>
        </div>
    )
}
