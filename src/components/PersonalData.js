import React, { Component } from 'react';
import Collapse  from './components/Collapse';


class PersonalData extends Component {

  render() {
    return (
      <div>
      <Collapse className="default-fieldset"> {/*desde form hasta form-cotact modificado desde Sara*/}
        <legend>Datos Personales</legend>
        <button data-id={0} className="edit-button squared-primaryColor-width100-button colored1-button-typo padding-xxxxs margin-xxxxs" type="button" name="button">Editar</button>
        <div className="contact-input content hidden">
          <input className="contact-field default-input-txtarea" type="text" name="full name" id="name_surname"  placeholder="Nombre y Apellidos*" required />
          <input className="contact-field default-input-txtarea" type="text" name="profession" id="prof"  placeholder="Profesión*" required />
          <input className="contact-field default-input-txtarea" type="tel" name="phone" id="phon"  placeholder="Teléfono*" required />
          <input className="contact-field default-input-txtarea" type="email" name="email" id="mail"  placeholder="Correo electrónico*" required />
          <input className="contact-field default-input-txtarea" type="text" name="Linkedin" id="linked"  placeholder="linkedin.com/nombredetuperfil" />
          <textarea className="contact-field default-input-txtarea" name="comments" id="description" rows={8} cols={20} maxLength={300} placeholder="Perfil*(Escribe una pequeña descripción de ti. Máx:300 caracteres.)" required defaultValue={""} />
          <p className="indicative-text-typo">*Campos obligatorios</p>
          <button data-id={0} className="edit-button squared-primaryColor-width45-button left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>
          <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id="save1" type="button" name="button">guardar</button>
        </div>
      </Collapse>

      </div>
    );
  }
}

export default PersonalData;
