import React from 'react';
import ava from '../../../common/Images/ava.jpeg';
import style from './Post.module.css';


const Post = (props) => {

    let PostMessage = props.postState.map(p => <div className={style.post}>
        <img src={ava} />
        <span>{p.message}</span>
        <div>Likes {p.likesCount}</div>
    </div>)

    return (
        <div>
            {PostMessage}
        </div>
    )
}

export default Post;