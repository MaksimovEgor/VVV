import React from 'react';
import ava from '../../common/Images/ava.jpeg';
import Posts from "./Posts/Posts";
import style from './ProfilePage.module.css';




const ProfilePage = (props) => {
    return (
        <div className={style.profilePage}>

            <div>
                <img src={ava}/>
            </div>

            <div><b>STATUS</b></div>
            <div><h6>About profile</h6></div>


            <Posts postState={props.ProfilePage.postState}
                   newPostText={props.ProfilePage.newPostText}
                   dispatch={props.dispatch}/>


        </div>
    )
}


export default ProfilePage;