import React from 'react';
import {ActionTypes, ProfilePageType} from "../../../redux/store";
import {addPostAC, updatePostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    dispatch: (action: ActionTypes) => void
    profilePage: ProfilePageType
}

export const MyPostsContainer = ({profilePage, dispatch}: MyPostsContainerPropsType) => {

    const updatePostText = (newText:string) => dispatch(updatePostAC(newText))
    const addNewPost = () => dispatch(addPostAC());

    return (
        <MyPosts posts={profilePage.posts}
                 newPostText={profilePage.newPostText}
                 addNewPost={addNewPost}
                 updatePostText={updatePostText}
        />
    );
};

