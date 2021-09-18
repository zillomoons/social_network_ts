import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div>
            <img className={s.avatar} src="https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg" alt="avatarka"/> Post
            <div>like</div>
        </div>
    );
};

export default Post;