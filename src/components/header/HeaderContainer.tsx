import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {AuthDataType, setUserAuthData} from "../../redux/authReducer";
import {ProfileInfoType, setProfile} from "../../redux/profileReducer";

type MapDispatchType = {
    setUserAuthData: (data: AuthDataType) => void
    setProfile: (profile: ProfileInfoType) => void
} // type for mapDispatch
type HeaderContainerType = AuthDataType & MapDispatchType
type DataType = {
    data: AuthDataType
    resultCode: number
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get<DataType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                const {data} = response;
                if (data.resultCode === 0) {
                    let {id} = data.data;
                    this.props.setUserAuthData(data.data);

                    axios.get<ProfileInfoType>(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                        .then(response => {
                            const {data} = response;
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


