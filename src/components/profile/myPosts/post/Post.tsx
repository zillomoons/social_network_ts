import React from 'react';
import s from './Post.module.css'

export type PostPropsType = {
    id: string
    message: string
    likesCount: number
    userImage: string
    removePost: (id: string) => void
}

const Post = React.memo(({id, removePost, message, likesCount, userImage}: PostPropsType) => {
    const deletePost = () => {
        removePost(id)
    }
    return (
        <>
            <div className={s.postWrapper}>
                <img className={s.avatar}
                     src={userImage}
                     alt="avatarka"/>
                {message}
                <button onClick={deletePost} className={s.deleteBtn}>x</button>
            </div>
            <div className={s.like}>Likes: {likesCount}</div>
        </>
    );
});

export default Post;