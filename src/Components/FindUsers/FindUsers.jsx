import React from 'react';
import classes from './FindUsers.module.css';

function FindUsers(props) {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    name: 'Stela',
                    avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1665922271~exp=1665922871~hmac=d991083635ddce751d0ffca987adebaa59b751da06e7cc584828800a7ccef4e6',
                    status: 'Dreams ...',
                    location: {
                        country: 'Russia',
                        city: 'Volgograd',
                    },
                    followed: true,
                },
                {
                    id: 2,
                    name: 'Lera',
                    avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1665922271~exp=1665922871~hmac=d991083635ddce751d0ffca987adebaa59b751da06e7cc584828800a7ccef4e6',
                    status: 'Dreams ...',
                    location: {
                        country: 'Russia',
                        city: 'Moscow',
                    },
                    followed: false,
                },
                {
                    id: 3,
                    name: 'David',
                    avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1665922271~exp=1665922871~hmac=d991083635ddce751d0ffca987adebaa59b751da06e7cc584828800a7ccef4e6',
                    status: 'Dreams ...',
                    location: {
                        country: 'Russia',
                        city: 'Omsk',
                    },
                    followed: true,
                },
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={classes.avatar}>
                            <img src={u.avatar} alt=""/>
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
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default FindUsers;