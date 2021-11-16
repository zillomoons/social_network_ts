import { addPost, updatePost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux_store";

const mapState = (state: RootState) => ({
        posts: state.profilePage.posts,
    })

export const MyPostsContainer = connect(mapState, {addPost, updatePost})(MyPosts)





