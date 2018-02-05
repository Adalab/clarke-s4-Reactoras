import React, { Component } from 'react';
import Collapse  from './Collapse';
import ButtonMore  from './ButtonMore';


class Education extends Component {

  static defaultProps = {
    montheduc: ['Mes','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    yearexp: ['Año','1950','1951','1952','1953','1954','1955','1956','1957','1958','1959','1960','1961','1962','1963','1967','1968','1969','1970','1971','1972','1973','1974','1975']
  }

  render() {
    let monthOptions = this.props.montheduc.map((montheduc) => {
          return <option key={montheduc} value={montheduc} >{montheduc}</option>
    });
    let yearOptions = this.props.yearexp.map((yearexp) => {
          return <option key={yearexp} value={yearexp} >{yearexp}</option>
    });

    return (
      <Collapse legend= "Educación">
        <div className = "educ-container">
          <input id="degree" onChange ={this.props.elenita} className="default-input-txtarea" type="text" name="degree"  placeholder="Título*"  />
          <input id="university" onChange ={this.props.elenita} className="default-input-txtarea" type="text" name="university"  placeholder="Centro de Estudios*"  />

          <div className="calendar">
            <div className="calendar-start-educ">
                <p className="start-educ">Desde*</p>
                <select id="start_month_educ" className="month color-tertiary color-dark padding-left-lg" name="montheducstart" ref="montheduc">{monthOptions}</select>
                <select id="start_year_educ" className="year color-tertiary color-dark padding-left-xs" name="yeareducstart" ref="yeareduc">{yearOptions}</select>
            </div>
            <div className="calendar-end-educ">
              <p className="end-educ">Hasta*</p>
              <select id="end_month_educ" className="month color-tertiary color-dark padding-left-lg" name="montheducend" ref="montheduc">{monthOptions}</select>
              <select id="end_year_educ" className="year color-tertiary color-dark padding-left-xs" name="yeareducend" ref="yeareduc">{yearOptions}</select>
            </div>

          </div>
        </div>

        <p className="indicative-text-typo ">*Campos obligatorios</p>

        <div className="education-buttons margin-xs">
          <ButtonMore />
          <img className="up-button" src="images/up.svg" alt="up button" />
          <img className="down-button" src="images/down.svg" alt="down button" />
          <img className="remove-button" src="images/remove.svg" alt="remove button" />
        </div>
      </Collapse>

    );
  }
}

export default Education;
