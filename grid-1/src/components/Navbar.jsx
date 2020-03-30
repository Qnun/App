import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className ='nav'>
            <div className = 'item' >
                <a>Profile</a>
            </div>
            <div className = 'item'>
                <a>Messages</a>
            </div>
            <div className = 'item'>
                <a>Music</a>
            </div>
            <div className = 'item'>
                <a>News</a>
            </div>
            <div className = 'item'>
                <a>Setting</a>
            </div>
        </nav>
    );
}

export default Navbar;