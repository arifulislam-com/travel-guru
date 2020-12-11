import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1> </h1>
            <nav style={{marginTop:"25px"}}>
                <a href="#">News</a>
                <a href="#">Destination</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a style={{backgroundColor: "yellow", color:"black", borderRadius:"5px"}} href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;