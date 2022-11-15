import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/Preloader";

function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
        <div className={classes.logo}>
            <img src="https://i.pinimg.com/originals/5c/7d/a0/5c7da0fe7025c9cadd0a1c656e5594c4.jpg"
                 alt="logo-profile"/>
        </div>
        <div className={classes.information}>
            <div className={classes.avatar}>
                <img src={props.profile.photos.large} alt="ava"/>
            </div>
            <div className={classes.description}>
                <div className={classes.name}><p>{props.profile.fullName}</p></div>
                <div className={classes.status}><p>{props.profile.aboutMe}</p></div>
            </div>
        </div>
</div>
    )
}

export default ProfileInfo;