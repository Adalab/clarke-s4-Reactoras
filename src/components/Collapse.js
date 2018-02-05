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
    const hiddenClass = this.state.collapsed ? 'hidden-box-form' : 'show-box-form';

    return (
      <fieldset className="default-fieldset">
          <legend>{this.props.legend}</legend>
          <button onClick={this.handleClickCollapse} className="edit-button squared-primaryColor-width100-button colored1-button-typo padding-xxxxs margin-xxxxs" type="button" name="button">Editar</button>
          <div className={` content ${hiddenClass}`}>
              {this.props.children}
              <button  onClick={this.handleClickCollapse} className="edit-button squared-primaryColor-width45-button left colored1-button-typo margin-md padding-xxxxs" type="button" name="button">cerrar</button>

          </div>
      </fieldset>
    );
  }
}

export default Collapse;
