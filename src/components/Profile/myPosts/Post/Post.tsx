import React from 'react';
import classes from './Post.module.css'


type PostProps = {
    message: string
    LikeCounts: string
}
export const Post = (props: PostProps) => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img
                    src="https://avatars.mds.yandex.net/i?id=e20af45393a3c4746ee4a278389d77eb08fa6de8-9863853-images-thumbs&n=13"
                    alt=""/>
                {props.message}
                <div>
                    <span>Like: {props.LikeCounts}</span>
                </div>
            </div>
        </div>
    );
};

