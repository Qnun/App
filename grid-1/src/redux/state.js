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
            newMessageText: 'Change me'
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
    },

    getState() {
        return this._state;
    },

    sentMessage() {
        let newMessage = {
            id: 3,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._rerender(this._state);
    },
    appdateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._rerender(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._rerender(this._state);
        } else if (action.type === 'APPDATA-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._rerender(this._state);
        }
    }

}

export default store;
window.store = store;