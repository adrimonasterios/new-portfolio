import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Skills = (props) => {
  return(
    <CSSTransition classNames="fade" timeout={props.timeOut} in={true} appear={true}>
      <div className="data">
        <h2>Development Skills</h2>
        <div className="skill-group">
          <div className="skills-item">
            <p className="skill">HTML</p>
            <progress value="85" max="100"></progress>
          </div>
          <div className="skills-item">
            <p className="skill">CSS</p>
            <progress value="85" max="100"></progress>
          </div>
          <div className="skills-item">
            <p className="skill">JavaScript</p>
            <progress value="85" max="100"></progress>
          </div>
          <div className="skills-item">
            <p className="skill">ReactJS</p>
            <progress value="75" max="100"></progress>
          </div>
          <div className="skills-item">
            <p className="skill">Ruby</p>
            <progress value="70" max="100"></progress>
          </div>
          <div className="skills-item">
            <p className="skill">Ruby on Rails</p>
            <progress value="65" max="100"></progress>
          </div>
          <div className="skills-item">
            <p className="skill">React Native</p>
            <progress value="50" max="100"></progress>
          </div>
          <div className="skills-item">
            <p className="skill">Git</p>
            <progress value="70" max="100"></progress>
          </div>
        </div>
        <h2>Design Skills</h2>
        <div className="skill-group">
          <div className="skills-item">
            <p className="skill">Photoshop</p>
            <progress value="90" max="100"></progress>
          </div>
          <div className="skills-item">
            <p className="skill">Illustrator</p>
            <progress value="70" max="100"></progress>
          </div>
          <div className="skills-item">
            <p className="skill">Photography</p>
            <progress value="50" max="100"></progress>
          </div>
        </div>
        <h2>Other Skills</h2>
        <div className="skill-group">
          <div className="skills-item">
            <p className="skill">Microsoft Office</p>
            <progress value="60" max="100"></progress>
          </div>
          <div className="skills-item">
            <p className="skill">SAP</p>
            <progress value="60" max="100"></progress>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Skills;
