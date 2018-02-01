import React from 'react';
import ButtonsNavSection from "./ButtonsNavSection";


class NavSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed : true
    }

    this.handleClickNavSection = this.handleClickNavSection.bind(this);
  }

  handleClickNavSection() {
    this.setState({collapsed: !this.state.collapsed});
    const tabButton = document.querySelectorAll('.tab-button');
    const showForm = document.querySelector('.form-box');
    const showCv = document.querySelector('.cv-box');

    for (let i = 0; i < tabButton.length; i++) {
      tabButton[i].addEventListener('click', switchCv);
    }

    function switchCv () {
      showCv.classList.toggle('hidden-cv');
      showForm.classList.toggle('hidden-cv');
      for (let i = 0; i < tabButton.length; i++) {
        tabButton[i].classList.toggle('active-state-button');
      }
    }

  }
  render() {
    const activeClass = this.state.collapsed ? 'active-state-button' : '';

    return (
      <nav>
      <button onClick={this.handleClickNavSection} className="tab-button active-state-button tab-button-typo padding-xs uppercase-style" type="button" name="button-form">formulario</button>
      <button onClick={this.handleClickNavSection} className="tab-button tab-button-typo padding-xs" type="button" name="button-cv">cv</button>
      </nav>
    );
  }
}

export default NavSection;
