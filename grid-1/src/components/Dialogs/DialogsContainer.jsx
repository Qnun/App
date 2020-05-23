import React from 'react';
import {sentMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sentMessage: () => {
            dispatch(sentMessageActionCreator())
        },
        onMessageChange: (text) => {
            let action = updateNewMessageTextActionCreator(text)
            dispatch(action)
        }
    }
};

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)