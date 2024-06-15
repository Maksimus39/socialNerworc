import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {

    const posts = [
        {id: 1, message: 'Hi how are you?', LikeCounts: '15'},
        {id: 2, message: 'It`s my first post', LikeCounts: '20'}
    ]

    const postsElements = posts.map(post => {
        return (
            <Post key={post.id} message={post.message} LikeCounts={post.LikeCounts}/>
        )
    })

    return (

        <div>
            <h3>My Posts</h3>
            <div className={classes.inputGroup}>
                <textarea className={classes.postInput}></textarea>
                <button className={classes.addPostBtn}>Add post</button>
            </div>
            <div className={classes.posts}>

                {postsElements}
            </div>
        </div>
    );
};


