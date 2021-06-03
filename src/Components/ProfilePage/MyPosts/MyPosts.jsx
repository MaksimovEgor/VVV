import React from 'react';
import PostMessage from "./PostMessage";

const MyPosts = (props) => {
    return (
        <div>
            <div>
                <textarea placeholder="say something"/>
                <button>add post</button>
            </div>
            <div>
                <PostMessage />
            </div>
        </div>

    )
}

export default MyPosts;