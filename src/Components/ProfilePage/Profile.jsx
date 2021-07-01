import React from 'react';
import style from './ProfilePage.module.css';
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo";


const Profile = (props) => {
    return (
        <div className={style.profilePage}>

            <ProfileInfo profile={props.profile}/>
            <MyPosts
                onAddPost={props.onAddPost}
                newPostText={props.newPostText}
                onPostChange={props.onPostChange}
                postState={props.postState}/>
        </div>
    )
}


export default Profile;