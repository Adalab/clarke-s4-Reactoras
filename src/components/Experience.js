import React, { Component } from 'react';
import Collapse  from './Collapse';


class Experience extends Component {
  static defaultProps = {
    monthexp: ['Mes','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    yearexp: ['Año','1950','1951','1952','1953','1954','1955','1956','1957','1958','1959','1960','1961','1962','1963','1967','1968','1969','1970','1971','1972','1973','1974','1975']
  }

  render() {

    let monthOptions = this.props.monthexp.map((monthexp) => {
          return <option key={monthexp} value={monthexp} >{monthexp}</option>
    });
    let yearOptions = this.props.yearexp.map((yearexp) => {
          return <option key={yearexp} value={yearexp} >{yearexp}</option>
    });
    return (
            <Collapse legend= "Experiencia Profesional">
              <div>
                  <input   id="job" className="default-input-txtarea" type="text" name="job" placeholder="Puesto*" value={this.props.inputExperience1a} onChange={this.props.updateInputExperience1a}/>
                  <input   id="company" className="default-input-txtarea" type="text" name="company"  placeholder="Empresa*"  placeholder="Idioma*" value={this.props.inputExperience2a} onChange={this.props.updateInputExperience2a}/>
                  <textarea  id="comments" className="default-input-txtarea" name="comments" rows={8} cols={20} maxLength={300} placeholder="Funciones*(Escribe una pequeña descripción de tu puesto. Máx:300 caracteres.)" defaultValue={""} value={this.props.inputExperience3a} onChange={this.props.updateInputExperience3a}/>

                  <div className="calendar">
                    <div className="calendar-start-exp">
                      <p className="start-exp">Desde*</p>
                      <select id="start_month_exp" className="month color-tertiary color-dark padding-left-lg" name="monthexpstart" ref="monthexp">{monthOptions}</select>
                      <select id="start_year_exp" className="year color-tertiary color-dark padding-left-xs" name="yearexpstart" ref="yearexp">{yearOptions}</select>
                    </div>
                    <div className="calendar-end-exp">
                      <p className="end-exp">Hasta*</p>
                      <select id="end_month_exp" className="month color-tertiary color-dark padding-left-lg" name="monthexpend" ref="monthexp">{monthOptions}</select>
                      <select id="end_year_exp" className="year color-tertiary color-dark padding-left-xs" name="yearexpend" ref="yearexp">{yearOptions}</select>
                    </div>

                  </div>
              </div>
                <p className="indicative-text-typo ">*Campos obligatorios</p>
                  <div className="experience-buttons margin-xs">
                    <img id="add_button_exp" className="add-button" src="images/add.svg" alt="add button" />
                    <img className="up-button" src="images/up.svg" alt="up button" />
                    <img className="down-button" src="images/down.svg" alt="down button" />
                    <img className="remove-button" src="images/remove.svg" alt="remove button" />
                  </div>

                  <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id={`${this.props.idButtonCollapse}`}  type="button" name="button" onClick={this.props.sendLocalExperiencie}>guardar</button>

              </Collapse>

    );
  }
}

export default Experience;
