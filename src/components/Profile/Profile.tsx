import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css"


export const Profile = () => {
    return (
        <div className={classes.profileContainer}>

            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};
