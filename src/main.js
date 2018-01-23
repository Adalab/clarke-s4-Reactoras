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

//añadir el all dentro de la funcion del evento
var skillsButton = document.querySelector('#skills-button');
var cvSkills = document.querySelector('.list-skills');

skillsButton.addEventListener('click', skillsToCv);

function skillsToCv() {
  var userSkills = document.querySelectorAll('.skills-text');
  for (var i = 0; i < userSkills.length; i++) {
    var userSkillsValue = userSkills[i].value;
    cvSkills.innerHTML += '<li><h4>' + userSkillsValue + '</h4></li>';
  };
};

//Añadir una nueva Habilidad
var addNewSkill = document.querySelector('#add-skills');
var userNewSkills = document.querySelector('.user-new-skills');
addNewSkill.addEventListener('click', newSkill);
function newSkill() {
  userNewSkills.classList.remove('hidden');
};

//Quitar Habilidad
var quitButtonSkill = document.querySelector('#quit-skills');
var userDeleteSkills = document.querySelector('.user-new-skills');
quitButtonSkill.addEventListener('click', quitSkill);
function quitSkill() {
  userDeleteSkills.classList.add('hidden');
  userDeleteSkills.value = '';
};

//Mover elemento hacia arriba (-1 en su posición dentro del array)


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


/*JS Meter datos en el cv Contactos*/

document.getElementById("save1").addEventListener("click",saveFunction);

function saveFunction(){
  var inputContactList = document.getElementsByClassName("contact-field");
  for (var i = 0; i < inputContactList.length; i++) {
    document.getElementById(inputContactList[i].id+"_out").innerHTML = inputContactList[i].value;
  }

}

//Inputs de sección Experiencia

var saveExperience = document.querySelector('#send_exp_button');
saveExperience.addEventListener('click',fillExperience);

function fillExperience() {
  var job = document.querySelector('#job').value;
  var company = document.querySelector('#company').value;
  var comments = document.querySelector('#comments').value;
  var startMonthExp = document.querySelector('#start_month_exp').value;
  var startYearExp = document.querySelector('#start_year_exp').value;
  var endMonthExp = document.querySelector('#end_month_exp').value;
  var endYearExp = document.querySelector('#end_year_exp').value;

  document.querySelector('#job_out').innerHTML = job;
  document.querySelector('#company_out').innerHTML = company;
  document.querySelector('#comments_out').innerHTML = comments;
  document.querySelector('#start_exp_out').innerHTML = '' + startMonthExp + ' ' + startYearExp;
  document.querySelector('#end_exp_out').innerHTML = '- ' + endMonthExp + ' ' + endYearExp;
};

//Inputs de sección Educación

var saveEducation = document.querySelector('#send_educ_button');
saveEducation.addEventListener('click',fillEducation);

function fillEducation() {
  var degree = document.querySelector('#degree').value;
  var university = document.querySelector('#university').value;
  var startMonthEduc = document.querySelector('#start_month_educ').value;
  var startYearEduc = document.querySelector('#start_year_educ').value;
  var endMonthEduc = document.querySelector('#end_month_educ').value;
  var endYearEduc = document.querySelector('#end_year_educ').value;

  document.querySelector('#degree_out').innerHTML = degree;
  document.querySelector('#university_out').innerHTML = university;
  document.querySelector('#start_educ_out').innerHTML = '' + startMonthEduc + ' ' + startYearEduc;
  document.querySelector('#end_educ_out').innerHTML = '- ' + endMonthEduc + ' ' + endYearEduc;
};


//Imprimir CV



var buttonCv = document.querySelector('.print-button');
buttonCv.addEventListener('click',printCv);

function printCv(){

  var divPrint = document.getElementById('cv_part');
  divPrint.style.display="block";
  var winPrint = window.open('','','left=0,width=800,height=900');
  winPrint.document.write('<link rel="stylesheet" href="styles/master.css" media="all">');
  winPrint.document.write(divPrint.innerHTML);
  winPrint.document.close();
  winPrint.document.focus();
  winPrint.print();
  window.close();

  //document.body.innerHTML = contenidoOriginal;  
}

//Boton final de guardar datos en el CV

var finalSaveButton = document.querySelector('#save');

finalSaveButton.addEventListener('click', saveAll);

function saveAll(event) {
  event.preventDefault();
  saveFunction();
  skillsToCv();
  languageToCv();
  fillExperience();
  fillEducation();
};
