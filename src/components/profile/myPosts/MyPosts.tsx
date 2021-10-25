import React, {ChangeEvent} from 'react';
import Post, {PostPropsType} from "./post/Post";
import s from './MyPosts.module.css';

type MyPostsPropsType = {
    posts: PostPropsType[]
    newPostText: string
    addNewPost: () => void
    updatePostText: (newText: string) => void
}

const MyPosts = ({posts, updatePostText, newPostText, addNewPost}: MyPostsPropsType) => {

    const onNewPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        updatePostText(newText);
    }
    const onAddPost = () => addNewPost();
    console.log('MyPosts')
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div className={s.addNewPost}>
                <textarea onChange={onNewPostChange} value={newPostText} placeholder={'Add post'}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            {
                posts.map(p => {
                    return <Post key={p.id} id={p.id} userImage={p.userImage} message={p.message}
                                 likesCount={p.likesCount}/>
                })
            }
        </div>
    );
};

export default MyPosts;