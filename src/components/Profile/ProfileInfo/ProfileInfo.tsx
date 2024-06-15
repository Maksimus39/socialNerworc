import React from 'react';
import classes from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (

        <div>
            <div className={classes.profileImgWrapper}>
                <img
                    className={classes.profileImg}
                    src="https://wenet.pl/blog/wp-content/uploads/2021/02/Zmiany_na_Facebooku_dla_reklamodawcow_czyli_testowanie_wykluczen_tematow-e1624269470332.jpg"
                    alt="Профиль"/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    );
};

