import React from 'react';
import styles from './Dialogs.module.css'
import ava_1 from './../../assets/images/ava_1.jpg'
import ava_2 from './../../assets/images/ava_2.jpg'
import DialogItem from "./dialogItem/dialogItem";

export const Dialogs = () => {
    const dialogsItems = [
        {id: 1, userImage: ava_1, name: 'Nick', text: 'Hey, wassup?', time: '20.00'},
        {id: 2, userImage: ava_2, name: 'Alex', text: 'alright, and you', time: '20.15'},
        {id: 3, userImage: ava_1, name: 'Nick', text: 'working', time: '20.35'},
        {id: 4, userImage: ava_2, name: 'Alex', text: 'you better be))', time: '21.00'},
    ]

    return (
        <div className={styles.dialogsWrapper}>
            {
                dialogsItems.map(d => {
                    return <DialogItem key={d.id} id={d.id}
                                       userImage={d.userImage}
                                       name={d.name} text={d.text} time={d.time}/>
                })
            }
        </div>
    );
};

