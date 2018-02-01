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
  }

  handleSendData(event) {
    const inputTitleSkill = document.querySelector("#IDtitleSectionCV");

    const formData = new FormData(inputTitleSkill);

    const entries = {};
    for (let entry of formData.entries()) {
      const nombreDeLaPropiedad = entry[0];
      const value = entry[1];
      entries[nombreDeLaPropiedad] = value;
    }

    console.log(entries);

    this.setState({
     skill: entries.nombreDeLaPropiedad //pero del formulario
   });
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
       />

       <div className="cv-box hidden-cv">

       <div id="cv_part">
       <SectionCVHeader/>
       <SectionCV
        titleSectionCV =  {this.state.skill}/>
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
