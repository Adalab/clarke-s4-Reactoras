import React, { Component } from 'react';


class SectionCVHeader extends Component {
  render() {
    return (
      <div className="cv-header">
        <div className="profile">
          <div className="cv-header-text">

          <img className="photo-CV"/>

          <h2 id="name_surname_out">{ this.props.nameForm}</h2>
          <h2> <span id="prof_out" className="profesion">{ this.props.professionForm}</span></h2>
          <p className="cv-description" id="description_out" >{ this.props.descriptionForm}
          </p>
          </div>
        </div>
        <div className="contact">
          <ul className="list-contact">
          <li>
          <img src="images/phone-icon.svg" alt="telefono" />
          <span id="phon_out">{ this.props.phoneForm}</span>
          </li>
          <li>
          <img src="images/mail-icon.svg" alt="mail" />
          <span id="mail_out">{ this.props.mailForm}</span>
          </li>
          <li>
          <img src="images/linkedin-icon.svg" alt="linkedin" />
          <span id="linked_out">{ this.props.linkedinForm}</span>
          </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SectionCVHeader;
