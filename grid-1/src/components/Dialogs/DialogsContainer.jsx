import React from 'react';
import s from './Dialogs.module.css';
import {sentMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return  <StoreContext.Consumer>
            {store => {
                let state = store.getState()

                let sentMessage = () => {
                    store.dispatch(sentMessageActionCreator())
                }

                let onMessageChange = (text) => {
                    let action = updateNewMessageTextActionCreator(text)
                    store.dispatch(action)
                }
                return <Dialogs sentMessage={sentMessage}
                             updateNewMessageText={onMessageChange}
                             dialogsPage={state.dialogsPage}/>
            }
            }
        </StoreContext.Consumer>
}

export default DialogsContainer;