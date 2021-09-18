import React from 'react';
import s from './Navbar.module.css'

export const Navbar = (props: any) => {
    return (
        <nav className={s.Navbar}>
            <div className={s.active}>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </nav>
    );
};

