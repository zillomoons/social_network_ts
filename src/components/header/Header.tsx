import React from 'react';
import logo from "../../logo.svg";
import s from './Header.module.css';

export const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img src={logo} className={s.logo} alt="logo"/>
        </header>
    );
};


