import React from 'react';
import ProfilePage from "./ProfilePage";
import {addPostAC, updateNewPostTextAC} from "../../Redux/profile-reducer";
import StoreContext from "../StoreContext";


const ProfilePageContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();

                let onAddPost = () => {
                    store.dispatch(addPostAC());
                }

                let onPostChange = (e) => {
                    let newText = e.target.value;
                    store.dispatch(updateNewPostTextAC(newText));
                }


                return (
                    <ProfilePage onAddPost={onAddPost}
                                 newPostText={state.profilePage.newPostText}
                                 onPostChange={onPostChange}
                                 postState={state.profilePage.postState}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}


export default ProfilePageContainer;