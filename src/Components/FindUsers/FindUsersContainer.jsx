import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    toggleIsLoading,
    setUsers,
    setTotalUsersCount,
    unfollow
} from "../../Redux/findUsersReducer";
import axios from "axios";
import FindUsers from "./FindUsers";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        return (
            <>
                {this.props.isLoading ? <Preloader/> : null}

                <FindUsers
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage: state.findUsersPage.currentPage,
        isLoading: state.findUsersPage.isLoading,
    }
}



const FindUsersContainer = connect(mapStateToProps, {
     follow,
     unfollow,
     setUsers,
    setCurrentPage,
    setTotalUsersCount,
     toggleIsLoading,
    })(UsersContainer);

export default FindUsersContainer;