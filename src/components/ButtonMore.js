import React, {Component} from 'react';


class ButtonMore extends Component {
  constructor(props) {
    super(props);
    this.state ={
      skills: [
        'Habilidad'
      ]
    }

    this.addOption = this.addOption.bind(this);

  }

  addOption(){
    this.setState ={
       skills:this.state.skills.push('Otra habilidad') }


      const repeatedItemSkills = `<input className="user-skills skills-text default-input-txtarea" data-id="i" type="text" name="firstskill"  placeholder="Habilidad*"/>`
    	const skillsElement = document.querySelector('.user-skills');
    	skillsElement.insertAdjacentHTML('afterend', repeatedItemSkills);

  }


  render(){

    return(

          <img onClick={this.addOption} id="#add-skills" className="add-button" src="images/add.svg" alt="add button" />

    );
  }
}

export default ButtonMore;
