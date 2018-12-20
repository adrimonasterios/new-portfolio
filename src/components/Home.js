import React from 'react';
import me from '../images/me.png';
import { CSSTransition } from 'react-transition-group';

const Home = (props) =>{
  return(
    <CSSTransition classNames="fade" timeout={props.timeOut} in={true} appear={true}>
      <div className="home">
        <img className="me" src={me} alt="adrian" />
        <h1>Adrián<br/>Monasterios<br/>Gutiérrez</h1>
        <div className="shape" />
        <p>Full Stack Web Developer</p>
      </div>
    </CSSTransition>
  );
}

export default Home;
