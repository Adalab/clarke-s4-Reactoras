import React from 'react';
import ElementListCV from "./ElementListCV";

class SectionCV extends React.Component {
  render() {

    return (
      <div>
        <ElementListCV
        titleSectionCV="Habilidades"
        classListCV = "list-skills"
        titleListCV = "Habilidad1"
     >
          <li>
            <h4>{this.props.firstskillForm}</h4>
          </li>
        </ElementListCV>

        <ElementListCV
          titleSectionCV="Idiomas"
          classListCV = "list-language"
          titleListCV = "Lenguaje1"
        >
          <li>
            <h4>{ this.props.languageTittleForm}</h4>
            <p>{ this.props.languageContentForm}</p>
          </li>
        </ElementListCV>

        <ElementListCV
        titleSectionCV="Experiencia profesional"
        classListCV = "list-experience"
        titleListCV =  "Encargado de planta - Carrefour junio 2015 - septiembre 2016"
        >
          <li>
            <p>
              <span id="job_out"  className="bold">{ this.props.experienceTittleForm }</span>
              <span id="company_out"  className="bold">{ this.props.experienceCompanyForm }</span>
              <span id="start_exp_out">{ this.props.experienceFromMonthForm } {}
              { this.props.experienceFromYearForm} -</span>
              <span id="end_exp_out">{ this.props.experienceToMonthForm } {}
              { this.props.experienceToYearForm}</span>
            </p>
            <p id="comments_out">{ this.props.experienceContentForm }
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
              <span id="degree_out"  className="bold">{ this.props.educationTittleForm } - </span>
              <span id="university_out"  className="bold">{this.props.educationCenterForm }</span>
            </p>
            <p>
              <span id="start_educ_out">{ this.props.educationFromMonthForm } {} { this.props.educationFromYearForm } -</span>
              <span id="end_educ_out">{ this.props.educationToMonthForm } {}
              { this.props.educationToYearForm }</span>
            </p>
          </li>
        </ElementListCV>
      </div>
    );
  }
}


export default SectionCV;
