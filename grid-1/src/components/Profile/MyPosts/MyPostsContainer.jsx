import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
debugger;
    let state = props.store.getState().profilePage

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <MyPosts posts={state.posts}
                      newPostText={state.newPostText}
                      addPost={addPost}
                      updateNewPostText={onPostChange}/>
}

export default MyPostsContainer;