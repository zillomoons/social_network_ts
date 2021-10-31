import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux_store";
import {
    changeFollowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UsersType,
    UserType
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type DataType = {
    items: UserType[]
    totalCount: number
}
type MapDispatch = {
    changeFollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number)=> void
}
type UsersPropsType = UsersType & MapDispatch;

class UsersAPI extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get<DataType>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                const {data} = response
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }
    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        axios.get<DataType>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                const {data} = response
                this.props.setUsers(data.items)
            })
    }
    render() {
        return <Users users={this.props.users}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      changeFollow={this.props.changeFollow}
                      onPageChanged={this.onPageChanged}
        />
    }
}

const mapState = (state: RootState): UsersType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})
const mapDispatch = (dispatch: AppDispatch): MapDispatch => ({
    changeFollow: (userID: number) => dispatch(changeFollowAC(userID)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
    setTotalUsersCount: (totalCount: number)=> dispatch(setTotalUsersCountAC(totalCount))
})

export const UsersContainer = connect(mapState, mapDispatch)(UsersAPI);

