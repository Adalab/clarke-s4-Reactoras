import React from 'react';
import ButtonsNavSection from "./ButtonsNavSection";


class NavSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed : true
    }

    this.handleClickNavSection = this.handleClickNavSection.bind(this);
  }

  handleClickNavSection() {
    this.setState({collapsed: !this.state.collapsed});

  }
  render() {
    const hiddenClass = this.state.collapsed ? 'hidden' : '';

    return (
      <nav>
      <button onClick={this.handleClickNavSection} className="tab-button active-state-button tab-button-typo padding-xs uppercase-style" type="button" name="button-form">formulario</button>
      <button onClick={this.handleClickNavSection} className="tab-button tab-button-typo padding-xs" type="button" name="button-cv">cv</button>
      </nav>
    );
  }
}

export default NavSection;
