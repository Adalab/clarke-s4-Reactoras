import React, { Component } from 'react';
import Collapse  from './Collapse';


class Skills extends Component {

  render() {
    return (
      <Collapse legend="Habilidades">
          <input className="user-skills skills-text default-input-txtarea" type="text" name="firstskill"  placeholder="Habilidad*" required />
          <input className="user-new-skills skills-text hidden default-input-txtarea" type="text" name="firstskill"  placeholder="Habilidad*" required />
          <p className="indicative-text-typo">*Campos obligatorios</p>
          <div className="skills-buttons margin-xs">
            <img id="add-skills" className="add-button" src="images/add.svg" alt="add button" />
            <img className="up-button" src="images/up.svg" alt="up button" />
            <img className="down-button" src="images/down.svg" alt="down button" />
            <img id="quit-skills" className="remove-button" src="images/remove.svg" alt="remove button" />
          </div>
      </Collapse>
    );
  }
}

export default Skills;
