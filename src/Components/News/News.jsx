import React from 'react';
import classes from './News.module.css';
import NewsElement from "./NewsElement";

function News(props) {

    let newPost = props.state.newsPage.news.map((n) => {
        return ( <NewsElement id={n.id} avatar={n.avatar} name={n.name} textNews={n.textNews} imgNews={n.imgNews} likesCount={n.likesCount}/> )
    })

    let newsValue = React.createRef();
    let newsImg = React.createRef();

    let onAddNews = () => {
        debugger
        props.dispatch({type: 'ADD-NEWS'});
    }

    let onNewsChange = () => {
        let text = newsValue.current.value;
        let img = newsImg.current.value;
        props.dispatch({type: 'UPDATE-NEWS-TEXT', newText: text, newImg: img});
    }

    return (
        <div className={classes.container}>
            <div className={classes.addNews}>
                <div className={classes.textarea}>
                    <textarea ref={ newsValue } onChange={ onNewsChange } value={props.state.newsPage.newPostText}></textarea>
                </div>
                <div className={classes.btnAddNews}>
                    <button onClick={ onAddNews }>Add news</button>
                </div>
                <div className={classes.addFile}>
                    <input type="file" ref={ newsImg }/>
                </div>
            </div>
            {newPost}
        </div>
    )
}

export default News;