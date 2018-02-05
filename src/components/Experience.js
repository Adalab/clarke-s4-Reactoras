import React, { Component } from 'react';
import Collapse  from './Collapse';


class Experience extends Component {
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
            <Collapse legend= "Experiencia Profesional">
              <div>
                  <input  onChange ={this.props.elenita}  id="job" className="default-input-txtarea" type="text" name="job" value={this.props.value} placeholder="Puesto*" />
                  <input onChange ={this.props.elenita}  id="company" className="default-input-txtarea" type="text" name="company"  placeholder="Empresa*" />
                  <textarea onChange ={this.props.elenita} id="comments" className="default-input-txtarea" name="comments" rows={8} cols={20} maxLength={300} placeholder="Funciones*(Escribe una pequeña descripción de tu puesto. Máx:300 caracteres.)" defaultValue={""} />

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

                  <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id={`${this.props.idButtonCollapse}`}  type="submit" name="button" onSubmit={this.props.sendLocalExperiencie}>guardar</button>

              </Collapse>

    );
  }
}

export default Experience;
