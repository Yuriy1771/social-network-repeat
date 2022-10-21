import React from 'react';
import classes from './News.module.css';
import NewsElement from "./NewsElement";

function News(props) {

    let newPost = props.state.newsPage.news.map((n) => {
        return ( <NewsElement id={n.id} avatar={n.avatar} name={n.name} textNews={n.textNews} imgNews={n.imgNews} likesCount={n.likesCount}/> )
    })

    return (
        <div className={classes.container}>
            <div className={classes.addNews}>
                <div className={classes.textarea}>
                    <textarea></textarea>
                </div>
                <div className={classes.btnAddNews}>
                    <button>Add news</button>
                </div>
                <div className={classes.addFile}>
                    <input type="file"/>
                </div>
            </div>
            {newPost}
        </div>
    )
}

export default News;