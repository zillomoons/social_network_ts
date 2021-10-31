import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileInfoType, setProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";

type MapDispatch = { setProfile: (profile: ProfileInfoType)=> void }
type ProfileAPIProps = MapDispatch & {profile: ProfileInfoType}

class ProfileAPI extends React.Component<ProfileAPIProps> {
    componentDidMount() {
        axios.get<ProfileInfoType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
export const ProfileContainer = connect(mapState, {setProfile})(ProfileAPI)
