import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://www.proza.ru/pics/2019/03/26/916.jpg"/>

                {props.message}
                {props.like}
            </div>
        </div>
    );
}

export default Post;