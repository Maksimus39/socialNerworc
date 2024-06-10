import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            My Post
            <div className="input-group">
                <textarea className="post-input"></textarea>
                <button className="add-post-btn">Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={'Hi how are you?'} LikeCounts={'15'}/>
                <Post message={'It`s my first post'} LikeCounts={'20'}/>
            </div>
        </div>
    );
};


