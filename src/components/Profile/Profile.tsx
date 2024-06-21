import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css"
import {PostsType} from "../../index";

type ProfileProps={
    posts: PostsType[]
}
export const Profile = ({posts}:ProfileProps) => {

    return (
        <div className={classes.profileContainer}>

            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};
