import React, { Component } from 'react';
import Collapse  from './Collapse';


class PersonalData extends Component {

  render() {
    return (
      <div>
      <Collapse legend="Datos personales"> {/*desde form hasta form-cotact modificado desde Sara*/}
        <input className="contact-field default-input-txtarea" type="text" name="full name" id="name_surname"  placeholder="Nombre y Apellidos*" required />
        <input className="contact-field default-input-txtarea" type="text" name="profession" id="prof"  placeholder="Profesión*" required />
        <input className="contact-field default-input-txtarea" type="tel" name="phone" id="phon"  placeholder="Teléfono*" required />
        <input className="contact-field default-input-txtarea" type="email" name="email" id="mail"  placeholder="Correo electrónico*" required />
        <input className="contact-field default-input-txtarea" type="text" name="Linkedin" id="linked"  placeholder="linkedin.com/nombredetuperfil" />
        <textarea className="contact-field default-input-txtarea" name="comments" id="description" rows={8} cols={20} maxLength={300} placeholder="Perfil*(Escribe una pequeña descripción de ti. Máx:300 caracteres.)" required defaultValue={""} />
        <p className="indicative-text-typo">*Campos obligatorios</p>
      </Collapse>

      </div>
    );
  }
}

export default PersonalData;
