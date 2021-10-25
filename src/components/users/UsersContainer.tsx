import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux_store";
import {changeFollowAC, setUsersAC, UsersType, UserType} from "../../redux/usersReducer";
import { UsersC } from "./UsersClass";

type MapDispatch = {
    changeFollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = UsersType & MapDispatch;

const mapState = (state: RootState): UsersType => ({
    users: state.usersPage.users,
})
const mapDispatch = (dispatch: AppDispatch): MapDispatch => ({
    changeFollow: (userID: number) => dispatch(changeFollowAC(userID)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
})

export const UsersContainer = connect(mapState, mapDispatch)(UsersC);
