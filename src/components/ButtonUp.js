import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ButtonUp extends Component {
  constructor(props) {
    super(props);
    this.state ={
      skills: [
        'Habilidad1'
      ]
    }
      this.moveUpItem = this.moveUpItem.bind(this);
      }

  moveUpItem(){
    this.setState((
      this.state, { skills: {$split: 'Otra habilidad'} }
    ));

  }


  render(){

    return(

          <img onClick={this.moveUpItem} className="up-button" src="images/up.svg" alt="up button" />

    );
  }
}

export default ButtonUp;
