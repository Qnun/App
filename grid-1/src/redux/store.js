import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', like: 5},
                {id: 2, message: 'It\'s my first post!', like: 7}
            ],
            newPostText: 'hi'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Misha'},
                {id: 3, name: 'Nina'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'}
            ],
            newMessageText: ''
        },
        navbar: {
            friends: [
                {id: 1, friend: 'Misha'},
                {id: 2, friend: 'Nastya'},
                {id: 2, friend: 'Kirill'}
            ]
        }
    }, //свойство
    _rerender() {
    }, //метод (функция, которая пренадлежит объекту)

    subscribe(observer) {
        this._rerender = observer;
    }, //redux
    getState() {
        return this._state;
    },//redux

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._rerender(this._state);
    },//redux
}

export default store;
window.store = store;