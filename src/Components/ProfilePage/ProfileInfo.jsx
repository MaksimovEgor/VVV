import React from 'react';
import Preloader from "../../common/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={props.profile.photos.large}/>
            </div>

            <div><b>STATUS</b></div>
            <div>
                <h6>About profile</h6>
                {props.profile.lookingForAJob}
            </div>

        </div>
    )
}

export default ProfileInfo;