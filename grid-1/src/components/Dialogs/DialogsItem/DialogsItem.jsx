import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let paht = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img
                src='https://www.proza.ru/pics/2019/03/26/916.jpg'/>
            <NavLink to={paht}>{props.name}</NavLink>
        </div>

    );
}

export default DialogsItem;