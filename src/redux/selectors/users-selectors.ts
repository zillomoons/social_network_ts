import {RootState} from "../redux_store";

export const getUsers = (state: RootState) => {
    return state.usersPage.users;
}
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
