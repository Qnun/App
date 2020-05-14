import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer profile={props.profile} />
        </div>
    );
}

export default Profile;