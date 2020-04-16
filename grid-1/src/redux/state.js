let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! How are you?', like: 5},
            {id: 2, message: 'It\'s my first post!', like: 7}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Misha'},
            {id: 3, name: 'Nina'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'}
        ]
    },
    navbar:{
        friends: [
            {id: 1, friend: 'Misha'},
            {id: 2, friend: 'Nastya'},
            {id: 2, friend: 'Kirill'}
        ]
    }
}

export default state;