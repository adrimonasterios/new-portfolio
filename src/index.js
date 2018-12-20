import './css/style.css';
import React from 'react';
import { render } from 'react-dom';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      showComponent: 'Home',
    }
  }

  chooseComponent(){
    switch(this.state.showComponent){
      case 'Home':
        return <Home />
      case 'Profile':
        return <Profile />
      case 'Projects':
        return <Projects />
      case 'Contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  changeComponent(e){
    const chosenComponent = e.target.innerHTML;
    this.setState({showComponent: `${chosenComponent}`})
  }

  selectedTab(tab){
    if(this.state.showComponent === tab){
      return "rgb(0, 148, 244)"
    }
  }

  render(){
    return(
      <div className="main-container">
        <div className="navbar">
          <nav>
            <li onClick={e => this.changeComponent(e)} style={{color: this.selectedTab('Home')}}>Home</li>
            <li onClick={e => this.changeComponent(e)} style={{color: this.selectedTab('Profile')}}>Profile</li>
            <li onClick={e => this.changeComponent(e)} style={{color: this.selectedTab('Projects')}}>Projects</li>
            <li onClick={e => this.changeComponent(e)} style={{color: this.selectedTab('Contact')}}>Contact</li>
          </nav>
        </div>
        {this.chooseComponent()}
      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
