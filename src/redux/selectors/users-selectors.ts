import {RootState} from "../redux_store";
import {createSelector} from "reselect";

const getUsersPrivate = (state: RootState) => {
    return state.usersPage.users;
}
export const getUsers = createSelector(getUsersPrivate,(users) => {
    return users.filter(u => true);
})
export const getPageSize = (state: RootState) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state: RootState) => {
    return state.usersPage.totalUsersCount;
}
export const getIsFetching = (state: RootState) => {
    return state.usersPage.isFetching;
}
export const getCurrentPage = (state: RootState) => {
    return state.usersPage.currentPage;
}
export const getFollowInProgress = (state: RootState) => {
    return state.usersPage.followInProgress;
}
export const getFilter = (state: RootState) => {
    return state.usersPage.filter;
}
