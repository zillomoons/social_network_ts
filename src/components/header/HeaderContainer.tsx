import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux_store";
import {AuthDataType, logout} from "../../redux/authReducer";

// type for mapDispatch
type MapDispatchType = {
    logout: ()=> void
}
type HeaderContainerType = AuthDataType & MapDispatchType

class HeaderContainer extends React.Component<HeaderContainerType> {
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

export default connect(mapState,{ logout })(HeaderContainer);


