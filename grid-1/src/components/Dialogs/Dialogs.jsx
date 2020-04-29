import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements =
        state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElements =
        state.messages.map(m => <Message text={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();
    let newMessageText = props.newMessageText;

    let onSentMessage = () => {
        props.sentMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
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
                        <button onClick={onSentMessage}>Sent message</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;