import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Education = (props) => {
  return(
    <CSSTransition classNames="fade" timeout={props.timeOut} in={true} appear={true}>
      <div className="data">
        <h2>Education</h2>
        <div className="education-row">
          <p className="exp-1">2018</p><p className="exp-2">Full Stack Web Development</p><p className="exp-3">Wyncode Academy</p><p className="exp-4">USA</p>
        </div>
        <div className="education-row">
          <p className="exp-1">2016</p><p className="exp-2">Marketing and Sales (Certificate Program)</p><p className="exp-3">Universidad Privada Boliviana</p><p className="exp-4">Bolivia</p>
        </div>
        <div className="education-row">
          <p className="exp-1">2016</p><p className="exp-2">Photography (Certificate Program)</p><p className="exp-3">Instituto Da Vinci</p><p className="exp-4">Bolivia</p>
        </div>
        <div className="education-row">
          <p className="exp-1">2011</p><p className="exp-2">Exchange Program</p><p className="exp-3">Universität zu Köln</p><p className="exp-4">Germany</p>
        </div>
        <div className="education-row">
          <p className="exp-1">2007-2012</p><p className="exp-2">Business Economics</p><p className="exp-3">Universidad Torcuato Di Tella</p><p className="exp-4">Argentina</p>
        </div>
        <div className="education-row">
          <p className="exp-1">1994-2006</p><p className="exp-2">German School</p><p className="exp-3">Colegio Aleman Mariscal Braun</p><p className="exp-4">Bolivia</p>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Education;
