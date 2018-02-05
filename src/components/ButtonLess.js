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
    //
    // this.setState ={
    //    skills:this.state.skills.pop }

    const skillsContainer = document.querySelector('.skills-container')
    const skillsElement = document.querySelectorAll('.user-skills');
           for (let i = 0; i < skillsElement.length; i++) {

              //  skillsContainer.insertAdjacentHTML('afterend', skillsElement[i]);}
    // const skillsElement = document.querySelector('.user-skills');
    /*  skillsElement[i].onclick =()=>{*/
        skillsContainer.removeChild(skillsElement[i]);

      // }
    }
    // const skillsElement = document.querySelectorAll('.user-skills');
}



  render(){

    return(
      <img onClick={this.quitOption} id="quit-skills" className="remove-button" src="images/remove.svg" alt="remove button" />

    );
  }
}

export default ButtonLess;
