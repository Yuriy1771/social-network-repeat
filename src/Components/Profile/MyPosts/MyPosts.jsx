import React from 'react';
import classes from './MyPosts.module.css';
function MyPosts(props) {
    return (
        <div>
            My posts
            <div>
               <textarea></textarea>
                <div>
                <button>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;