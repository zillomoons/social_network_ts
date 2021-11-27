import React from 'react';
import {Profile} from "./Profile";
import {getProfile, getStatus, ProfileInfoType, updateStatus} from "../../redux/profileReducer";
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
        let userId = this.props.match.params.userId
        if (!userId){
            userId = this.props.authUserID
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return <Profile {...this.props} updateStatus={this.props.updateStatus}/>
    }
}

const mapState = (state: RootState) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserID: state.auth.id,
    isAuth: state.auth.isAuth,
})

// const AuthRedirect = RedirectHOC(ProfileC);
// const ProfileContainer = withRouter(AuthRedirect);
// export default connect(mapState, {getProfile})(ProfileContainer)

export default compose<React.ComponentType>(
    connect(mapState, {getProfile, getStatus, updateStatus}),
    withRouter,
    RedirectHOC
)(ProfileContainer);


