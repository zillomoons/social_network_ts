import {LoginForm} from "./LoginForm";
import s from './Login.module.css';
import {connect, ConnectedProps} from "react-redux";
import { login } from "../../redux/authReducer";
import {RootState} from "../../redux/redux_store";
import {Redirect} from "react-router-dom";

const Login = (props: ReduxProps) =>{
    if (props.isAuth){
        return <Redirect to='/profile/:userId?' />
    }
    return (
        <div className={s.loginContainer}>
            <LoginForm message='Log in' login={props.login} />
        </div>
    )
}

const mapState = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

type ReduxProps = ConnectedProps<typeof connector>
const connector = connect(mapState, {login});
export default connector(Login);
