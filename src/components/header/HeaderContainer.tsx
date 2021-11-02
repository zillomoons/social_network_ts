import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {AuthDataType, setUserAuthData} from "../../redux/authReducer";
import {ProfileInfoType, setProfile} from "../../redux/profileReducer";
import {authAPI, profileAPI} from "../../api/api";

// type for mapDispatch
type MapDispatchType = {
    setUserAuthData: (data: AuthDataType) => void
    setProfile: (profile: ProfileInfoType) => void
}
type HeaderContainerType = AuthDataType & MapDispatchType

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id} = data.data;
                this.props.setUserAuthData(data.data);
                id && profileAPI.getProfile(id.toString()).then(data => {
                    this.props.setProfile(data);
                })
            }
        })
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

const mapState = (state: RootState) => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
})

export default connect(mapState, {setUserAuthData, setProfile})(HeaderContainer)


