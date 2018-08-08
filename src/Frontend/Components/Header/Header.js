import React from 'react';
import "./Header.css";

function Header() {
   return (
      <div className="header">
         <div className="header__text-box">
            <h1 className="heading-primary">
               <span className="heading-primary-name">Chris Woolnough</span>
               <span className="heading-primary-jobTitle">Frontend Developer</span>
            </h1>
         </div>
      </div>
   )
}

export default Header;