import React from 'react';
import {addNewsAC, updateNewsTextAC} from "../../Redux/news-reducer";
import News from "./News";

function NewsContainer(props) {

    let onAddNews = () => {
        props.store.dispatch(addNewsAC());
    }

    let onNewsChange = (text, img) => {
        props.store.dispatch(updateNewsTextAC(text,img));
    }

    return (
        <News
            addNews={onAddNews}
            updateNewsText={onNewsChange}
            store={props.store}
            newsPage={props.store.getState().newsPage}
        />
    )
}

export default NewsContainer;