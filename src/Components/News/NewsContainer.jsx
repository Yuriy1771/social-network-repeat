import React from 'react';
import {addNewsAC, updateNewsTextAC} from "../../Redux/news-reducer";
import News from "./News";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        state: state.newsPage,
        newPostText: state.newsPage.newPostText,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNews: () => {
            dispatch(addNewsAC());
        },
        updateNewsText: (text,img) => {
            dispatch(updateNewsTextAC(text, img));
        },
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;