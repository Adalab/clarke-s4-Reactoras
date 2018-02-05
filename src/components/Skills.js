import React, { Component } from 'react';
import Collapse  from './Collapse';



class Skills extends Component {
  constructor(props){
    super(props);
    this.state = {
      skills:['']
    };
  }

  addOption = () => {
    this.setState(prevState => {
      return Object.assign({}, prevState, {skills: [...prevState.skills, ''] })  ;
    })
  }

  deleteOption = () => {
    this.setState(prevState => {
      return Object.assign({}, prevState, {skills: [...prevState.skills].slice(0, -1) })  ;
    })
  }

  updateOption = (event) => {
    const updateValue = event.target.value;
    const index = event.target.dataset.index;

    this.setState(prevState => {
      const skillsCopy = [...prevState.skills];
      skillsCopy[index] = updateValue;

      return Object.assign({}, prevState, {skills: skillsCopy })  ;
    })
  }



  render() {
    return (
      <Collapse legend="Habilidades">

<div  className = "skills-container">
          {this.state.skills.map((skill, index)=> {
            return <input key={index} onChange={this.updateOption} data-index={index} className="user-skills skills-text default-input-txtarea" defaultValue={skill} data-id="0" type="text" name="firstskill"  placeholder="Habilidad*"  />
            ;
          })}
          </div>
  <p className="indicative-text-typo">*Campos obligatorios</p>

          <div className="skills-buttons margin-xs">

            <img onClick={this.addOption} className="add-button" src="images/add.svg" alt="add button" />
            <img className="up-button" src="images/up.svg" alt="up button" />
            <img className="down-button" src="images/down.svg" alt="down button" />
            <img onClick={this.deleteOption} className="remove-button" src="images/remove.svg" alt="remove button" />
          </div>
      </Collapse>
    );
  }
}

export default Skills;
