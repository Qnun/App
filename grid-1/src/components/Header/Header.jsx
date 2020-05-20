import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>

            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/profile'} >Login</NavLink> }
            </div>

        </header>
    )
};

export default Header;