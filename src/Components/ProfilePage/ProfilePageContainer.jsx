import React from 'react';
import ProfilePage from "./ProfilePage";
import {addPostAC, updateNewPostTextAC} from "../../Redux/profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postState: state.profilePage.postState,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (e) => {
            let newText = e.target.value;
            dispatch(updateNewPostTextAC(newText))
        }
    }
}

const ProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

export default ProfilePageContainer;