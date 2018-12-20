import React from 'react';
import Personal from './Personal';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import meRound from '../images/me-round.png';
import {CSSTransition} from 'react-transition-group';

class Profile extends React.Component{
  constructor(){
    super();
    this.state={
      profileInfo: "Personal"
    }
  }

  chooseData(){
    switch(this.state.profileInfo){
      case 'Personal':
        return <Personal timeOut={this.props.timeOut}/>
      case 'Experience':
        return <Experience timeOut={this.props.timeOut}/>
      case 'Education':
        return <Education timeOut={this.props.timeOut}/>
      case 'Skills':
        return <Skills timeOut={this.props.timeOut}/>
      default:
        return <Personal timeOut={this.props.timeOut}/>
    }
  }

  changeData(e){
    const chosenData = e.target.innerHTML;
    this.setState({profileInfo: `${chosenData}`})
  }

  selectedProfileTab(tab){
    if(this.state.profileInfo === tab){
      return "solid 3px rgb(0, 148, 240)"
    }
  }

  render(){
    return(
      <CSSTransition classNames="fade" timeout={this.props.timeOut} in={true} appear={true}>
          <div className='profile'>
            <div className="profile-left">
              <div className="data-screen">
                {this.chooseData()}
              </div>
              <ul>
                <li onClick={e => this.changeData(e)} style={{borderBottom: this.selectedProfileTab("Personal")}}>Personal</li>
                <li onClick={e => this.changeData(e)} style={{borderBottom: this.selectedProfileTab("Experience")}}>Experience</li>
                <li onClick={e => this.changeData(e)} style={{borderBottom: this.selectedProfileTab("Education")}}>Education</li>
                <li onClick={e => this.changeData(e)} style={{borderBottom: this.selectedProfileTab("Skills")}}>Skills</li>
              </ul>
            </div>
            <div className="profile-right">
              <img src={meRound} alt="rounded-me" />
              <p>I am someone that makes things happen in a creative, logical and efficient way.</p>
              <p>“Everything you can imagine is Real”<br />- Pablo Picasso</p>
            </div>
          </div>
      </CSSTransition>
    );
  }
}

export default Profile;
