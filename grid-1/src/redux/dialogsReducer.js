const SENT_MESSAGE = 'SENT-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
        dialogs: [
            {id: 1, name: 'Misha'},
            {id: 3, name: 'Nina'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'}
        ],
        newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SENT_MESSAGE:
            let message = state.newMessageText;
            state.messages.push({id: 2, message: message});
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sentMessageActionCreator = () => ({type: SENT_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;