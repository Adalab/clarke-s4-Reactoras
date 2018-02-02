import React, { Component } from 'react';
import Header from './components/Header';
import WelcomeBox from './components/WelcomeBox';
import NavSection from './components/NavSection';
import Form from './components/Form';
import CloseButton from "./components/CloseButton";
import ChangeOrderButtons from './components/ChangeOrderButtons';
import SectionCVHeader from "./components/SectionCVHeader";
import SectionCV from "./components/SectionCV";
import PrintSection from './components/PrintSection';
import Footer from './components/Footer';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      profession: "Profesión",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      phone: "+34 666 66 66 66",
      mail: "adalab@adalab.com",
      linkedin: "linkedin.com/adalab",
      skill: "patata",
      languageTittle: "Lenguaje1",
      languageContent: "Nivel/título",
      experienceTittle: "Encargado de planta",
      experienceCompany: "Carrefour",
      experienceFromMonth: "junio",
      experienceFromYear: "2016",
      experienceToMonth: "julio",
      experienceToYear: "2017",
      experienceContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      educationTittle: "Licenciatura en Periodismo",
      educationCenter: "Universidad Rey Juan Carlos I",
      educationCompany: "Carrefour",
      educationFromMonth: "junio",
      educationFromYear: "2016",
      educationToMonth: "julio",
      educationToYear: "2017"
    }
    this.handleSendData = this.handleSendData.bind(this);
    {/*// this.setField = this.setField.bind(this);*/}
  }

  handleSendData(event) {
    console.log('hola');
    const inputTitleSkill = event.target;
    console.log(inputTitleSkill);

    const formData = new FormData(inputTitleSkill);

    const entries = {};
    for (let entry of formData.entries()) {
      const nombreDelInput = entry[0];
      const value = entry[1];
      entries[nombreDelInput] = value;
    }

    console.log(entries);
{/*setField(event){
     this.setState({
 [event.target.name]:event.target.value
})
    event.preventDefault();
}*/}

this.setState({
      name: entries.fullname,
      profession: entries.profession,
      description: entries.comments,
      phone: entries.phone,
      mail: entries.email,
      linkedin: entries.Linkedin,
      skill: entries.firstskill,
      languageTittle: entries.firstlanguage,
      languageContent: entries.leveltitle,
      experienceTittle: entries.job,
      experienceCompany: entries.company,
      experienceFromMonth: entries.monthexp,
      experienceFromYear: entries.yearexp,
      experienceToMonth: entries.monthexp,
      experienceToYear: entries.yearexp,
      experienceContent: entries.comments,
      educationTittle: entries.degree,
      educationCenter:entries.university,
      educationCompany: "Carrefour",
      educationFromMonth: entries.month,
      educationFromYear: entries.year,
      educationToMonth: entries.month,
      educationToYear: entries.year
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
          handleClick={ this.handleSendData } elenita={this.setField}
       />

       <div className="cv-box hidden-cv">

       <div id="cv_part">
       <SectionCVHeader/>
       <SectionCV
        titleSectionCV =  {this.state.skill}
 sara={this.state.languageTittle} nivel={this.state.languageContent}/>
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
