import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonalData from './PersonalData';
import Skills from './Skills';
import Languages from './Languages'
import Experience from './Experience';
import Education from './Education';




class Form extends Component {
  render() {
    return (
    <div className="form-box margin-top-xs">
      <form className="form" action="index.html" method="post">
        <PersonalData />
        <Skills />
      </form>
     </div>
    );
  }
}




export default Form;
