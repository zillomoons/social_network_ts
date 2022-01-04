import React from "react";
import {User} from "./User";
import s from './Users.module.css'
import styleContainer from '../../common/styles/Container.module.css';
import ava_1 from "../../assets/images/ava_1.jpg";
import {FilterType, UserType} from "../../redux/users-reducer/usersReducer";
import {SearchForm} from "./SearchForm";
import Paginator from "../pagination/Paginator";

type PropsType = {
    users: UserType[]
    onPageChanged: (p: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followInProgress: number[]
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
    onFilterChanged: (filter: FilterType) => void
}

export const Users = React.memo(({
                                     users, totalUsersCount, followInProgress, onFilterChanged,
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

    return (
        <div className={`${styleContainer.container} ${s.usersWrapper}`}>
            <h2>Users</h2>
            <SearchForm onFilterChanged={onFilterChanged}/>
            <Paginator onPageChanged={onPageChanged}
                       pageSize={pageSize}
                       totalItemsCount={totalUsersCount}
                       currentPage={currentPage}/>
            {mappedUsers}

        </div>
    )
});

