import React, { Component } from 'react';

class Collapse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed : true
    }

    this.handleClickCollapse = this.handleClickCollapse.bind(this);
  }

  handleClickCollapse =() => {
    this.setState({collapsed:this.state.collapsed});

  }
  render() {
    const className = this.state.collapsed ? 'hidden' : '';

    return (
      <div>

            <fieldset className="default-fieldset">
                <legend>{this.props.legend}</legend>
                <button onClick={this.handleClickCollapse} data-id={`button${this.props.buttonNumber}`} className="edit-button squared-primaryColor-width100-button colored1-button-typo padding-xxxxs margin-xxxxs" type="button" name="button">Editar</button>
                <div className={`${this.props.innerClassname} ${className}`}>
                    {this.props.children}
                </div>
                <p className="indicative-text-typo">*Campos obligatorios</p>
                <button data-id={`button${this.props.buttonNumber}`} className="edit-button squared-primaryColor-width45-button left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>
                <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id={`${this.props.idButtonCollapse}`}  type="button" name="button">guardar</button>

            </fieldset>

      </div>
    );
  }
}

export default Collapse;
