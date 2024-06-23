import React, {useRef} from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: PostsType[],
    addPost: (postMessage: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map(post => {
        return (
            <Post key={post.id} message={post.message} LikeCounts={post.LikeCounts}/>
        )
    })


    const newPostElement = useRef<HTMLTextAreaElement | null>(null);

    const addPost = () => {
        let text: string | undefined = newPostElement.current?.value;
        if (text && newPostElement.current !== null) {
            props.addPost(text)
            newPostElement.current.value = ''
        }
    }


    return (

        <div>
            <h3>My Posts</h3>
            <div className={classes.inputGroup}>
                <textarea className={classes.postInput} placeholder='ADD TEXT' ref={newPostElement}></textarea>
                <button className={classes.addPostBtn} onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>

                {postsElements}
            </div>
        </div>
    );
};


