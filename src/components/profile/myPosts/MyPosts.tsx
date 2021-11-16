import React from 'react';
import Post, {PostPropsType} from "./post/Post";
import {AddPostForm} from "./addPostForm/AddPostForm";

type MyPostsPropsType = {
    posts: PostPropsType[]
    addPost: () => void
    updatePost: (newText: string) => void
}

const MyPosts = ({posts, updatePost, addPost}: MyPostsPropsType) => {
    const mappedPosts = posts.map(p => <Post key={p.id} id={p.id} userImage={p.userImage} message={p.message}
                                             likesCount={p.likesCount}/>)
    return (
        <div>
            <h3>My posts</h3>
            <AddPostForm addPost={addPost} updatePost={updatePost} />
            {mappedPosts}
        </div>
    );
};

export default MyPosts;