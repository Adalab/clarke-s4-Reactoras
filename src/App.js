import React, { Component } from 'react';
import Form from './components/Form';


class App extends Component {
  render() {
    return (
      <div>
        {/*v. nuevas clases de typo in todos los butones (palabras llave: typo y button), VERSION RAMA TYPO (Sara)*/}
        <header className="header-container text-center padding-xs color-primary color-light uppercase-style">
          <p className="header-typo">cv by ker</p>
        </header>
        <div className="welcome-box text-center padding-md color-light">
          <h2 className="hero-title-typo margin-xxs uppercase-style">tu cv siempre actualizado</h2>
          <p className="hero-larger-text-typo padding-xxs">Gracias a <span className="uppercase-style">ker</span> puedes realizar tu currículum de forma más sencilla. Introduce tus datos en el siguiente formulario y observa cómo se actualiza en tiempo real. Cuando hayas terminado podrás imprimirlo o guardarlo en formato PDF. Recuerda que siempre podrás volver y actualizarlo cada vez que lo necesitas.
          </p>
          <p className="hero-smaller-text-typo"><span className="uppercase-style"> ker</span> te cuida</p>
        </div>
        <nav>

          <button className="tab-button active-state-button tab-button-typo padding-xs uppercase-style" type="button" name="button-form">formulario</button>

          <button className="tab-button tab-button-typo padding-xs" type="button" name="button-cv">cv</button>
        </nav> {/*añadido tab-button-typo  y   como clase de butones in RAMA TYPO (Sara)*/}
        <main>
          <Form />
{/*onload="window.print();window.close()"*/}
          <div id="cv_part" className="cv-box" >
            <div className="cv-header">
              <div className="profile">
                <div className="cv-header-text"> {/*dar a esta clase un nombre que indique que contiene un padding de 15px, ha sido quitato il color: white*/}
                  <h2 id="name_surname_out" className="title-lg cv-large-text color1 bold-style">Nombre Apellido</h2> {/*añadidas las clases */}
                  <h2> <span id="prof_out" className="title-lg cv-large-text color1 no-bold-effects">Profesión</span></h2> {/*añadidas las clases y quitaada la clase profesion*/}
                  <p className="cv-description text-justify cv-small-text color1" id="description_out">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p> {/*añadidas las clases cv-small-text color1*/}
                </div>
              </div>
              <div className="contact">
                <ul className="list-contact cv-small-text"> {/*añadida la clase cv-small-text*/}
                  <li>
                    <img src="images/phone-icon.svg" alt="telefono" />
                    <span id="phon_out">+34 666 66 66 66</span>
                  </li>
                  <li>
                    <img src="images/mail-icon.svg" alt="mail" />
                    <span id="mail_out">adalab@adalab.com</span>
                  </li>
                  <li>
                    <img src="images/linkedin-icon.svg" alt="linkedin" />
                    <span id="linked_out">linkedin.com/adalab</span>
                  </li>
                </ul>
              </div>
            </div>
            <section className="skills section-cv">
              <h3>Habilidades</h3>
              <hr className="red-line" />
              <div className="box-cv">
                <ul className="list-skills">
                  <li>
                    <h4>Habilidad1</h4>
                  </li>
                </ul>
              </div>
            </section>
            <section className="language section-cv">
              <h3>Idiomas</h3>
              <hr className="red-line" />
              <div className="box-cv">
                <ul className="list-language">
                  <li>
                    <h4>Lenguaje1</h4>
                    <p>Nivel/título</p>
                  </li>
                </ul>
              </div>
            </section>
            <section className="experience section-cv">
              <h3>Experiencia Profesional</h3>
              <hr className="red-line" />
              <div className="box-cv">
                <ul className="list-experience">
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
                </ul>
              </div>
            </section>
            <section className="education section-cv">
              <h3>Educación</h3>
              <hr className="red-line" />
              <div className="box-cv">
                <ul className="list-education">
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
                </ul>
              </div>
            </section>
            <input className="rounded-primaryColor-width100-button print-button text-center colored1-button-typo" id="print" type="submit" defaultValue="imprimir cv" />
          </div>
        </main>
        <footer className="footer-container footer-typo bold-style text-center padding-xxxxxs color-secondary">{/*añadida la clase footer-typo*/}
          <p>©<span className="uppercase-style">ker</span></p>
        </footer>
      </div>
    );
  }
}

export default App;
