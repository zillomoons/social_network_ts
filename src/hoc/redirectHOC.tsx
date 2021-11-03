import React from "react";
import {Redirect} from "react-router-dom";
import {RootState} from "../redux/redux_store";
import {connect} from "react-redux";

export const RedirectHOC = (Component: any) => {
    class RedirectComponent extends React.Component<any>{
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }
    const mapState = (state:RootState) => ({ isAuth: state.auth.isAuth });
    return connect(mapState)(RedirectComponent);
}