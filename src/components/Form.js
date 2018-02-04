import React, { Component } from 'react';
import PersonalData from './PersonalData';
import Skills from './Skills';
import Languages from './Languages'
import Experience from './Experience';
import Education from './Education';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue : ''
    }
    this.changeInputText = this.changeInputText.bind(this);
  }

  changeInputText(event){
    this.setState({
      inputValue: event.target.value
    })

  }
  render() {

    return (
      <div className="form-box margin-top-xs">
        <form className="form" onSubmit={this.props.handleClick}>
          <PersonalData changeInputText={this.changeInputText}  />
          <Skills changeInputText={this.changeInputText}  />
          <Languages changeInputText={this.changeInputText}  />
          <Experience changeInputText={this.changeInputText} />
          <Education changeInputText={this.changeInputText}  />
          <div>
            <label htmlFor="photo" className="insert-photo-input colored1-button-typo rounded-primaryColor-width100-button">Insertar fotografía
            </label>
            <input className="hidden" type="file" name="photo" value="" id="photo" onChange= {this.props.actionInsertPhoto}/>
          </div>
          <input type="submit" className="rounded-primaryColor-width100-button colored1-button-typo text-center margin-top-xxxs margin-bottom-lg padding-xxxxxs" id="save" value="enviar datos al cv"/ >
        </form>
      </div>
    );
  }
}




export default Form;
