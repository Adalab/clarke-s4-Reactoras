import React, {Component} from 'react';


class ButtonMore extends Component {
  constructor(props) {
    super(props);
    this.state ={
      skills: [
        ''
      ]
    }

    this.addOption = this.addOption.bind(this);

  }

  addOption(){
    this.setState(prevState => {
      return [...prevState.skills, ''];
    })
  }



  render(){

    return(

      <img onClick={this.addOption} id="#add-skills" className="add-button" src="images/add.svg" alt="add button" />

    );
  }
}

export default ButtonMore;
