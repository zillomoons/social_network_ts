
import {connect} from "react-redux";
import { Users } from "./Users";
import {AppDispatch, RootState} from "../../redux/redux_store";
import {changeFollowAC, setUsersAC, UserType} from "../../redux/usersReducer";

const mapState = (state: RootState) => ({
    users: state.usersPage.users
})
const mapDispatch = (dispatch: AppDispatch) => ({
    changeFollow: (userID: string) => dispatch(changeFollowAC(userID)),
    setUsers: (users: UserType[]) => dispatch(setUsersAC(users))
})

export const UsersContainer = connect(mapState, mapDispatch)(Users);
