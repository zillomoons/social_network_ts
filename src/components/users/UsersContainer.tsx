import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {
    followUser, getUsers, setCurrentPage,
    unfollowUser, UsersType,
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader";

type MapDispatch = {
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
}
type UsersPropsType = UsersType & MapDispatch;

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p);
        this.props.getUsers(p, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users users={this.props.users}
                         pageSize={this.props.pageSize}
                         totalUsersCount={this.props.totalUsersCount}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         followInProgress={this.props.followInProgress}
                         followUser={this.props.followUser}
                         unfollowUser={this.props.unfollowUser}
                />
            }
        </>
    }
}

const mapState = (state: RootState): UsersType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    currentPage: state.usersPage.currentPage,
    followInProgress: state.usersPage.followInProgress,
})

export default connect(mapState,
    { setCurrentPage, getUsers, followUser, unfollowUser})(UsersContainer);

