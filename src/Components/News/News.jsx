import React from 'react';
import classes from './News.module.css';
import NewsElement from "./NewsElement";

function News(props) {

    let newPost = props.state.news.map((n) => {
        return ( <NewsElement id={n.id} avatar={n.avatar}
                              name={n.name} textNews={n.textNews}
                              imgNews={n.imgNews} likesCount={n.likesCount}
                              key={n.id}
        /> )
    })

    let onAddNews = () => {
        props.addNews();
    }

    let onNewsChange = (event) => {
        let text = event.target.value;
        let img = event.target.value;
        props.updateNewsText(text,img)
    }

    return (
        <div className={classes.container}>
            <div className={classes.addNews}>
                <div className={classes.textarea}>
                    <textarea onChange={ onNewsChange } value={props.state.newPostText}></textarea>
                </div>
                <div className={classes.btnAddNews}>
                    <button onClick={ onAddNews }>Add news</button>
                </div>
                <div className={classes.addFile}>
                    <input className={classes.addFileInput} type="file" />
                </div>
            </div>
            {newPost}
        </div>
    )
}

export default News;