import {LoginForm} from "./LoginForm";
import s from './Login.module.css';
import {connect, ConnectedProps} from "react-redux";
import { login } from "../../redux/auth-reducer/authReducer";
import {RootState} from "../../redux/redux_store";
import {Redirect} from "react-router-dom";

const Login = ({isAuth, login, captchaURL}: ReduxProps) =>{
    if (isAuth){
        return <Redirect to='/profile/:userId?' />
    }
    return (
        <div className={s.loginContainer}>
            <LoginForm login={login} captcha={captchaURL} />
        </div>
    )
}

const mapState = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL,
    }
}

type ReduxProps = ConnectedProps<typeof connector>
const connector = connect(mapState, {login});
export default connector(Login);
