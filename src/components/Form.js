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
        <PersonalData  sendLocalPersonalData={this.props.sendPersonalData}

          inputPersonal1a={this.props.inputPersonal1b}
          updateInputPersonal1a={this.props.updateInputPersonal1b}

          inputPersonal2a={this.props.inputPersonal2b}
          updateInputPersonal2a={this.props.updateInputPersonal2b}

          inputPersonal3a={this.props.inputPersonal3b}
          updateInputPersonal3a={this.props.updateInputPersonal3b}

          inputPersonal4a={this.props.inputPersonal4b}
          updateInputPersonal4a={this.props.updateInputPersonal4b}

          inputPersonal5a={this.props.inputPersonal5b}
          updateInputPersonal5a={this.props.updateInputPersonal5b}

          inputPersonal6a={this.props.inputPersonal6b}
          updateInputPersonal6a={this.props.updateInputPersonal6b}

         />

        <Skills changeInputText={this.changeInputText}
        sendLocalSkills={this.props.sendSkills}

        inputSkillsa={this.props.inputSkillsb}
        updateInputSkillsa={this.props.updateInputSkillsb} />

        <Languages changeInputText={this.changeInputText}
        sendLocalLanguages={this.props.sendLanguages}

        inputLanguage1a={this.props.inputLanguage1b}
        updateInputLanguage1a={this.props.updateInputLanguage1b}

        inputLanguage2a={this.props.inputLanguage2b}
        updateInputLanguage2a={this.props.updateInputLanguage2b}
        />

        <Experience changeInputText={this.changeInputText}
        sendLocalExperiencie={this.props.sendExperiencie}

        inputExperience1a={this.props.inputExperience1b}
        updateInputExperience1a={this.props.updateInputExperience1b}

        inputExperience2a={this.props.inputExperience2b}
        updateInputExperience2a={this.props.updateInputExperience2b}

        inputExperience3a={this.props.inputExperience3b}
        updateInputExperience3a={this.props.updateInputExperience3b}

        inputExperience4a={this.props.inputExperience4b}
        updateInputExperience4a={this.props.updateInputExperience4b}

        inputExperience5a={this.props.inputExperience5b}
        updateInputExperience5a={this.props.updateInputExperience5b}

        inputExperience6a={this.props.inputExperience6b}
        updateInputExperience6a={this.props.updateInputExperience6b}

        inputExperience7a={this.props.inputExperience7b}
        updateInputExperience7a={this.props.updateInputExperience7b}/>

        <Education changeInputText={this.changeInputText}
        sendLocalEducation={this.props.sendEducation}
        inputEducation1a={this.props.inputEducation1b}
        updateInputEducation1a={this.props.updateInputEducation1b}

        inputEducation2a={this.props.inputEducation2b}
        updateInputEducation2a={this.props.updateInputEducation2b} />
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
