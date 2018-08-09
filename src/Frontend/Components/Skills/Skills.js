import React from "react";
import './Skills.css';

function Skills() {
    return (
        <div className="section-skills">
            <div className="section-skills-container">
                <h2 className="section-skills-title">Skills</h2>
                <ul className="skill-icons">
                    <li><i class="fab fa-html5"></i><div>HTML5</div></li>
                    <li><i class="fab fa-css3"></i><div>CSS3</div></li>
                    <li><i class="fab fa-react"></i><div>ReactJS</div></li>
                    <li><i class="fab fa-js"></i><div>JavaScript</div></li>
                    <li><i class="fab fa-node"></i><div>NodeJS</div></li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;