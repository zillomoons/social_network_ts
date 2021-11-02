import React from 'react';
import {Profile} from "./Profile";
import {getProfile, ProfileInfoType} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {RedirectHOC} from "../../hoc/redirectHOC";

type MapDispatch = { getProfile: (userId: string) => void }
type PathParamsType = { userId: string }
type ProfileProps = {
    profile: ProfileInfoType | null,
}

class ProfileC extends React.Component<ProfileProps & MapDispatch & RouteComponentProps<PathParamsType>> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
    }
    render() {
        return <Profile {...this.props}/>
    }
}
const mapState = (state: RootState) => ({
    profile: state.profilePage.profile,
})

const AuthRedirect = RedirectHOC(ProfileC);
const ProfileContainer = withRouter(AuthRedirect);

export default connect(mapState, {getProfile})(ProfileContainer)
