import React from 'react';
import s from './Post.module.css'

export type PostPropsType = {
    id: number
    message: string
    likesCount: number
    userImage: string
}
const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={s.postWrapper}>
            <img className={s.avatar}
                 src={props.userImage}
                 alt="avatarka"/>
            {props.message}
            </div>
            <div className={s.like}>Likes: {props.likesCount}</div>
        </div>
    );
};

export default Post;