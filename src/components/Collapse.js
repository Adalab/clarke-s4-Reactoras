import React, { Component } from 'react';

class Collapse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed : true
    }

    this.handleClickCollapse = this.handleClickCollapse.bind(this);
  
  }

  handleClickCollapse() {
    this.setState({collapsed: !this.state.collapsed});

  }
  render() {
    const hiddenClass = this.state.collapsed ? 'hidden' : '';

    return (
      <fieldset className="default-fieldset">
          <legend>{this.props.legend}</legend>
          <button onClick={this.handleClickCollapse} className="edit-button squared-primaryColor-width100-button colored1-button-typo padding-xxxxs margin-xxxxs" type="button" name="button">Editar</button>
          <div className={`contact-input content ${hiddenClass}`}>
              {this.props.children}
              <button  onClick={this.handleClickCollapse} className="edit-button squared-primaryColor-width45-button left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>
              <button className="rounded-lightColor-width45-button colored2-button-typo right margin-md padding-xxxxs" id={`${this.props.idButtonCollapse}`}  type="button" name="button">guardar</button>

          </div>
      </fieldset>
    );
  }
}

export default Collapse;