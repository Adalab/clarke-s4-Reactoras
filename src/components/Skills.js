import React, { Component } from 'react';
import Collapse  from './components/Collapse';


class Skills extends Component {

  render() {
    return (

              <Collapse className="default-fieldset">
                <legend>Habilidades</legend>
                <button data-id={1} className="edit-button squared-primaryColor-width100-button colored1-button-typo padding-xxxxs margin-xxxxs" type="button" name="button">Editar</button>
                <div className="skills-input content hidden">
                  <input className="user-skills skills-text default-input-txtarea" type="text" name="firstskill"  placeholder="Habilidad*" required />
                  <input className="user-new-skills skills-text hidden default-input-txtarea" type="text" name="firstskill"  placeholder="Habilidad*" required />
                  <p className="indicative-text-typo">*Campos obligatorios</p>
                  <div className="skills-buttons margin-xs">
                    <img id="add-skills" className="add-button" src="images/add.svg" alt="add button" />
                    <img className="up-button" src="images/up.svg" alt="up button" />
                    <img className="down-button" src="images/down.svg" alt="down button" />
                    <img id="quit-skills" className="remove-button" src="images/remove.svg" alt="remove button" />
                  </div>
                  <button data-id={1} className="edit-button squared-primaryColor-width45-button left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>
                  <button id="skills-button" className="rounded-lightColor-width45-button right colored2-button-typo margin-md padding-xxxxs" type="button" name="button">guardar</button>
                </div>
              </Collapse>


      </div>
    );
  }
}

export default Skills;
