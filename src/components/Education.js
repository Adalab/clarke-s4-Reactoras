import React, { Component } from 'react';
import Collapse  from './Collapse';


class Education extends Component {
  render() {
    return (
      <Collapse legend= "Educación">
        <div className = "educ-container">
          <input id="degree" onChange ={this.props.elenita} className="default-input-txtarea" type="text" name="degree"  placeholder="Título*"  />
          <input id="university" onChange ={this.props.elenita} className="default-input-txtarea" type="text" name="university"  placeholder="Centro de Estudios*"  />

          <div className="calendar">
            <div className="calendar-start-educ">
                <p className="start-educ">Desde*</p>
                <select id="start_month_educ" className="month color-tertiary color-dark padding-left-lg" name="montheduc" />
                <select id="start_year_educ" className="year color-tertiary color-dark padding-left-xs" name="yeareduc" />
            </div>
            <div className="calendar-end-educ">
              <p className="end-educ">Hasta*</p>
              <select id="end_month_educ" className="month color-tertiary color-dark padding-left-lg" name="montheduc" />
              <select id="end_year_educ" className="year color-tertiary color-dark padding-left-xs" name="yeareduc" />
            </div>

          </div>
        </div>

        <p className="indicative-text-typo ">*Campos obligatorios</p>

        <div className="education-buttons margin-xs">
          <img id="add_button_educ" className="add-button" src="images/add.svg" alt="add button" />
          <img className="up-button" src="images/up.svg" alt="up button" />
          <img className="down-button" src="images/down.svg" alt="down button" />
          <img className="remove-button" src="images/remove.svg" alt="remove button" />
        </div>
      </Collapse>

    );
  }
}

export default Education;
