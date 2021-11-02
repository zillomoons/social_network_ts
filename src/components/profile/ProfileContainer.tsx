import React from 'react';
import {Profile} from "./Profile";
import {getProfile, ProfileInfoType} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {withRouter, RouteComponentProps} from 'react-router-dom';

type MapDispatch = {
    getProfile: (userId: string) => void
}
type PathParamsType = { userId: string }
type ProfileAPIProps = MapDispatch & { profile: ProfileInfoType | null } & RouteComponentProps<PathParamsType>

class ProfileC extends React.Component<ProfileAPIProps> {
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

const ProfileContainer = withRouter(ProfileC)

export default connect(mapState, {getProfile})(ProfileContainer)
