import React from 'react';
import {addNewsAC, updateNewsTextAC} from "../../Redux/news-reducer";
import News from "./News";
import storeContext from "../../storeContext";

function NewsContainer(props) {

    return (
        <storeContext.Consumer>
            {(store) => {
                let state = store.getState().newsPage;

                let onAddNews = () => {
                    store.dispatch(addNewsAC());
                }

                let onNewsChange = (text, img) => {
                    store.dispatch(updateNewsTextAC(text, img));
                }
                return <News
                    addNews={onAddNews}
                    updateNewsText={onNewsChange}
                    store={props.store}
                    newsPage={state}
                />
            }
            }
        </storeContext.Consumer>
    )
}

export default NewsContainer;