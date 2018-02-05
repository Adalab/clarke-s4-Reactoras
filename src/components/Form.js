import React, { Component } from 'react';
import PersonalData from './PersonalData';
import Skills from './Skills';
import Languages from './Languages'
import Experience from './Experience';
import Education from './Education';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue : ''
    }
    this.changeInputText = this.changeInputText.bind(this);
  }

  changeInputText(event){
    this.setState({
      inputValue: event.target.value
    })
  }

  handleInsertPhoto(event) {
    const input = document.querySelector("#photo");
    const img = document.querySelector('.photo-CV');
    const files = input.files;
    if (files && files.length > 0) {
      showImage(files[0], img);
    }
    function showImage(image, imgTag) {
      const fr = new FileReader();
      fr.onload = function () {
        imgTag.src = fr.result;
      }
      fr.readAsDataURL(image);
    }
  }

  render() {

    return (
      <div className="form-box margin-top-xs">
        <form className="form" onSubmit={this.props.handleClick}>
          <PersonalData changeInputText={this.changeInputText}  />
          <Skills changeInputText={this.changeInputText}  />
          <Languages changeInputText={this.changeInputText}  />
          <Experience changeInputText={this.changeInputText} />
          <Education changeInputText={this.changeInputText}  />
          <div>
            <label htmlFor="photo" className="insert-photo-input colored1-button-typo rounded-primaryColor-width100-button">Insertar fotografía
            </label>
            <input className="hidden" type="file" name="photo" value="" id="photo" onChange= {this.handleInsertPhoto}/>
          </div>
          <input type="submit" className="rounded-primaryColor-width100-button colored1-button-typo text-center margin-top-xxxs margin-bottom-lg padding-xxxxxs" id="save" value="enviar datos al cv"/ >
        </form>
      </div>
    );
  }
}




export default Form;
