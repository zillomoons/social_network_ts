import preloader from "../assets/images/preloader2.svg";
import s from "../components/users/Users.module.css";
import React from "react";

export const Preloader = () => {
    return <div className={s.preloader}>
        <img src={preloader} alt={'preloader'}  />
    </div>
}