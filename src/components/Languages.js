import React, { Component } from 'react';
import Collapse  from './Collapse';


class Languages extends Component {

  render() {
    return (

          <Collapse legend = "Idiomas">
                <input  id="anita" className="user-language default-input-txtarea" type="text" name="firstlanguage"  placeholder="Idioma*" value={this.props.inputLanguage1a} onChange={this.props.updateInputLanguage1a}
               />
                <input className="user-level default-input-txtarea" type="text" name="leveltitle"  placeholder="Nivel/Título*"  value={this.props.inputLanguage2a} onChange={this.props.updateInputLanguage2a} />
                <p className="indicative-text-typo">*Campos obligatorios</p>
                <div className="language-buttons margin-xs">
                    <img id="add-language" className="add-button" src="images/add.svg" alt="add button" />
                    <img className="up-button" src="images/up.svg" alt="up button" />
                    <img className="down-button" src="images/down.svg" alt="down button" />
                    <img id="quit-language" className="remove-button" src="images/remove.svg" alt="remove button" />
                </div>

                <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id={`${this.props.idButtonCollapse}`}  type="button" name="button" onClick={this.props.sendLocalLanguages}>guardar</button>

          </Collapse>

    );
  }
}

export default Languages;
