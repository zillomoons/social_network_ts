import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {
    changeFollow, setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, UsersType, UserType
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader";

type DataType = {
    items: UserType[]
    totalCount: number
}
type MapDispatch = {
    changeFollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number)=> void
    toggleIsFetching: (isFetching: boolean) => void
}
type UsersPropsType = UsersType & MapDispatch;

class UsersAPI extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<DataType>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                const {data} = response
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }
    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true)
        axios.get<DataType>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                const {data} = response
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }
    render() {
        return <>
            { this.props.isFetching
                ? <Preloader />
                : <Users users={this.props.users}
                         pageSize={this.props.pageSize}
                         totalUsersCount={this.props.totalUsersCount}
                         currentPage={this.props.currentPage}
                         changeFollow={this.props.changeFollow}
                         onPageChanged={this.onPageChanged}
                />
            }

        </>
    }
}

const mapState = (state: RootState): UsersType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
})

export const UsersContainer = connect(mapState,
    {changeFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,})(UsersAPI);

