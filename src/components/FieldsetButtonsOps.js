import React, {Component} from 'react';
import ButtonMore from './ButtonMore';
import ButtonUp from './ButtonUp';
import ButtonDown from './ButtonDown';
import ButtonLess from './ButtonLess';

class FieldsetButtonsOps extends Component {

  render(){

    return(
      <div>
        <ButtonMore />
        <ButtonUp />
        <ButtonDown />
        <ButtonLess />
      </div>
    );
  }
}

export default FieldsetButtonsOps;
