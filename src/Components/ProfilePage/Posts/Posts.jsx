import React from 'react';
import Post from "./Post";




const Posts = (props) => {

   let newPostText = React.createRef();
    let onAddPost = () => {
        props.addPost();
        props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostText.current.value;
        props.updateNewPostText(text);
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