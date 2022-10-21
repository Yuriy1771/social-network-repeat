import React from 'react';
import classes from './NewsElement.module.css';

function NewsElement(props) {
    return (
        <div className={classes.container}>
            <div className={classes.news}>
                <div className={classes.description}>
                        <img src={props.avatar} alt="avatar"/>
                        <span>{props.name}</span>
                </div>
                <div className={classes.textNews}>
                    <p>{props.textNews}</p>
                </div>
                <div className={classes.imgNews}>
                    <img src={props.imgNews} alt=""/>
                </div>
                <div className={classes.likesCount}>
                    <span>Likes {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default NewsElement;