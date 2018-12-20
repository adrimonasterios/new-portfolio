import React from 'react';
import me from '../images/me.png';

const Home = () =>{
  return(
    <div className="home">
      <img className="me" src={me} alt="adrian" />
      <h1>Adrián<br/>Monasterios<br/>Gutiérrez</h1>
      <div className="shape" />
      <p>Full Stack Web Developer</p>
    </div>
  );
}

export default Home;
