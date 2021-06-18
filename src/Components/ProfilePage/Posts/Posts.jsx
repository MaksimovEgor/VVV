import React from 'react';
import Post from "./Post";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";

const Posts = (props) => {

    let state = props.store.getState();
    let onAddPost = () => {
        props.dispatch(addPostAC());
    }
    let onPostChange = (e) => {
        let newText = e.target.value;
        props.dispatch(updateNewPostTextAC(newText));
    }


    return (
        <div>
            <div>
                <textarea
                    value={state.profilePage.newPostText}
                    onChange={onPostChange}
                    placeholder='create post'
                    />
            </div>
            <div>
                <button onClick={onAddPost}>Add Post</button>
            </div>

            <div>
                <Post postState={state.profilePage.postState}/>
            </div>
        </div>
    )
}

export default Posts;