import React from 'react';
import classes from './FindUsers.module.css';
import axios from "axios";
import userFhoto from '../../assets/images/avatarDefault.png';

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
                    <span>
                        <div className={classes.avatar}>
                            <img src={u.photos.small != null ? u.photos.small: userFhoto}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button> :
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>u.location.country</div>
                            <div>u.location.city</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default FindUsers;