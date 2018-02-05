import React, { Component } from 'react';
import Collapse  from './Collapse';


class Languages extends Component {
  constructor(props){
    super(props);
    this.state = {
      languages: [{
        languageTittle: '',
        languageContent: ''
      }]
    };
  }

  addOption = () => {
    this.setState(prevState => {
      return Object.assign({}, prevState, {languages: [...prevState.languages, {}] })  ;
    })
  }

  deleteOption = () => {
    this.setState(prevState => {
      return Object.assign({}, prevState, {languages: [...prevState.languages].slice(0, -1) })  ;
    })
  }

  updateOption = (event) => {
    const updateValue = event.target.value;
    const index = event.target.dataset.index;

    this.setState(prevState => {
      const languagesCopy = [...prevState.languages];
      languagesCopy[index] = updateValue;

      return Object.assign({}, prevState, {languages: languagesCopy })  ;
    })
  }
  render() {
    return (

      <Collapse legend = "Idiomas">

      {this.state.languages.map((language, index)=> {
        return <div>
                  <input  key={index} onChange={this.updateOption} data-index={index} className="user-language default-input-txtarea" type="text" name="firstlanguage" defaultValue={language.languageTittle}   placeholder="Idioma*"  />
                  <input  key={index} onChange={this.updateOption} data-index={index} className="user-level default-input-txtarea" type="text" name="leveltitle" defaultValue={language.languageContent}  placeholder="Nivel/Título*"  />
                </div>;
      })}

      <p className="indicative-text-typo">*Campos obligatorios</p>
      <div className="language-buttons margin-xs">

      <img onClick={this.addOption}  className="add-button" src="images/add.svg" alt="add button" />
      <img className="up-button" src="images/up.svg" alt="up button" />
      <img className="down-button" src="images/down.svg" alt="down button" />
      <img onClick={this.deleteOption} className="remove-button" src="images/remove.svg" alt="remove button" />
      </div>

      </Collapse>

    );
  }
}

export default Languages;
