import React from 'react';
import Post from "./Post";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/store";

const Posts = (props) => {



   let newPostText = React.createRef();
    let onAddPost = () => {
        props.dispatch(addPostAC());
        props.dispatch(updateNewPostTextAC());
    }

    let onPostChange = () => {
        let newText = newPostText.current.value;
        props.dispatch(updateNewPostTextAC(newText));
    }

    return (
        <div>

            <div>
                <textarea
                    ref={newPostText}
                    onChange={onPostChange}
                    value={props.newPostText}/>
            </div>
            <div>
                <button onClick={onAddPost}>Add Post</button>
            </div>

            <div>
                <Post postState={props.postState}/>
            </div>

        </div>
    )
}

export default Posts;