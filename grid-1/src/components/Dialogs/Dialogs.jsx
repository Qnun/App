import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";


const Dialogs = (props) => {

    let dialogsElements =
        props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElements =
        props.messages.map(m => <Message text={m.message} id={m.id}/>);

    let addNewMessage = (values) => {
        props.sentMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

                <div className={s.sentElements}>
                    <DialogsReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>

        </div>
    )
}

const maxLength50 =  maxLengthCreator(50);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newMessageBody"
                       validate={[required, maxLength50]}
                       placeholder="Use me!"
                />
            </div>
            <div>
                <button>Sent message</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form:"dialogMessage"})(DialogsForm)

export default Dialogs;