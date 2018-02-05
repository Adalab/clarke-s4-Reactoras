import React, { Component } from 'react';
import Collapse  from './Collapse';


class PersonalData extends Component {

  render() {
    return (
      <div>

      <Collapse legend="Datos personales"> {/*desde form hasta form-cotact modificado desde Sara*/}
        <input  className="contact-field default-input-txtarea" type="text" name="fullname" id="name_surname"  placeholder="Nombre y Apellidos*" value={this.props.inputPersonal1a} onChange={this.props.updateInputPersonal1a}/>
        <input  className="contact-field default-input-txtarea" type="text" name="profession" id="prof"  placeholder="Profesión*" value={this.props.inputPersonal2a} onChange={this.props.updateInputPersonal2a} />
        <input  className="contact-field default-input-txtarea" type="tel" name="phone" id="phon"  placeholder="Teléfono*" value={this.props.inputPersonal3a} onChange={this.props.updateInputPersonal3a} />
        <input  className="contact-field default-input-txtarea" type="email" name="email" id="mail"  placeholder="Correo electrónico*" value={this.props.inputPersonal4a} onChange={this.props.updateInputPersonal4a} />
        <input  className="contact-field default-input-txtarea" type="text" name="Linkedin" id="linked"  placeholder="linkedin.com/nombredetuperfil" value={this.props.inputPersonal5a} onChange={this.props.updateInputPersonal5a}/>
        <textarea  className="contact-field default-input-txtarea" name="comments" id="description" rows={8} cols={20} maxLength={300} placeholder="Perfil*(Escribe una pequeña descripción de ti. Máx:300 caracteres.)"  defaultValue={""} value={this.props.inputPersonal6a} onChange={this.props.updateInputPersonal6a} />
        <p className="indicative-text-typo">*Campos obligatorios</p>

        <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id={`${this.props.idButtonCollapse}`}  type="button" name="button" onClick={this.props.sendLocalPersonalData}>guardar</button>

        <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id={`${this.props.idButtonCollapse}`}  type="reset" name="button" >reset</button>

      </Collapse>

      </div>
    );
  }
}

export default PersonalData;
