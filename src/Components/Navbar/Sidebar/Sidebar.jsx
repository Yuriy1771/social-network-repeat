import React from 'react';
import classes from './Sidebar.module.css';

function Sidebar(props) {
    return (
        <div className={classes.sidebarContainer}>
            <div className={classes.sidebarBlockLeft}><img
                src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1665922271~exp=1665922871~hmac=d991083635ddce751d0ffca987adebaa59b751da06e7cc584828800a7ccef4e6"
                alt="" className={classes.avatarSidebar}/>
                <span className={classes.sidebarName}><p>Kate</p></span></div>
            <div className={classes.sidebarBlockCenter}><img
                src="https://img.freepik.com/free-photo/https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?w=740&t=st=1665924138~exp=1665924738~hmac=30cfa413717ec5655e357656e236521ae857e00a288d7f3d329e6e121ed3e706"
                alt="" className={classes.avatarSidebar}/>
                <span className={classes.sidebarName}><p>Igor</p></span></div>
            <div className={classes.sidebarBlockRight}><img
                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000"
                alt="" className={classes.avatarSidebar}/>
                <span className={classes.sidebarName}><p>Vika</p></span></div>
        </div>
    )
}

export default Sidebar;