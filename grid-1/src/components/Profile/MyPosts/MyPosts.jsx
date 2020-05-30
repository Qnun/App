import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostElement);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts.</h3>
            <div>
                <MyPostReduxForm onSubmit={addNewPost}/>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
}

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea"
                       name="newPostElement"
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form:"post"})(MyPostForm)

export default MyPosts;