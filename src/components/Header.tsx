import React from 'react';
import logo from "../logo.svg";
import '../App.css';

export const Header = (props: any) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
        </header>
    );
};


