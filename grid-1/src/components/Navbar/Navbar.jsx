import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Navbar = (props) => {

    let friendElements = props.state.friends.map(f => <Friend friend={f.friend}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/setting" activeClassName={s.active}>Setting</NavLink>
            </div>
            <div className={s.friends}>
                <h3>Friends</h3>
                <div className={s.friendsElements}>
                    {friendElements}
                </div>
            </div>
        </nav>

    );
}

export default Navbar;