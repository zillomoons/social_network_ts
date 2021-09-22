import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import ava_1 from './../../assets/images/ava_1.jpg'
import ava_2 from './../../assets/images/ava_2.jpg'
import ava_3 from './../../assets/images/ava_3.jpg'
import ava_4 from './../../assets/images/ava_4.jpg'
import ava_5 from './../../assets/images/ava_5.jpg'
import ava_6 from './../../assets/images/ava_6.jpg'

export const Profile = () => {
    const Posts = [
        {id: 1, message: 'Are you mad?!!', likesCount: 0, userImage: ava_1},
        {id: 2, message: 'The best day of my life', likesCount: 5, userImage: ava_2},
        {id: 3, message: 'Be cool!', likesCount: 12, userImage: ava_3},
        {id: 4, message: 'Happy easter', likesCount: 3, userImage: ava_4},
        {id: 5, message: 'Grumpy freek', likesCount: 0, userImage: ava_5},
        {id: 6, message: 'We are the champions!!', likesCount: 100, userImage: ava_6},
    ]

    return (
        <div className={s.MainContent}>
            <img className={s.poster}
                 src="https://images.theconversation.com/files/379026/original/file-20210115-21-90wsyw.jpg?ixlib=rb-1.1.0&rect=7%2C131%2C4876%2C2438&q=45&auto=format&w=1356&h=668&fit=crop"
                 alt="mountains"/>
            <div className={s.description}>
                <div>ava + description</div>
                <MyPosts posts={Posts}/>
            </div>
        </div>
    );
};

