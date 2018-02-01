import React, { Component } from 'react';
import Header from './components/Header';
import WelcomeBox from './components/WelcomeBox';
import NavSection from './components/NavSection';
import SectionCV from "./components/SectionCV";
import CloseButton from "./components/CloseButton";
import NavSection from "./components/NavSection";
import Footer from './components/Footer';
import Form from './components/Form';
import PrintSection from './components/PrintSection';
import ChangeOrderButtons from './components/ChangeOrderButtons';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nombre Apellido",
      profession: "Profesión",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      phone: "+34 666 66 66 66",
      mail: "adalab@adalab.com",
      linkedin: "linkedin.com/adalab",
      skill: "habilidad1",
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
  }

  render() {
    return (
      <div>

      <Header/>

      <WelcomeBox/>
      
      <NavSection/>
      
      <main>

       <Form />

       <SectionCV/>  

       <PrintSection />
      
       </main>
      
        <Footer/>

       </div>
    );
  }
}

export default App;
