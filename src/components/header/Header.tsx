import React from 'react';
import logo from "../../assets/images/Kingfisher-2017042438.svg";
import s from './Header.module.css';
import {Navbar} from "../navbar/Navbar";
import {NavLink} from 'react-router-dom';

type PropsType = {
    login: string | null
    isAuth: boolean
}

export const Header = ({login, isAuth}: PropsType) => {
    return (
        <header className={s.header}>
            <NavLink to={'/'}><img src={logo} className={s.logo} alt="logo"/></NavLink>
            <Navbar/>
            <div className={s.login}>
                {
                    isAuth ? login : <NavLink to='/login'>Login</NavLink>
                }

            </div>
        </header>
    );
};


