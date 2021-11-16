import {LoginForm} from "./LoginForm";
import s from './Login.module.css';

export const Login = () =>{
    return (
        <div className={s.loginContainer}>
            <LoginForm message='Log in' />
        </div>
    )
}