import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <img
                src='https://www.proza.ru/pics/2019/03/26/916.jpg'/>
            {props.text}
        </div>
    );
}

export default Message;