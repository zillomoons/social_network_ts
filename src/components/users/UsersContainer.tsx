import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {
    FilterType,
    followUser, requestUsers, setCurrentPage,
    unfollowUser, UsersType,
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader";
import {
    getCurrentPage, getFilter, getFollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users-selectors";

type MapDispatch = {
    setCurrentPage: (currentPage: number) => void
    requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
}
type UsersPropsType = UsersType & MapDispatch;

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props;
        this.props.requestUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (p: number) => {
        const {pageSize, filter} = this.props;
        this.props.setCurrentPage(p);
        this.props.requestUsers(p, pageSize, filter)
    }
    onFilterChanged = (filter: FilterType) =>{
        const { pageSize} = this.props;
        this.props.requestUsers(1, pageSize, filter);
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
                         onFilterChanged={this.onFilterChanged}
                />
            }
        </>
    }
}

const mapState = (state: RootState): UsersType => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    currentPage: getCurrentPage(state),
    followInProgress: getFollowInProgress(state),
    filter: getFilter(state),
})

export default connect(mapState,
    { setCurrentPage, requestUsers, followUser, unfollowUser})(UsersContainer);

