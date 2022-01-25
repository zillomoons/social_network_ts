import React from 'react';
import {Profile} from "./Profile";
import {
    getProfile,
    getStatus,
    ProfileType,
    savePhoto, UpdateProfileType, updateProfileData,
    updateStatus
} from "../../redux/profile-reducer/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {RedirectHOC} from "../../hoc/redirectHOC";
import {compose} from "redux";
import {Preloader} from "../../common/preloader/preloader";


class ProfileContainer extends React.Component<ProfileProps> {
    refreshProfile () {
        const { getProfile, getStatus, authUserID } = this.props;
        let id = this.props.match.params.userId;
        if (!id){
            id = authUserID;
            if(!id){
                this.props.history.push('/login')
            }
        }
        getProfile(id);
        getStatus(id);
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps: Readonly<ProfileProps>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.match.params.userId !== this.props.match.params.userId){
            this.refreshProfile();
        }
    }

    render() {
        const {profile, updateStatus, status} = this.props;
        return <Profile profile={profile}
                        isOwner={!this.props.match.params.userId}
                        updateProfileData={this.props.updateProfileData}
                        savePhoto={this.props.savePhoto}
                        updateStatus={updateStatus}
                        status={status} />
    }
}

const mapState = (state: RootState) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserID: state.auth.id,
    isAuth: state.auth.isAuth,
})
 // const connector = connect(mapState, {getProfile, getStatus, updateStatus, savePhoto, updateProfileData})


export default compose<React.ComponentType>(
    connect(mapState, {getProfile, getStatus, updateStatus, savePhoto, updateProfileData}),
    withRouter,
    RedirectHOC
)(ProfileContainer);

//Types
// type PropsFromRedux = ConnectedProps<typeof connector>

type PathParamsType = { userId: string }
type MapDispatch = {
    getProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: File)=> void
    updateProfileData: (model: UpdateProfileType, setFieldError: (field: string, message: (string | undefined)) => void) => Promise<any>
}
type ProfileProps = MapDispatch & RouteComponentProps<PathParamsType> & {
    profile: ProfileType,
    status: string
    authUserID: string
    isAuth: boolean
}
