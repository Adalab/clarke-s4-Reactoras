import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/*v. nuevas clases de typo in todos los butones (palabras llave: typo y button), VERSION RAMA TYPO (Sara)*/}
        <header className="text-center padding-xs">
          <p className="header-typo margin-top-zero">Cv by ker</p>
        </header>
        <div className="welcome-box text-center padding-md">
          <h2 className="title-lg hero-title-typo margin-xxs">tu cv siempre actualizado</h2>
          <p className="hero-larger-text-typo margin-top-zero padding-xxs">Gracias a <span className=" ">ker</span> puedes realizar tu currículum de forma más sencilla. Introduce tus datos en el siguiente formulario y observa cómo se actualiza en tiempo real. Cuando hayas terminado podrás imprimirlo o guardarlo en formato PDF. Recuerda que siempre podrás volver y actualizarlo cada vez que lo necesitas.
          </p>
          <p className="hero-smaller-text-typo margin-top-zero"><span className=" "> ker</span> te cuida</p>
        </div>
        <nav>
          <button className="tab-button active tab-button-typo padding-xs  " type="button" name="button-form">formulario</button>
          <button className="tab-button tab-button-typo padding-xs" type="button" name="button-cv">cv</button>
        </nav> {/*añadido tab-button-typo  y   como clase de butones in RAMA TYPO (Sara)*/}
        <main>
          <div className="form-box margin-top-xs">
            <form className="form" action="index.html" method="post">
              <fieldset className="form-contact margin-bottom-xxs"> {/*desde form hasta form-cotact modificado desde Sara*/}
                <legend>Datos Personales</legend>
                <button data-id={0} className="edit-button colored1-button-typo padding-xxxxs margin-xxxxs" type="button" name="button">Editar</button>
                <div className="contact-input content hidden">
                  <input className="contact-field padding-xxs margin-xxxs" type="text" name="full name" id="name_surname"  placeholder="Nombre y Apellidos*" required />
                  <input className="contact-field padding-xxs margin-xxxs" type="text" name="profession" id="prof"  placeholder="Profesión*" required />
                  <input className="contact-field padding-xxs margin-xxxs" type="tel" name="phone" id="phon"  placeholder="Teléfono*" required />
                  <input className="contact-field padding-xxs margin-xxxs" type="email" name="email" id="mail"  placeholder="Correo electrónico*" required />
                  <input className="contact-field padding-xxs margin-xxxs" type="text" name="Linkedin" id="linked"  placeholder="linkedin.com/nombredetuperfil" />
                  <textarea className="contact-field padding-xxs margin-xxxs" name="comments" id="description" rows={8} cols={20} maxLength={300} placeholder="Perfil*(Escribe una pequeña descripción de ti. Máx:300 caracteres.)" required defaultValue={""} />
                  <p className="indicative-text-typo text-right form-obl margin-top-zero margin-bottom-zero">*Campos obligatorios</p> {/*indicative-text-typo en cambio de form-obl*/}
                  <button data-id={0} className="edit-button close left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>
                  <button className="send-input-button colored2-button-typo right margin-md padding-xxxxs" id="save1" type="button" name="button">guardar</button>
                </div>
              </fieldset>
              <fieldset className="form-skills margin-bottom-xxs">
                <legend>Habilidades</legend>
                <button data-id={1} className="edit-button colored1-button-typo padding-xxxxs margin-xxxxs" type="button" name="button">Editar</button>
                <div className="skills-input content hidden">
                  <input className="user-skills skills-text padding-xxs margin-xxxs" type="text" name="firstskill"  placeholder="Habilidad*" required />
                  <input className="user-new-skills skills-text hidden padding-xxs margin-xxxs" type="text" name="firstskill"  placeholder="Habilidad*" required />
                  <p className="indicative-text-typo text-right form-obl margin-top-zero">*Campos obligatorios</p> {/*indicative-text-typo en cambio de form-obl*/}
                  <div className="skills-buttons margin-xs">
                    <img id="add-skills" className="add-button" src="images/add.svg" alt="add button" />
                    <img className="up-button" src="images/up.svg" alt="up button" />
                    <img className="down-button" src="images/down.svg" alt="down button" />
                    <img id="quit-skills" className="remove-button" src="images/remove.svg" alt="remove button" />
                  </div>
                  <button data-id={1} className="edit-button close left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>
                  <button id="skills-button" className="send-input-button right colored2-button-typo margin-md padding-xxxxs" type="button" name="button">guardar</button>
                </div>
              </fieldset>
              <fieldset className="form-language margin-bottom-xxs">
                <legend>Idiomas</legend>
                <button data-id={2} className="edit-button colored1-button-typo padding-xxxxs margin-xxxxs" type="button" name="button">Editar</button>
                <div className="language-input content hidden">
                  <input className="user-language padding-xxs margin-xxxs" type="text" name="firstlanguage"  placeholder="Idioma*" required />
                  <input className="user-level padding-xxs margin-xxxs" type="text" name="leveltitle"  placeholder="Nivel/Título*" required />
                  <p className="indicative-text-typo text-right margin-top-zero">*Campos obligatorios</p> {/*indicative-text-typo en cambio de form-obl*/}
                  <div className="language-buttons margin-xs">
                    <img id="add-language" className="add-button" src="images/add.svg" alt="add button" />
                    <img className="up-button" src="images/up.svg" alt="up button" />
                    <img className="down-button" src="images/down.svg" alt="down button" />
                    <img id="quit-language" className="remove-button" src="images/remove.svg" alt="remove button" />
                  </div>
                  <button data-id={2} className="edit-button close left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>
                  <button id="language-button" className="send-input-button right colored2-button-typo margin-md padding-xxxxs" type="button" name="button">guardar</button>
                </div>
              </fieldset>
              <fieldset id="form_exp" className="form-experience margin-bottom-xxs">
                <legend>Experiencia Profesional</legend>
                <button data-id={3} className="edit-button colored1-button-typo padding-xxxxs margin-xxxxs" type="button" name="button">Editar</button>
                <div id="exp_box" className="experience-input content hidden">
                  <input id="job" className="padding-xxs margin-xxxs" type="text" name="job" placeholder="Puesto*" />
                  <input id="company" className="padding-xxs margin-xxxs" type="text" name="company"  placeholder="Empresa*" />
                  <textarea id="comments" className="padding-xxs margin-xxxs" name="comments" rows={8} cols={20} maxLength={300} placeholder="Funciones*(Escribe una pequeña descripción de tu puesto. Máx:300 caracteres.)" defaultValue={""} />
                  <p className="indicative-text-typo text-right form-obl margin-top-zero">*Campos obligatorios</p> {/*indicative-text-typo en cambio de form-obl*/}
                  <div className="calendar">
                    <div className="calendar-start-exp">
                      <p className="start-exp margin-top-zero">Desde*</p>
                      <select id="start_month_exp" className="month padding-left-lg" name="month-exp" />
                      <select id="start_year_exp" className="year padding-left-xs" name="year-exp" />
                    </div>
                    <div className="calendar-end-exp">
                      <p className="end-exp margin-top-zero">Hasta*</p>
                      <select id="end_month_exp" className="month padding-left-lg" name="month-exp" />
                      <select id="end_year_exp" className="year padding-left-xs" name="year-exp" />
                    </div>
                  </div>
                  <div className="experience-buttons margin-xs">
                    <img id="add_button_exp" className="add-button" src="images/add.svg" alt="add button" />
                    <img className="up-button" src="images/up.svg" alt="up button" />
                    <img className="down-button" src="images/down.svg" alt="down button" />
                    <img className="remove-button" src="images/remove.svg" alt="remove button" />
                  </div>
                  <button data-id={3} className="edit-button close left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>
                  <button id="send_exp_button" className="send-input-button right colored2-button-typo margin-md padding-xxxxs" type="button" name="button">guardar</button>
                </div>
              </fieldset>
              <fieldset className="form-education margin-bottom-xxs">
                <legend>Educación</legend>
                <button data-id={4} className="edit-button colored1-button-typo margin-xxxxs padding-xxxxs" type="button" name="button">Editar</button>
                <div className="education-input content hidden">
                  <input id="degree" className="padding-xxs margin-xxxs" type="text" name="degree"  placeholder="Título*" required />
                  <input id="university" className="padding-xxs margin-xxxs" type="text" name="university"  placeholder="Centro de Estudios*" required />
                  <p className="indicative-text-typo text-right form-obl margin-top-zero">*Campos obligatorios</p> {/*indicative-text-typo en cambio de form-obl*/}
                  <div className="calendar">
                    <div className="calendar-start-educ">
                      <p className="start-educ margin-top-zero">Desde*</p>
                      <select id="start_month_educ" className="month padding-left-lg" name="month" />
                      <select id="start_year_educ" className="year padding-left-xs" name="year" />
                    </div>
                    <div className="calendar-end-educ">
                      <p className="end-educ margin-top-zero">Hasta*</p>
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
                  <button data-id={4} className="edit-button close left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>
                  <button id="send_educ_button" className="send-input-button right colored2-button-typo margin-md padding-xxxxs" type="button" name="button">guardar</button>
                </div>
              </fieldset>
              <input className="submit-button colored1-button-typo text-center margin-top-xxxs margin-bottom-lg padding-xxxxxs" id="save" type="submit" defaultValue="enviar datos al cv" />
            </form>
          </div>
          <div id="cv_part" className="cv-box" onload="window.print();window.close()">
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
              <h3>Habilidades</h3>  {/*Cambiado etiqueta por clase*/}
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
              <h3>Idiomas</h3>{/*Cambiado etiqueta por clase*/}
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
              <h3>Educación</h3> {/*Cambiado etiqueta por clase*/}
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
            <input className="print-button text-center colored1-button-typo" id="print" type="submit" defaultValue="imprimir cv" />
          </div>
        </main>
        <footer className="footer-typo text-center">{/*añadida la clase footer-typo*/}
          <p>©<span className="kerstyle">ker</span></p>
        </footer>
      </div>
    );
  }
}

export default App;
