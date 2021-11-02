import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {
    changeFollow, setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowInProgress, toggleIsFetching, UsersType, UserType
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader";
import {usersAPI} from "../../api/api";

type MapDispatch = {
    changeFollow: (userID: number, follow: boolean) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number)=> void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowInProgress: (isFetching: boolean, id: number) => void
}
type UsersPropsType = UsersType & MapDispatch;

class UsersContainer extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }
    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(p, this.props.pageSize).then(data => {
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
                         toggleFollowInProgress={this.props.toggleFollowInProgress}
                         followInProgress={this.props.followInProgress}
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
    followInProgress: state.usersPage.followInProgress,
})

export default connect(mapState,
    {changeFollow, setUsers, setCurrentPage, setTotalUsersCount,
        toggleIsFetching, toggleFollowInProgress})(UsersContainer);

