import React from 'react';
import PropTypes from 'prop-types';

class CloseButton extends React.Component {
  render() {
    return (
  <button  onClick={this.handleClickCollapse} className={`edit-button squared-primaryColor-width45-button left colored1-button-typo margin-md padding-xxxxs-${this.props.styling}`} type="button" name="button">{this.props.label}</button>
    );
  }
}

  CloseButton.propTypes = {
    styling: PropTypes.string,
    label: PropTypes.string
  }

export default CloseButton;
