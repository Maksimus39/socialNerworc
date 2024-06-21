import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../index";

type MyPostsProps = {
    posts: PostsType[]
}
export const MyPosts = ({posts}:MyPostsProps) => {


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


