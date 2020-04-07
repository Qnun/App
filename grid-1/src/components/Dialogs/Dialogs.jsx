import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let paht = "/dialogs/" + props.id;

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to = {paht} >{props.name}</NavLink>
        </div>

    );
}

const Message = (props) =>{
    return(
        <div className={s.massage}>{props.text}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name="Misha" id="1"/>
                <DialogsItem name="Nastya" id="2"/>

            </div>
            <div className={s.messages}>
                <Message text="Hi"/>
                <Message text="Hello"/>
            </div>
        </div>
    );
}

export default Dialogs;