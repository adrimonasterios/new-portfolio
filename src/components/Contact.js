import React from 'react';
import contact from '../images/contact.jpg';
import { CSSTransition } from 'react-transition-group';

const Contact = (props) =>{
  return(
    <CSSTransition classNames="fade" timeout={props.timeOut} in={true} appear={true}>
      <div className="contact">
        <div className="contact-left">
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/adrian-monasterios-gutierrez/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" />Adrián Monasterios Gutiérrez</a>
          </div>
          <div className="contact-item">
            <a href="https://github.com/adrimonasterios" target="_blank" rel="noopener noreferrer"><i className="fab fa-github" />adrimonasterios</a>
          </div>
          <div className="contact-item">
            <a href="https://www.instagram.com/adrimonasterios/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" />adrimonasterios</a>
          </div>
          <div className="contact-item">
            <p><i className="far fa-envelope" />adri.monasterios&#8203;@gmail.com</p>
          </div>
        </div>
        <div className="contact-right">
          <img src={contact} alt="contact" />
        </div>
      </div>
    </CSSTransition>
  )
}

export default Contact;
