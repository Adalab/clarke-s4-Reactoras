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
      <form className="form" action="index.html" method="post">
        <PersonalData />
        <Skills />
        <Languages />
        <Experience />
        <Education />
        <SendDataButton onClick={ this.props.sendData }/>
      </form>
     </div>
    );
  }
}




export default Form;
