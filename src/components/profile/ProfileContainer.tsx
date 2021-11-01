import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileInfoType, setProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import { withRouter, RouteComponentProps } from 'react-router-dom';

type MapDispatch = { setProfile: (profile: ProfileInfoType)=> void }
type PathParamsType = { userId: string }
type ProfileAPIProps = MapDispatch & {profile: ProfileInfoType | null} & RouteComponentProps<PathParamsType>


class ProfileAPI extends React.Component<ProfileAPIProps> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get<ProfileInfoType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                const {data} = response;
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

const ProfileContainer = withRouter(ProfileAPI)

export default connect(mapState, {setProfile})(ProfileContainer)
