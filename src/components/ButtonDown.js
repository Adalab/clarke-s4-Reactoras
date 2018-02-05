import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ButtonDown extends Component {
  constructor(props) {
    super(props);
    this.state ={
      skills: [
        'Habilidad1'
      ]
    }

    this.moveDownItem = this.moveDownItem.bind(this);
  }

  moveDownItem(){
    this.setState((
      this.state, { skills: {$push: 'Otra habilidad'} }
    ));

  }


  render(){

    return(
    <img  onClick={this.moveDownItem} className="down-button" src="images/down.svg" alt="down button" />

    );
  }
}

export default ButtonDown;
