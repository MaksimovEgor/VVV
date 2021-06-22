import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import Users from "./Users";


const mstp = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mdtp = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mstp, mdtp)(Users);