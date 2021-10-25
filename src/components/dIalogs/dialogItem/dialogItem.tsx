import React from 'react';
import styles from './../Dialogs.module.css'

export type DialogItemPropsType = {
    id: string
    userImage: string
    name: string
    text: string
    time: string
}

const DialogItem_Private = (props: DialogItemPropsType) => {
    console.log('CONTACTS')
    return (
        <div>
            <div className={styles.messageWrapper}>
                <img src={props.userImage} alt="avatar"/>
                <div className={styles.message}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.text}>{props.text}</div>
                    <div className={styles.time}>{props.time}</div>
                </div>
            </div>
        </div>
    );
};

const DialogItem = React.memo(DialogItem_Private)

export default DialogItem;