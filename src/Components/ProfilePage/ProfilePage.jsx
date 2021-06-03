import React from 'react';
import style from './ProfilePage.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ava from '../../common/Images/ava.jpeg';


const ProfilePage = () => {
    return (
        <div className={style.profilePage}>
            <div>
                <img src={ava} alt='avatar'/>
            </div>
            <div>
                <div className={style.informationBlock}>
                    <ProfileInfo />
                    <MyPosts />
                </div>
            </div>

        </div>


    )
}

export default ProfilePage;