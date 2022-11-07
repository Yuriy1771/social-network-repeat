import React from 'react';
import classes from './FindUsers.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/avatarDefault.png';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(
                    response.data.items
                )
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);
        return (
            <div>
                <div>
                    {slicedPages.map(p => {
                        return <span onClick={(e) => {
                            this.onPageChanged(p)
                        }} className={this.props.currentPage === p && classes.select}>{p}</span>
                    })}

                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div className={classes.container}>
                            <div className={classes.containerOne}>
                                <div className={classes.avatar}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                </div>
                                <div className={classes.btnFollowOrUnfollow}>
                                    {u.followed ? <button className={classes.followBtn} onClick={() => {
                                            this.props.follow(u.id)
                                        }}>Follow</button> :
                                        <button className={classes.unFollowBtn} onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollow</button>}

                                </div>
                            </div>
                            <div className={classes.containerTwo}>
                                <div className={classes.fullname}>{u.name}</div>
                                <div className={classes.status}>{u.status}This is status</div>
                            </div>
                            <div className={classes.containerThree}>
                                <div className={classes.country}>u.location.country</div>
                                <div className={classes.city}>u.location.city</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;