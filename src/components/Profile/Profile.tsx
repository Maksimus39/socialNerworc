import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css"
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}
export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={classes.profileContainer}>

            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};