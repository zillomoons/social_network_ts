import React from 'react';
import logo from "../../assets/images/Kingfisher-2017042438.svg";
import s from './Header.module.css';
import {Navbar} from "../navbar/Navbar";
import {NavLink} from 'react-router-dom';

type PropsType = {
    login: string | null
    isAuth: boolean
    logout: ()=> void
}

export const Header = ({login, isAuth, logout}: PropsType) => {

    return (
        <header className={s.header}>
            <NavLink to={'/'}><img src={logo} className={s.logo} alt="logo"/></NavLink>
            <Navbar/>
            <div className={s.login}>
                {
                    isAuth
                        ? <div>{login} <button onClick={logout}>Log out</button></div>
                        : <NavLink to='/login'>Login</NavLink>
                }

            </div>
        </header>
    );
};


