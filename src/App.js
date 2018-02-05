import React, { Component } from 'react';
import Header from './components/Header';
import WelcomeBox from './components/WelcomeBox';
import NavSection from './components/NavSection';
import Form from './components/Form';
import SectionCVHeader from "./components/SectionCVHeader";
import SectionCV from "./components/SectionCV";
import PrintSection from './components/PrintSection';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputPersonal1: '',
      inputPersonal2: '',
      inputPersonal3: '',
      inputPersonal4: '',
      inputPersonal5: '',
      inputPersonal6: '',
      inputSkills: '',
      inputLanguage1: '',
      inputLanguage2: '',
      inputExperience1: '',
      inputExperience2: '',
      inputExperience3: '',
      inputEducation1: '',
      inputEducation2: '',
      name: "Nombre Apellido",
      profession: "Profesión",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      phone: "+34 666 66 66 66",
      mail: "adalab@adalab.com",
      linkedin: "linkedin.com/adalab",
      skill: "Habilidades",
      firstskill: 'Habilidad1',
      languageTittle: "Lenguaje1",
      languageContent: "Nivel/título",
      experienceTittle: "Encargado de planta",
      experienceCompany: "Carrefour",
      experienceFromMonth: " junio",
      experienceFromYear: "2016",
      experienceToMonth: " julio",
      experienceToYear: "2017",
      experienceContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      educationTittle: "Licenciatura en Periodismo",
      educationCenter: "Universidad Rey Juan Carlos I",
      educationFromMonth: " junio",
      educationFromYear: "2016",
      educationToMonth: " julio",
      educationToYear: "2017"
    }
    this.handleSendData = this.handleSendData.bind(this);
    this.onHandleSendLocalPersonalData = this.onHandleSendLocalPersonalData.bind(this);
    this.onHandleSendSkills = this.onHandleSendSkills.bind(this);
    this.onHandleSendLanguages = this.onHandleSendLanguages.bind(this);
    this.onHandleSendExperiencie = this.onHandleSendExperiencie.bind(this);
    this.onHandleSendEducation = this.onHandleSendEducation.bind(this);
    this.updateInputPersonal1 = this.updateInputPersonal1.bind(this);
    this.updateInputPersonal2 = this.updateInputPersonal2.bind(this);
    this.updateInputPersonal3 = this.updateInputPersonal3.bind(this);
    this.updateInputPersonal4 = this.updateInputPersonal4.bind(this);
    this.updateInputPersonal5 = this.updateInputPersonal5.bind(this);
    this.updateInputPersonal6 = this.updateInputPersonal6.bind(this);

    this.updateInputSkills = this.updateInputSkills.bind(this);

    this.updateInputLanguage1 = this.updateInputLanguage1.bind(this);
    this.updateInputLanguage2 = this.updateInputLanguage2.bind(this);

    this.updateInputExperience1 = this.updateInputExperience1.bind(this);
    this.updateInputExperience2 = this.updateInputExperience2.bind(this);
    this.updateInputExperience3 = this.updateInputExperience3.bind(this);

    this.updateInputEducation1 = this.updateInputEducation1.bind(this);
    this.updateInputEducation2 = this.updateInputEducation2.bind(this);
  }

  updateInputPersonal1(event){
    this.setState({
      inputPersonal1: event.target.value
     });
  }

  updateInputPersonal2(event){
    this.setState({
      inputPersonal2: event.target.value
    });
  }

  updateInputPersonal3(event){
    this.setState({
      inputPersonal3: event.target.value
    });
  }

  updateInputPersonal4(event){
    this.setState({
      inputPersonal4: event.target.value
    });
  }

  updateInputPersonal5(event){
    this.setState({
      inputPersonal5: event.target.value
    });
  }

  updateInputPersonal6(event){
    this.setState({
      inputPersonal6: event.target.value
    });
  }

  onHandleSendLocalPersonalData(event){
    this.setState({
      name: this.state.inputPersonal1,
      profession: this.state.inputPersonal2,
      phone: this.state.inputPersonal3,
      mail: this.state.inputPersonal4,
      linkedin: this.state.inputPersonal5,
      description: this.state.inputPersonal6
    });
    event.preventDefault();
  }

  updateInputSkills(event){
    this.setState({
      inputSkills: event.target.value
    });
  }

  onHandleSendSkills(event){
    this.setState({
      firstskill: this.state.inputSkills
    });
    event.preventDefault();
  }


  updateInputLanguage1(event){
    this.setState({
      inputLanguage1: event.target.value
    });
  }

  updateInputLanguage2(event){
    this.setState({
      inputLanguage2: event.target.value
    });
  }


  onHandleSendLanguages(event){
    this.setState({
      languageTittle: this.state.inputLanguage1,
      languageContent: this.state.inputLanguage2
    });
    event.preventDefault();
  }


updateInputExperience1(event){
  this.setState({
    inputExperience1: event.target.value
  });
}

updateInputExperience2(event){
  this.setState({
    inputExperience2: event.target.value
  });
}

updateInputExperience3(event){
  this.setState({
    inputExperience3: event.target.value
  });
}


  onHandleSendExperiencie(event){
    this.setState({
      experienceTittle: this.state.inputExperience1,
      experienceCompany: this.state.inputExperience2,
      experienceContent: this.state.inputExperience3
    });
    event.preventDefault();
  }


  updateInputEducation1(event){
    this.setState({
      inputEducation1: event.target.value
    });
  }

  updateInputEducation2(event){
    this.setState({
      inputEducation2: event.target.value
    });
  }


  onHandleSendEducation(event){
    this.setState({
      educationTittle: this.state.inputEducation1,
      educationCenter: this.state.inputEducation2,
      educationFromMonth: '',
      educationFromYear: '',
      educationToMonth: '',
      educationToYear: ''
    });
    event.preventDefault();
  }

  handleSendData(event) {
    const currentTarget = event.target;
    const formData = new FormData(currentTarget);
    const entries = {};
    for (let entry of formData.entries()) {
      const nombreDelInput = entry[0];
      const value = entry[1];
      entries[nombreDelInput] = value;
    }
    this.setState({
      name: entries.fullname,
      profession: entries.profession,
      description: entries.comments,
      phone: entries.phone,
      mail: entries.email,
      linkedin: entries.Linkedin,
      skill: entries.skill,
      firstskill: entries.firstskill,
      languageTittle: entries.firstlanguage,
      languageContent: entries.leveltitle,
      experienceTittle: entries.job,
      experienceCompany: entries.company,
      experienceFromMonth: entries.monthexpstart,
      experienceFromYear: entries.yearexpstart,
      experienceToMonth: entries.monthexpend,
      experienceToYear: entries.yearexpend,
      experienceContent: entries.comments,
      educationTittle: entries.degree,
      educationCenter:entries.university,
      educationFromMonth: entries.montheducstart,
      educationFromYear: entries.yeareducstart,
      educationToMonth: entries.montheducend,
      educationToYear: entries.yeareducend
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>

      <Header/>

      <WelcomeBox/>

      <NavSection/>

      <main>

      <Form
        handleClick={ this.handleSendData }
        sendPersonalData={this.onHandleSendLocalPersonalData}
        sendSkills={this.onHandleSendSkills}
        sendLanguages={this.onHandleSendLanguages}
        sendExperiencie={this.onHandleSendExperiencie}
        sendEducation={this.onHandleSendEducation}
        inputPersonal1b = {this.state.inputPersonal1}
        updateInputPersonal1b = {this.updateInputPersonal1}
        inputPersonal2b = {this.state.inputPersonal2}
        updateInputPersonal2b = {this.updateInputPersonal2}
        inputPersonal3b = {this.state.inputPersonal3}
        updateInputPersonal3b = {this.updateInputPersonal3}
        inputPersonal4b = {this.state.inputPersonal4}
        updateInputPersonal4b = {this.updateInputPersonal4}
        inputPersonal5b = {this.state.inputPersonal5}
        updateInputPersonal5b = {this.updateInputPersonal5}
        inputPersonal6b = {this.state.inputPersonal6}
        updateInputPersonal6b = {this.updateInputPersonal6}

        inputSkillsb = {this.state.inputSkills}
        updateInputSkillsb={this.updateInputSkills}

        inputLanguage1b = {this.state.inputLanguage1}
        updateInputLanguage1b={this.updateInputLanguage1}

        inputLanguage2b = {this.state.inputLanguage2}
        updateInputLanguage2b={this.updateInputLanguage2}

        inputExperience1b = {this.state.inputExperience1}
        updateInputExperience1b = {this.updateInputExperience1}


        inputExperience2b = {this.state.inputExperience2}
        updateInputExperience2b = {this.updateInputExperience2}

        inputExperience3b = {this.state.inputExperience3}
        updateInputExperience3b = {this.updateInputExperience3}

        inputEducation1b = {this.state.inputEducation1}
        updateInputEducation1b = {this.updateInputEducation1}

        inputEducation2b = {this.state.inputEducation2}
        updateInputEducation2b = {this.updateInputEducation2}
      />

      <div className="cv-box hidden-cv">
        <div id="cv_part">
          <SectionCVHeader nameForm ={ this.state.name}
          professionForm ={ this.state.profession}
          descriptionForm ={ this.state.description}
          phoneForm ={ this.state.phone}
          mailForm ={ this.state.mail}
          linkedinForm ={ this.state.linkedin}
      />

      <SectionCV
        skillForm ={ this.state.skill}
        firstskillForm ={this.state.firstskill}
        languageTittleForm ={ this.state.languageTittle}
        languageContentForm ={ this.state.languageContent}
        experienceTittleForm ={ this.state.experienceTittle}
        experienceCompanyForm ={ this.state.xperienceCompany}
        experienceFromMonthForm ={ this.state.experienceFromMonth}
        experienceFromYearForm ={ this.state.experienceFromYear}
        experienceToMonthForm ={ this.state.experienceToMonth}
        experienceToYearForm ={ this.state.experienceToYear}
        experienceContentForm ={ this.state.experienceContent}
        educationTittleForm ={ this.state.educationTittle}
        educationCenterForm ={this.state.educationCenter}
        educationFromMonthForm ={ this.state.educationFromMonth}
        educationFromYearForm ={ this.state.educationFromYear}
        educationToMonthForm ={ this.state.educationToMonth}
        educationToYearForm ={ this.state.educationToYear} onChange= {this.handleSendData}
      />
      </div>

      <PrintSection/>
      </div>

      </main>

      <Footer/>

      </div>
    );
  }
}

export default App;
