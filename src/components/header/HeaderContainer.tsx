import React from 'react';
import {Header} from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {logout} from "../../redux/auth-reducer/authReducer";


class HeaderContainer extends React.Component<PropsFromRedux> {
    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>
    }
}

const mapState = (state: RootState) => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
})

const connector = connect(mapState, {logout});
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HeaderContainer);


