import React from 'react';
import './NavBar.css';


function NavBar() {
   return (
      <div className="nav">
            <ul className="nav-textbox">
               <li className="nav-item">About</li>
               <li className="nav-item">Project</li>
               <li className="nav-item">Experience</li>
               <li className="nav-item">Education</li>
               <li className="nav-item">Skills</li>
            </ul>
      </div>
   )
}

export default NavBar;