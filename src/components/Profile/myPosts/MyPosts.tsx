import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (

        <div>
            <h3>My Posts</h3>
            <div className={classes.inputGroup}>
                <textarea className={classes.postInput}></textarea>
                <button className={classes.addPostBtn}>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={'Hi how are you?'} LikeCounts={'15'}/>
                <Post message={'It`s my first post'} LikeCounts={'20'}/>
            </div>
        </div>
    );
};


