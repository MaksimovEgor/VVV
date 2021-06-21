import React from 'react';
import ava from '../../common/Images/ava.jpeg';
import style from './ProfilePage.module.css';
import Posts from "./Posts/Posts";


const ProfilePage = (props) => {
    return (
        <div className={style.profilePage}>

            <div>
                <img src={ava}/>
            </div>

            <div><b>STATUS</b></div>
            <div><h6>About profile</h6></div>


            <Posts
                onAddPost={props.onAddPost}
                newPostText={props.newPostText}
                onPostChange={props.onPostChange}
                postState={props.postState}/>
        </div>
    )
}


export default ProfilePage;