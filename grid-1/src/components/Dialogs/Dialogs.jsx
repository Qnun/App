import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sentMessageActionCreator, updateNewMessageText} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElements =
        props.state.messages.map(m => <Message text={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();
    let newMessageText = props.state.newMessageText;

    let sentMessage = () => {
        props.dispatch(sentMessageActionCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageText(text);
        props.dispatch(action);
    }
    debugger;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>

                <div className={s.sentElements}>
                    <div>
                        <textarea onChange={onMessageChange}
                                  ref={newMessageElement}
                                  value={newMessageText}
                                  placeholder='Use me!'/>
                    </div>
                    <div>
                        <button onClick={sentMessage}>Sent message</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;