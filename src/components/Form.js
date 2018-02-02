import React, { Component } from 'react';
import PersonalData from './PersonalData';
import Skills from './Skills';
import Languages from './Languages'
import Experience from './Experience';
import Education from './Education';
import SendDataButton from "./SendDataButton"


class Form extends Component {
  render() {
    return (
    <div className="form-box margin-top-xs">
      <form className="form" onSubmit={this.props.handleClick}>
        <PersonalData />
        <Skills />
        <Languages  />
        <Experience />
        <Education />
        <input type="submit" className="rounded-primaryColor-width100-button colored1-button-typo text-center margin-top-xxxs margin-bottom-lg padding-xxxxxs" id="save" value="enviar datos al cv"/ >

      </form>
     </div>
    );
  }
}




export default Form;
