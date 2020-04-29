import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.navbar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile store={props.store}/>} />
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>} />
                <Route path='/music' render={() => <Music/>} />
            </div>
        </div>
    );
}

export default App;
// state={props.state.navbar}