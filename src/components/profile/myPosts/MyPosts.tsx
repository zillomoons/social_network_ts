import React from 'react';
import Post from "./post/Post";
import {TextareaForm} from "../../../common/forms_formik/textarea_form";
import s from "./MyPosts.module.css";
import {PostType} from "../../../redux/profile-reducer/profileReducer";

type MyPostsPropsType = {
    posts: PostType[]
    addPost: (newText: string) => void
    removePost: (id: string) => void
}

const MyPosts = React.memo(({posts, addPost, removePost}: MyPostsPropsType) => {
    const mappedPosts = posts.map(p => <Post key={p.id} id={p.id}
                                             removePost={removePost}
                                             userImage={p.userImage}
                                             message={p.message}
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