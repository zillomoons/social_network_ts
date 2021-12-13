import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {
    FilterType,
    followUser, requestUsers, setCurrentPage,
    unfollowUser, UsersInitState,
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/preloader/preloader";
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
type UsersPropsType = UsersInitState & MapDispatch;

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {currentPage, pageSize, filter, requestUsers} = this.props;
        requestUsers(currentPage, pageSize, filter)
    }
    onPageChanged = (p: number) => {
        const {pageSize, filter, setCurrentPage, requestUsers} = this.props;
        setCurrentPage(p);
        requestUsers(p, pageSize, filter)
    }
    onFilterChanged = (filter: FilterType) => {
        const {pageSize, requestUsers} = this.props;
        requestUsers(1, pageSize, filter);
    }
    render() {
        const {
            isFetching,
            users,
            pageSize,
            totalUsersCount,
            currentPage,
            followInProgress,
            followUser,
            unfollowUser,
        } = this.props;
        return <>
            {
                isFetching
                    ? <Preloader/>
                    : <Users users={users}
                             pageSize={pageSize}
                             totalUsersCount={totalUsersCount}
                             currentPage={currentPage}
                             onPageChanged={this.onPageChanged}
                             followInProgress={followInProgress}
                             followUser={followUser}
                             unfollowUser={unfollowUser}
                             onFilterChanged={this.onFilterChanged}
                    />
            }
        </>
    }
}

const mapState = (state: RootState): UsersInitState => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    currentPage: getCurrentPage(state),
    followInProgress: getFollowInProgress(state),
    filter: getFilter(state),
})

export default connect(mapState,
    {setCurrentPage, requestUsers, followUser, unfollowUser})(UsersContainer);

