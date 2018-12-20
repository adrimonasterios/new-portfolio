import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Personal = (props) => {
  return(
    <CSSTransition classNames="fade" timeout={props.timeOut} in={true} appear={true}>
      <div className="data">
        <h2>Personal Information</h2>
        <p>Name: Adrian Monasterios Gutierrez</p>
        <p>Date of Birth: 10/06/1988</p>
        <p>Place of Birth: La Paz - Bolivia</p>
      </div>
    </CSSTransition>
  )
}

export default Personal;
