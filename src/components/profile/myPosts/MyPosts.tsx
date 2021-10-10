import React, { ChangeEvent } from 'react';
import Post, {PostPropsType} from "./post/Post";
import s from './MyPosts.module.css'
import {ActionTypes, addPostAC, updatePostAC} from "../../redux/state";

type MyPostsPropsType = {
    posts: PostPropsType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const onNewPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(updatePostAC(e.currentTarget.value))

    const onAddPost = () => props.dispatch(addPostAC());


    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addNewPost}>
                <textarea onChange={onNewPostChange} value={props.newPostText} placeholder={'Add post'} />
                <button onClick={onAddPost}>Add post</button>
            </div>
            {
                props.posts.map(p => {
                    return <Post key={p.id} id={p.id} userImage={p.userImage} message={p.message}
                                 likesCount={p.likesCount}/>
                })
            }
        </div>
    );
};

export default MyPosts;