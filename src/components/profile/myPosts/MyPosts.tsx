import React from 'react';
import Post, {PostPropsType} from "./post/Post";
import s from './MyPosts.module.css'

type MyPostsPropsType = { posts: Array<PostPropsType> }

const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addNewPost}>
                <textarea placeholder={'Add post'}></textarea>
                <button>Add post</button>
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