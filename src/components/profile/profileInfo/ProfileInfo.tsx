import React from 'react';
import s from "../Profile.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <img className={s.poster}
                 src="https://images.theconversation.com/files/379026/original/file-20210115-21-90wsyw.jpg?ixlib=rb-1.1.0&rect=7%2C131%2C4876%2C2438&q=45&auto=format&w=1356&h=668&fit=crop"
                 alt="mountains"/>
            <div className={s.description}>ava + description</div>
        </div>
    );
};
