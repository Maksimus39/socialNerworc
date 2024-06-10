import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-img-wrapper">
                <img
                    className="profile-img"
                    src="https://wenet.pl/blog/wp-content/uploads/2021/02/Zmiany_na_Facebooku_dla_reklamodawcow_czyli_testowanie_wykluczen_tematow-e1624269470332.jpg"
                    alt="Профиль"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};
