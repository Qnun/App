const SENT_MESSAGE = 'SENT_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Misha'},
        {id: 3, name: 'Nina'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'}
    ],

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SENT_MESSAGE: {
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 3, message: newMessage}]
            }
        }
        default:
            return state;
    }
}

export const sentMessageActionCreator = (newMessageBody) => ({type: SENT_MESSAGE, newMessageBody})

export default dialogsReducer;