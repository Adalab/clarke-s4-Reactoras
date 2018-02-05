import React, { Component } from 'react';
class Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:'';
    }
    this.changeInputText = this.changeInputText.bind(this);
  }

  changeInputText(event){
    this.setState()
  }
  render() {
    return (

      <input onChange ={this.changeInputText} className="'{this.props.value}' default-input-txtarea" type="text" name={this.props.name} value={this.props.value} placeholder={this.props.placeholder}  />

    );
  }
}

export default Input;
