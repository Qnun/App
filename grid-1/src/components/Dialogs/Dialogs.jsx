import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let paht = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={paht}>{props.name}</NavLink>
        </div>

    );
}

const Message = (props) => {
    return (
        <div className={s.massage}>{props.text}</div>
    );
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Nina'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'}
    ]

    let dialogsElements = dialogs
        .map(d => <DialogsItem name={d.name} id={d.id}/>);

    let messagesElements = messages
        .map(m => <Message text={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;