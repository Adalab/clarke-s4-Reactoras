import React, { Component } from 'react';


class SectionCVHeader extends Component {
  render() {
    return (
      <div className="cv-header">
        <div className="profile">
          <div className="cv-header-text">
          <h2 id="name_surname_out">Nombre Apellido</h2>
          <h2> <span id="prof_out" className="profesion">Profesión</span></h2>

          <p className="cv-description" id="description_out" >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </p>
          </div>
        </div>
        <div className="contact">
          <ul className="list-contact">
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
    );
  }
}

export default SectionCVHeader;
