import React from 'react';
import {connect} from "react-redux";
import FindUsers from "./FindUsers";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/findUsersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}


const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers)

export default FindUsersContainer;