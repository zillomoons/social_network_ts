import React, { ChangeEvent } from 'react';
import Post, {PostPropsType} from "./post/Post";
import s from './MyPosts.module.css'

type MyPostsPropsType = {
    posts: Array<PostPropsType>
    addPostCallback: (postMessage: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let newPost: string

    const onNewPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        newPost = e.currentTarget.value
    }
    const onAddPost = () =>{
        props.addPostCallback(newPost)
        newPost = ''
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addNewPost}>
                <textarea onChange={onNewPostChange} placeholder={'Add post'}></textarea>
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