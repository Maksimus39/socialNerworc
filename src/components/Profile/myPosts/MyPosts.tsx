import React, {ChangeEvent, useState} from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    const [text, setPostText] = useState(''); // Инициализируем состояние с пустой строкой

    const postsElements = props.profilePage.posts.map(post => {
        return (
            <Post key={post.id} message={post.message} LikeCounts={post.LikeCounts}/>
        )
    })


    let addPost = () => {
        if(text.trim()){
            console.log(text)
            props.addPost(text)
            setPostText('')
        }
    }

    let onPostChange = (event:ChangeEvent<HTMLTextAreaElement> ) => {
        setPostText(event.currentTarget.value)
    }

    return (

        <div>
            <h3>My Posts</h3>
            <div className={classes.inputGroup}>

                <textarea

                    className={classes.postInput}
                    value={text}
                    onChange={onPostChange}
                />


                <button className={classes.addPostBtn} onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>

                {postsElements}
            </div>
        </div>
    );
};




