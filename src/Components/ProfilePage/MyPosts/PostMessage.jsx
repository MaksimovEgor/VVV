import React from 'react';
import ava from '../../../common/Images/ava.jpeg';
import style from './MyPosts.module.css';


const Post = (props) => {
    return (
        <div>
            <img src={ava} alt="small ava"/>
            <span>{props.message}</span>
            <div>Likes {props.likesCount}</div>
        </div>
    )
}

const PostMessage = (props) => {
    return (
        <div className={style.postMessage}>
            <div>
                <Post message="Wish you good luck" likesCount="18"/>
            </div>
        </div>
    )
}

export default PostMessage;