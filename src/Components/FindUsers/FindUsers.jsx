import React from 'react';
import classes from './FindUsers.module.css';
import userPhoto from '../../assets/images/avatarDefault.png';
import axios from "axios";

function FindUsers(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 9) < 0) ? 0 : curP - 9;
    let curPL = curP + 9;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            <div className={classes.containerSelects}>
                {slicedPages.map(p => {
                    return <div className={classes.containerSelect}>
                        <div onClick={(e) => {
                            props.onPageChanged(p)
                        }} className={props.currentPage === p && classes.select}>{p}</div>
                    </div>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={classes.container}>
                        <div className={classes.containerOne}>
                            <div className={classes.avatar}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                            </div>
                            <div className={classes.btnFollowOrUnfollow}>
                                {u.followed ? <button className={classes.followBtn} onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button> :
                                    <button className={classes.unFollowBtn} onClick={() => {
                                        props.unfollow(u.id)
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


export default FindUsers;