import React from 'react';
import styles from './Dialogs.module.css'
import ava_1 from './../../assets/images/ava_1.jpg'
import ava_2 from './../../assets/images/ava_2.jpg'
import DialogItem from "./dialogItem/dialogItem";
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    const dialogsItems = [
        {id: 1, userImage: ava_1, name: 'Nick', text: 'Hey, wassup?', time: '20.00'},
        {id: 2, userImage: ava_2, name: 'Alex', text: 'alright, and you', time: '20.15'},
        {id: 3, userImage: ava_1, name: 'Nick', text: 'working', time: '20.35'},
        {id: 4, userImage: ava_2, name: 'Alex', text: 'you better be))', time: '21.00'},
    ]
    const contacts = [
        {id: 1, name: 'Nick', path: '/dialogs/1'},
        {id: 2, name: 'John', path: '/dialogs/2'},
        {id: 3, name: 'Max', path: '/dialogs/3'},
        {id: 4, name: 'Ann', path: '/dialogs/4'},
        {id: 5, name: 'Kate', path: '/dialogs/5'},
        {id: 6, name: 'Rupert', path: '/dialogs/6'},

    ]

    return (
        <div className={styles.dialogsWrapper}>
            <div>
                <h3>Contacts</h3>
                <ul>
                    {
                        contacts.map(c => {
                            return (
                                <div key={c.id} className={styles.contacts}>
                                    <NavLink to={c.path}>{c.name}</NavLink>
                                </div>

                            )
                        })
                    }
                </ul>
            </div>
            <div>
                {
                    dialogsItems.map(d => {
                        return <DialogItem key={d.id} id={d.id}
                                           userImage={d.userImage}
                                           name={d.name} text={d.text} time={d.time}/>
                    })
                }
            </div>

        </div>
    );
};

