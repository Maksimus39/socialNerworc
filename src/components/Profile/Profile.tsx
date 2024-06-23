import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css"
import {PostsType} from "../../redux/state";

type ProfilePropsType = {
    posts: PostsType[],
    addPost:(postMessage: string)=>void
}
export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={classes.profileContainer}>

            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
};