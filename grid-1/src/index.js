import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id:1, message:'Hi! How are you?', like:5},
    {id:2, message:'It\'s my first post!', like:7}
]

let dialogs = [
    {id: 1, name: 'Misha'},
    {id: 3, name: 'Nina'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

