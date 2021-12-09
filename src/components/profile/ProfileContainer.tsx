import React from 'react';
import {Profile} from "./Profile";
import {getProfile, getStatus, ProfileInfoType, updateStatus} from "../../redux/profile-reducer/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {RedirectHOC} from "../../hoc/redirectHOC";
import {compose} from "redux";

type MapDispatch = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}
type PathParamsType = { userId: string }
type ProfileProps = {
    profile: ProfileInfoType | null,
    status: string
    authUserID: string
    isAuth: boolean
}

class ProfileContainer extends React.Component<ProfileProps & MapDispatch & RouteComponentProps<PathParamsType>> {
    componentDidMount() {
        const { getProfile, getStatus, authUserID } = this.props;
        let userId = this.props.match.params.userId
        if (!userId){
            userId = authUserID;
        }
        getProfile(userId);
        getStatus(userId);
    }
    render() {
        const {profile, updateStatus, status} = this.props;
        return <Profile profile={profile} updateStatus={updateStatus} status={status} />
    }
}

const mapState = (state: RootState) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserID: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose<React.ComponentType>(
    connect(mapState, {getProfile, getStatus, updateStatus}),
    withRouter,
    RedirectHOC
)(ProfileContainer);


