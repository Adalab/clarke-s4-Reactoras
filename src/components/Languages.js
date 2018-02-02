import React, { Component } from 'react';
import Collapse  from './Collapse';


class Languages extends Component {
// constructor(props){
// super(props);
// this.state = {
// inputValue:'';
// }
// this.changeInputText = this.changeInputText.bind(this);
// }
//
// changeInputText(event){
// this.setState()
// }
  render() {
    return (

          <Collapse legend = "Idiomas">
                <input onChange ={this.props.elenita} id="anita" className="user-language default-input-txtarea" type="text" name="firstlanguage" value={this.props.value}  placeholder="Idioma*"  />
                <input onChange ={this.props.elenita} className="user-level default-input-txtarea" type="text" name="leveltitle" value={this.props.value} placeholder="Nivel/Título*"  />
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
