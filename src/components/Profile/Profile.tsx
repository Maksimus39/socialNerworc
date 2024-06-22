import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css"
import {ProfilePageType} from "../../redux/state";


export const Profile = ({posts}: ProfilePageType) => {

    return (
        <div className={classes.profileContainer}>

            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};