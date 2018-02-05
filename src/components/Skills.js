import React, { Component } from 'react';
import Collapse  from './Collapse';
import ButtonMore  from './ButtonMore';
import ButtonLess  from './ButtonLess';


class Skills extends Component {

  render() {
    return (
      <Collapse legend="Habilidades">

<div  className = "skills-container">
          <input className="user-skills skills-text default-input-txtarea" data-id="0" type="text" name="firstskill"  placeholder="Habilidad*"  />
          </div>
  <p className="indicative-text-typo">*Campos obligatorios</p>

          <div className="skills-buttons margin-xs">

            <ButtonMore />
            <img className="up-button" src="images/up.svg" alt="up button" />
            <img className="down-button" src="images/down.svg" alt="down button" />
            <ButtonLess />
          </div>
      </Collapse>
    );
  }
}

export default Skills;
