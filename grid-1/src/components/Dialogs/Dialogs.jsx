import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);

    let messagesElements =
        props.state.messages.map(m => <Message text={m.message} id={m.id}/>);

    let newMessageElement = React.createRef();

    let sentMessage = () => {
        props.sentMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.appdateNewMessageText(text);
    }
    debugger;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}

                <div className={s.sentElements}>
                    <div>
                        <textarea onChange={onMessageChange}
                                  ref={newMessageElement}
                                  value={props.newMessageText}/>
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