import React, {Component} from 'react';

class ButtonLess extends Component {
  constructor(props) {
    super(props);
    // this.state ={
    //   skills: this.setState
    //   }
    this.quitOption = this.quitOption.bind(this);
  }

  quitOption(){

    // this.setState ={
    //    skills:this.state.skills.pop('Otra habilidad') }

    const skillsContainer = document.querySelector('.skills-container')
    const skillsElement = document.querySelector('.user-skills');
    skillsContainer.removeChild(skillsElement);
  }


  render(){

    return(
      <img onClick={this.quitOption} id="quit-skills" className="remove-button" src="images/remove.svg" alt="remove button" />

    );
  }
}

export default ButtonLess;
