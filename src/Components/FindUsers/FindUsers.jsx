import React from 'react';
import classes from './FindUsers.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/avatarDefault.png';

function FindUsers(props) {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(
                response.data.items
            )
        });
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={classes.container}>
                    <div className={classes.containerOne}>
                        <div className={classes.avatar}>
                            <img src={u.photos.small != null ? u.photos.small: userPhoto}/>
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