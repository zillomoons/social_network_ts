import React from 'react';
import s from './Post.module.css'

export type PostPropsType = {
    id: string
    message: string
    likesCount: number
    userImage: string
}
const Post_Private = (props: PostPropsType) => {
    console.log('OLD POSTS')
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

const Post = React.memo(Post_Private)

export default Post;