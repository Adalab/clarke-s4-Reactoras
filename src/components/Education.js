import React, { Component } from 'react';
import Collapse  from './components/Collapse';


class Education extends Component {
  render() {
    return (
      <div>
                <Collapse className="default-fieldset">
                <legend>Educación</legend>
                <button data-id={4} className="edit-button squared-primaryColor-width100-button colored1-button-typo margin-xxxxs padding-xxxxs" type="button" name="button">Editar</button>
                <div className="education-input content hidden">
                  <input id="degree" className="default-input-txtarea" type="text" name="degree"  placeholder="Título*" required />
                  <input id="university" className="default-input-txtarea" type="text" name="university"  placeholder="Centro de Estudios*" required />
                  <p className="indicative-text-typo ">*Campos obligatorios</p>
                  <div className="calendar">
                    <div className="calendar-start-educ">
                      <p className="start-educ">Desde*</p>
                      <select id="start_month_educ" className="month padding-left-lg" name="month" />
                      <select id="start_year_educ" className="year padding-left-xs" name="year" />
                    </div>
                    <div className="calendar-end-educ">
                      <p className="end-educ">Hasta*</p>
                      <select id="end_month_educ" className="month padding-left-lg" name="month" />
                      <select id="end_year_educ" className="year padding-left-xs" name="year" />
                    </div>
                  </div>
                  <div className="education-buttons margin-xs">
                    <img id="add_button_educ" className="add-button" src="images/add.svg" alt="add button" />
                    <img className="up-button" src="images/up.svg" alt="up button" />
                    <img className="down-button" src="images/down.svg" alt="down button" />
                    <img className="remove-button" src="images/remove.svg" alt="remove button" />
                  </div>
                  <button data-id={4} className="edit-button squared-primaryColor-width45-button left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>
                  <button id="send_educ_button" className="rounded-lightColor-width45-button right colored2-button-typo margin-md padding-xxxxs" type="button" name="button">guardar</button>
                </div>
              </Collapse>

      </div>
    );
  }
}

export default Education;
