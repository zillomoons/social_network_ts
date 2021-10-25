import { addPostAC, updatePostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/redux_store";

// type MyPostsContainerPropsType = {
//     profilePage: ProfilePageType
//     dispatch: (action: ActionTypes) => void
// }
// export const MyPostsContainer = () => {
//
//     const updatePostText = (newText:string) => dispatch(updatePostAC(newText))
//     const addNewPost = () => dispatch(addPostAC());
//
//     return (
//         <MyPosts posts={profilePage.posts}
//                  newPostText={profilePage.newPostText}
//                  addNewPost={addNewPost}
//                  updatePostText={updatePostText}
//         />
//     );
// };

const mapState = (state: RootState) => ({
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    })
const mapDispatch = (dispatch: AppDispatch) => ({
    addNewPost: () => dispatch(addPostAC()),
    updatePostText: (newText: string) => dispatch(updatePostAC(newText))
})

export const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts)





