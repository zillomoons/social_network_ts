import React from 'react';
import Post from "./post/Post";

const MyPosts = (props: any) => {
    return (
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <div>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
    );
};

export default MyPosts;