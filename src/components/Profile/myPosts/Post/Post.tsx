import React from 'react';
import classes from './Post.module.css'


type PostProps = {
    message: string
    LikeCounts:string
}
export const Post = (props: PostProps) => {
    return (
        <div className={classes.posts}>
            <div className={classes.item}>
                <img
                    src="https://avatars.mds.yandex.net/i?id=45930fdce19feb6a99dcb51190d4f690043ae983-12647654-images-thumbs&n=13"
                    alt=""/>
                {props.message}
                <div>
                    <span>Like: {props.LikeCounts}</span>
                </div>
            </div>
        </div>
    );
};

