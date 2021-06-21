import React from 'react';
import Post from "./Post";

const Posts = (props) => {
    return (
        <div>
            <div>
                <textarea
                    value={props.newPostText}
                    onChange={props.onPostChange}
                    placeholder='create post'
                    />
            </div>
            <div>
                <button onClick={props.onAddPost}>Add Post</button>
            </div>

            <div>
                <Post postState={props.postState}/>
            </div>
        </div>
    )
}

export default Posts;