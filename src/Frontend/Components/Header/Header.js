import React from 'react';
import NavBar from './NavBar/NavBar';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <NavBar />
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-name">Chris Woolnough</span>
                    <span className="heading-primary-jobTitle">Frontend Developer</span>
                </h1>
                <div className="header-social-icons">
                    <i class="fab fa-linkedin icon"></i>
                    <i class="fab fa-twitter-square icon"></i>
                    <i class="fab fa-github-square icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Header;