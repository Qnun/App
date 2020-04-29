import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sentMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState()

    let sentMessage = () => {
        props.store.dispatch(sentMessageActionCreator())
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <Dialogs sentMessage={sentMessage}
                     updateNewMessageText={onMessageChange}
                     dialogsPage={state.dialogsPage}/>
}

export default DialogsContainer;