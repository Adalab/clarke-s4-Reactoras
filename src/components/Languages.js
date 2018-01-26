import React, { Component } from 'react';
import Collapse  from './components/Collapse';


class Languages extends Component {

  render() {
    return (
      <div>
          <Collapse className="default-fieldset">
            <legend>Idiomas</legend>
            <button data-id={2} className="edit-button squared-primaryColor-width100-button colored1-button-typo padding-xxxxs margin-xxxxs" type="button" name="button">Editar</button>
            <div className="language-input content hidden">
                <input className="user-language default-input-txtarea" type="text" name="firstlanguage"  placeholder="Idioma*" required />
                <input className="user-level default-input-txtarea" type="text" name="leveltitle"  placeholder="Nivel/Título*" required />
                <p className="indicative-text-typo">*Campos obligatorios</p>
                <div className="language-buttons margin-xs">
                    <img id="add-language" className="add-button" src="images/add.svg" alt="add button" />
                    <img className="up-button" src="images/up.svg" alt="up button" />
                    <img className="down-button" src="images/down.svg" alt="down button" />
                    <img id="quit-language" className="remove-button" src="images/remove.svg" alt="remove button" />
                </div>
              <button data-id={2} className="edit-button squared-primaryColor-width45-button left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>
              <button id="language-button" className="rounded-lightColor-width45-button right colored2-button-typo margin-md padding-xxxxs" type="button" name="button">guardar</button>
            </div>
          </Collapse>

      </div>

    );
  }
}

export default Languages;
