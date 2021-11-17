import React from 'react';
import Post, {PostPropsType} from "./post/Post";
import {TextareaForm} from "../../../common/forms_formik/textarea_form";
import s from "./MyPosts.module.css";

type MyPostsPropsType = {
    posts: PostPropsType[]
    addPost: (newText: string) => void
}

const MyPosts = React.memo(({posts, addPost}: MyPostsPropsType) => {
    const mappedPosts = posts.map(p => <Post key={p.id} id={p.id} userImage={p.userImage} message={p.message}
                                             likesCount={p.likesCount}/>)
    return (
        <div>
            <h3>My posts</h3>
            <TextareaForm addCallback={addPost} styleObject={s.addNewPost} buttonName='Add post'/>
            {mappedPosts}
        </div>
    );
}) ;

export default MyPosts;