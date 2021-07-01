import React from 'react';
import Profile from "./Profile";
import {addPostAC, setUserProfile, updateNewPostTextAC} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {
    componentDidMount() {
      /*  let userId = this.props.match.params.userId;*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` /*+ userId*/)
            .then(response => {
                    this.props.setUserProfile(response.data);
                }
            )
    }
    render() {
         return <Profile {...this.props} profile={this.props.profile}/>

    }
}

let mapStateToProps = (state) => {
    return {
       /* postState: state.profilePage.postState,
        newPostText: state.profilePage.newPostText,*/
        profile: state.profilePage.profile,
        postState: state.profilePage.postState
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (e) => {
            let newText = e.target.value;
            dispatch(updateNewPostTextAC(newText))
        },
        setUserProfile: (profile) => {
            dispatch(setUserProfile(profile))
        }
    }
}*/

let WithRouterUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithRouterUrl);