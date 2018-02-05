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
          <input id="degree"  className="default-input-txtarea" type="text" name="degree"  placeholder="Título*" value={this.props.inputEducation1a} onChange={this.props.updateInputEducation1a} />
          <input id="university"  className="default-input-txtarea" type="text" name="university"  placeholder="Centro de Estudios*" value={this.props.inputEducation2a} onChange={this.props.updateInputEducation2a}  />

          <div className="calendar">
            <div className="calendar-start-educ">
                <p className="start-educ">Desde*</p>
                <select id="start_month_educ" className="month color-tertiary color-dark padding-left-lg" name="montheducstart" ref="montheduc" value={this.props.inputEducation3a} onChange={this.props.updateInputEducation3a}>{monthOptions}</select>
                <select id="start_year_educ" className="year color-tertiary color-dark padding-left-xs" name="yeareducstart" ref="yeareduc" value={this.props.inputEducation4a} onChange={this.props.updateInputEducation4a}>{yearOptions}</select>
            </div>
            <div className="calendar-end-educ">
              <p className="end-educ">Hasta*</p>
              <select id="end_month_educ" className="month color-tertiary color-dark padding-left-lg" name="montheducend" ref="montheduc" value={this.props.inputEducation5a} onChange={this.props.updateInputEducation5a}>{monthOptions}</select>
              <select id="end_year_educ" className="year color-tertiary color-dark padding-left-xs" name="yeareducend" ref="yeareduc" value={this.props.inputEducation6a} onChange={this.props.updateInputEducation6a}>{yearOptions}</select>
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

        <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id={`${this.props.idButtonCollapse}`}  type="button" name="button" onClick={this.props.sendLocalEducation}>guardar</button>
      </Collapse>

    );
  }
}

export default Education;
