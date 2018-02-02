import React, { Component } from 'react';
import Collapse  from './Collapse';


class Languages extends Component {

  render() {
    return (

          <Collapse legend = "Idiomas">
                <input id="anita" className="user-language default-input-txtarea" type="text" name="firstlanguage" value={this.props.value}  placeholder="Idioma*"  />
                <input className="user-level default-input-txtarea" type="text" name="leveltitle" value={this.props.value} placeholder="Nivel/Título*"  />
                <p className="indicative-text-typo">*Campos obligatorios</p>
                <div className="language-buttons margin-xs">
                    <img id="add-language" className="add-button" src="images/add.svg" alt="add button" />
                    <img className="up-button" src="images/up.svg" alt="up button" />
                    <img className="down-button" src="images/down.svg" alt="down button" />
                    <img id="quit-language" className="remove-button" src="images/remove.svg" alt="remove button" />
                </div>

          </Collapse>

    );
  }
}

export default Languages;
