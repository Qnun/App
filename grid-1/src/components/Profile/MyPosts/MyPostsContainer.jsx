import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().profilePage

            let addPost = () => {
                store.dispatch(addPostActionCreator())
            }

            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text)
                store.dispatch(action)
            }
            return <MyPosts posts={state.posts}
                            newPostText={state.newPostText}
                            addPost={addPost}
                            updateNewPostText={onPostChange}/>
        }
        }
    </StoreContext.Consumer>
}
export default MyPostsContainer;