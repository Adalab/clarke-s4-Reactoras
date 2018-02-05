import React, { Component } from 'react';
import Collapse  from './Collapse';


class Education extends Component {

  static defaultProps = {
    monthexp: ['Mes','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  }

  getRange = (arrayLength) => {
    return Array.from({length: arrayLength}, (x,i) => i + (new Date().getFullYear()) - (arrayLength-1));
  }

  render() {
    let monthOptions = this.props.monthexp.map((monthexp,i) => {
          const hiddenMonth = (i === 0);
          return <option key={monthexp} hidden={hiddenMonth} value={monthexp} >{monthexp}</option>
    });
    let yearOptions = ['Año'].concat(this.getRange(100)).map((yearexp, i) => {
          const hiddenYear = (i === 0);
          return <option key={yearexp} hidden={hiddenYear} value={yearexp} >{yearexp}</option>
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
          <img id="add_button_educ" className="add-button" src="images/add.svg" alt="add button" />
          <img className="up-button" src="images/up.svg" alt="up button" />
          <img className="down-button" src="images/down.svg" alt="down button" />
          <img className="remove-button" src="images/remove.svg" alt="remove button" />
        </div>

        <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id={`${this.props.idButtonCollapse}`}  type="submit" name="button" onSubmit={this.props.sendLocalEducation}>guardar</button>
      </Collapse>

    );
  }
}

export default Education;
