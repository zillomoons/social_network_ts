import React from 'react';
import {Profile} from "./Profile";
import {ProfileInfoType, setProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {profileAPI} from "../../api/api";

type MapDispatch = { setProfile: (profile: ProfileInfoType) => void }
type PathParamsType = { userId: string }
type ProfileAPIProps = MapDispatch & { profile: ProfileInfoType | null } & RouteComponentProps<PathParamsType>

class ProfileC extends React.Component<ProfileAPIProps> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        profileAPI.getProfile(userId).then(data => {
            this.props.setProfile(data);
        })
    }
    render() {
        return <Profile {...this.props}/>
    }
}

const mapState = (state: RootState) => ({
    profile: state.profilePage.profile,
})

const ProfileContainer = withRouter(ProfileC)

export default connect(mapState, {setProfile})(ProfileContainer)
