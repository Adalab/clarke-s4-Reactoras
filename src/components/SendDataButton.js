import React from 'react';

//137

class SendDataButton extends React.Component {

  render() {
    return (
      <input onClick={ this.props.sendData } className="rounded-primaryColor-width100-button colored1-button-typo text-center margin-top-xxxs margin-bottom-lg padding-xxxxxs" id="save" type="submit" defaultValue="enviar datos al cv" />

    );
  }
}

export default SendDataButton;
