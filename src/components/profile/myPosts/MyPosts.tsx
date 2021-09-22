import React from 'react';
import Post, {PostPropsType} from "./post/Post";
import styles from './MyPosts.module.css'

type MyPostsPropsType = { posts: Array<PostPropsType> }

const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div>
            <h3>My posts</h3>
            <div className={styles.addNewPost}>
                <div>
                    <textarea placeholder={'Add post'}></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div>
                {
                    props.posts.map(p => {
                        return <Post key={p.id} id={p.id} userImage={p.userImage} message={p.message} likesCount={p.likesCount}/>
                    })
                }

            </div>
        </div>
    );
};

export default MyPosts;