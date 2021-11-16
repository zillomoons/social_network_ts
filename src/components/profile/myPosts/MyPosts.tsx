import React from 'react';
import Post, {PostPropsType} from "./post/Post";
import {TextareaForm} from "../../../common/forms_formik/textarea_form";
import s from "./MyPosts.module.css";

type MyPostsPropsType = {
    posts: PostPropsType[]
    addPost: () => void
    updatePost: (newText: string) => void
}

const MyPosts = React.memo(({posts, updatePost, addPost}: MyPostsPropsType) => {
    const mappedPosts = posts.map(p => <Post key={p.id} id={p.id} userImage={p.userImage} message={p.message}
                                             likesCount={p.likesCount}/>)
    return (
        <div>
            <h3>My posts</h3>
            <TextareaForm addCallback={addPost}
                          updateCallback={updatePost}
                          styleObject={s.addNewPost} buttonName='Add post'/>
            {mappedPosts}
        </div>
    );
}) ;

export default MyPosts;