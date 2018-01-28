import React from 'react';
import PropTypes from 'prop-types';

class ButtonsNavSection extends React.Component {
  render() {
    return (
      <button onClick={this.handleClickNavSection} className={`tab-button active-state-button tab-button-typo padding-xs uppercase-style-${this.props.styling}`} type="button" name="button-form">{this.props.label}{this.props.label}</button>
      <button onClick={this.handleClickNavSection} className={`tab-button tab-button-typo padding-xs-${this.props.styling}`} type="button" name="button-cv">{this.props.label}</button>
    );
  }
}

  ButtonsNavSection.propTypes = {
    styling: PropTypes.string,
    label: PropTypes.string
  }

export default ButtonsNavSection;
