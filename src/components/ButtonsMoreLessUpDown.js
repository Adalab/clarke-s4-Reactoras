import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ButtonMore extends Component {
  constructor(props) {
    super(props);
    this.state ={
      skills: [
        'Habilidad1'
      ]
    }

    this.addOption = this.addOption.bind(this);

  }

  addOption(){
    this.setState((
      this.state, { skills: {$push: 'Otra habilidad'} }
    ));

  }


  render(){

    return(

          <img onClick={this.addOption} id="#add-skills" className="add-button" src="images/add.svg" alt="add button" />

    );
  }
}

export default ButtonMore;
