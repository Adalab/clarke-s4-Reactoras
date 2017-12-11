'use strict'

/*Funcion para cambiar entre FORM y CV al clicar en las pestañas-nav*/
var tabButton = document.querySelectorAll('.tab-button');
var showForm = document.querySelector('.form-box');
var showCv = document.querySelector('.cv-box');

for (var i = 0; i < tabButton.length; i++) {
  tabButton[i].addEventListener('click', switchCv);
}

function switchCv () {
  showCv.classList.toggle('hidden');
  showForm.classList.toggle('hidden');
  for (var i = 0; i < tabButton.length; i++) {
    tabButton[i].classList.toggle('active');
  }
}

/*Funcion para desplegar fieldeset al clicar en editar*/

function showContent(event) {
  var content = document.querySelectorAll('.content');
  var idButton = event.currentTarget.getAttribute('data-id');
  content[idButton].classList.toggle('hidden');
}

var editButton = document.querySelectorAll('.edit-button');
for (var i = 0; i < editButton.length; i++) {
  editButton[i].addEventListener('click', showContent);
};

// Desplegables mes

var selectMonths = '<option selected disabled value="mes">Mes</option>';
var monthArray = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

for(i in monthArray){
  selectMonths = selectMonths + '<option>' + (monthArray[i]) + '</option>';
}
var monthsAll = document.querySelectorAll('.month');
for (var j = 0; j < monthsAll.length;j++) {
    monthsAll[j].innerHTML = selectMonths;
};

// Desplegables año

var years = 2060;
var selectYears = '<option selected disabled value="año">Año</option>';

for (var initYear = 1950; initYear < years; initYear++) {
  selectYears = selectYears + '<option>' + (initYear) + '</option>';
};
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length;i++) {
    yearsAll[i].innerHTML = selectYears;
};


//Pasar HABILIDADES del form al cv

var userSkills = document.querySelector('.user-skills');
var skillsButton = document.querySelector('#skills-button');
var cvSkills = document.querySelector('.list-skills');

skillsButton.addEventListener('click', skillsToCv);

function skillsToCv() {
  var userSkillsValue = userSkills.value;
  cvSkills.innerHTML += '<li><h4>' + userSkillsValue + '</h4></li>';
};

//Añadir una nueva Habilidad
var addNewSkill = document.querySelector('#add-skills');
addNewSkill.addEventListener('click', newSkill);
function newSkill() {
  var userSkillsValue = userSkills.value;
  userSkills.value = '';
};

//Pasar IDIOMA del form al cv
var userLanguage = document.querySelector('.user-language');
var userLevel = document.querySelector('.user-level');
var languageButton = document.querySelector('#language-button');
var cvLanguage = document.querySelector('.list-language');

languageButton.addEventListener('click', languageToCv);

function languageToCv() {
  var userLanguageValue = userLanguage.value;
  var userLevelValue = userLevel.value;
  cvLanguage.innerHTML = '<li><h4>' + userLanguageValue + '</h4><p>' + userLevelValue + '</p></li>';
};
