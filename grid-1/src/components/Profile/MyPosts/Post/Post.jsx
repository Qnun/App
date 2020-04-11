import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://www.proza.ru/pics/2019/03/26/916.jpg"/>

                <div>{props.message}</div>
                <div>Like:{props.like}</div>
            </div>
        </div>
    );
}

export default Post;