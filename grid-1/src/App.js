import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.navbar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile
                    state={props.state.profilePage}
                    dispatch={props.dispatch}/>}
                />
                <Route path='/dialogs' render={() => <Dialogs
                    state={props.state.dialogsPage}
                    dispatch={props.dispatch}/>}
                />
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    );
}

export default App;
// state={props.state.navbar}