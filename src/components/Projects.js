import React from 'react';
import froogal from '../images/froogal.png';
import perfectWeek from '../images/perfectweek.png';
import todo from '../images/todo.png';
import { CSSTransition } from 'react-transition-group';

const Projects = (props) =>{
  return(
    <CSSTransition classNames="fade" timeout={props.timeOut} in={true} appear={true}>
      <div className="projects">

        <div className="project-container">
          <div className="project">
            <h2>Froogal (mobile view)</h2>
            <a href="https://froogalapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <div className="thumbnail">
                <img src={froogal} alt="froogal" />
                <div className="description">
                  <p className="thumbnail-desc">A mobile app that helps you save money when you go out to have some drinks. It shows the quantity of drinks you can have indifferent venues just by entering your budget for the night</p>
                  <p className="tech">HTML, CSS, ReactJS, Ruby on Rails, MaterialUI</p>
                </div>
              </div>
            </a>
            <div className="description-mobile">
              <p className="thumbnail-desc">A mobile app that helps you save money when you go out to have some drinks. It shows the quantity of drinks you can have indifferent venues just by entering your budget for the night</p>
              <p className="tech">HTML, CSS, ReactJS, Ruby on Rails, MaterialUI</p>
              <hr />
            </div>
            <a className="project-button" href="https://froogalapp.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button type="button" name="show me">Show Me</button></a>
          </div>
        </div>

        <div className="project-container">
          <div className="project">
            <h2>Perfect Week</h2>
            <a href="https://perfectweek.herokuapp.com" target="_blank" rel="noopener noreferrer">
              <div className="thumbnail">
                <img src={perfectWeek} alt="perfect week" />
                <div className="description">
                  <p className="thumbnail-desc">A web app that gives you one restaurant and one venue for each day for an entire week for the location you choose</p>
                  <p className="tech">HTML, CSS, ReactJS, Express.js, Yelp API</p>
                </div>
              </div>
            </a>
            <div className="description-mobile">
              <p className="thumbnail-desc">A web app that gives you one restaurant and one venue for each day for an entire week for the location you choose</p>
              <p className="tech">HTML, CSS, ReactJS, Express.js, Yelp API</p>
              <hr />
            </div>
            <a className="project-button" href="https://perfectweek.herokuapp.com" target="_blank" rel="noopener noreferrer"><button type="button" name="show me">Show Me</button></a>
          </div>
        </div>

        <div className="project-container">
          <div className="project">
            <h2>To-Do App</h2>
            <a href="https://todo-list-amg22.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <div className="thumbnail">
                <img src={todo} alt="to do app" />
                <div className="description">
                  <p className="thumbnail-desc">A web app that lets you create, edit, delete and manage you tasks</p>
                  <p className="tech">HTML, Bootstrap, ReactJS, Ruby on Rails, MapBox</p>
                </div>
              </div>
            </a>
            <div className="description-mobile">
              <p className="thumbnail-desc">A web app that lets you create, edit, delete and manage you tasks</p>
              <p className="tech">HTML, Bootstrap, ReactJS, Ruby on Rails, MapBox</p>
              <hr />
            </div>
            <a className="project-button" href="https://todo-list-amg22.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button type="button" name="show me">Show Me</button></a>
          </div>
        </div>

      </div>
    </CSSTransition>
  );
}

export default Projects;
