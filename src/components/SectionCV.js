import React from 'react';
import ElementListCV from "./ElementListCV";



class SectionCV extends React.Component {
  render() {
    return (
      <div>
        <ElementListCV
        titleSectionCV={this.props.titleSectionCV}
        classListCV = "list-skills"
        titleListCV = "Habilidad1"
        >
          <li>
            <h4>Habilidad1</h4>
          </li>
        </ElementListCV>

        <ElementListCV
          titleSectionCV="Idiomas"
          classListCV = "list-language"
          titleListCV = "Lenguaje1"
        >
          <li>
            <h4>Lenguaje1</h4>
            <p>Nivel/título</p>
          </li>
        </ElementListCV>

        <ElementListCV
        titleSectionCV="Experiencia profesional"
        classListCV = "list-experience"
        titleListCV =  "Encargado de planta - Carrefour junio 2015 - septiembre 2016"
        >
          <li>
            <p>
              <span id="job_out"  className="bold">Encargado de planta - </span>
              <span id="company_out"  className="bold">Carrefour </span>
              <span id="start_exp_out">junio 2015</span>
              <span id="end_exp_out">- septiembre 2016</span>
            </p>
            <p id="comments_out">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </li>
        </ElementListCV>

        <ElementListCV
          titleSectionCV="Educación"
          classListCV = "list-education"
          titleListCV =  "Licenciatura en Periodismo - Universidad Rey Juan Carlos I"
        >
          <li>
            <p>
              <span id="degree_out"  className="bold">Licenciatura en Periodismo - </span>
              <span id="university_out"  className="bold">Universidad Rey Juan Carlos I</span>
            </p>
            <p>
              <span id="start_educ_out">septiembre 2007</span>
              <span id="end_educ_out">-junio 2013</span>
            </p>
          </li>
        </ElementListCV>
      </div>
    );
  }
}

export default SectionCV;
