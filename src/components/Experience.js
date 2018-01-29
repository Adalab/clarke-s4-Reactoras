import React, { Component } from 'react';
import Collapse  from './Collapse';


class Experience extends Component {

  render() {
    return (
            <Collapse legend= "Experiencia Profesional">
<div>
                  <input id="job" className="default-input-txtarea" type="text" name="job" placeholder="Puesto*" />
                  <input id="company" className="default-input-txtarea" type="text" name="company"  placeholder="Empresa*" />
                  <textarea id="comments" className="default-input-txtarea" name="comments" rows={8} cols={20} maxLength={300} placeholder="Funciones*(Escribe una pequeña descripción de tu puesto. Máx:300 caracteres.)" defaultValue={""} />

                  <div className="calendar">
                    <div className="calendar-start-exp">
                      <p className="start-exp">Desde*</p>
                      <select id="start_month_exp" className="month padding-left-lg" name="month-exp" />
                      <select id="start_year_exp" className="year padding-left-xs" name="year-exp" />
                    </div>
                    <div className="calendar-end-exp">
                      <p className="end-exp">Hasta*</p>
                      <select id="end_month_exp" className="month padding-left-lg" name="month-exp" />
                      <select id="end_year_exp" className="year padding-left-xs" name="year-exp" />
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

              </Collapse>

    );
  }
}

export default Experience;
