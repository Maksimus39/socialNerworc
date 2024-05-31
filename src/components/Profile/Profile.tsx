import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://wenet.pl/blog/wp-content/uploads/2021/02/Zmiany_na_Facebooku_dla_reklamodawcow_czyli_testowanie_wykluczen_tematow-e1624269470332.jpg"
                    alt=""/>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts/>
        </div>
    );
};

