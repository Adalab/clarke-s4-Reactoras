'use strict'

function addYears(initYear, currentYear) {
  var acumulador = '';
  for (var i = initYear; i <= currentYear; i++) {
    acumulador = acumulador + '<option>' + i + '</option>';
  }
  return '<option id="startExpMonth" disabled selected>Año</option>' + acumulador;
}

var selectYears = document.querySelector('startExpYear');

startExpYear.innerHTML = addYears(1950, 2017);

/*var startYear = 1950;
var currentYear = 2017;
var options = '';
for (var i = startYear; i <= currentYear; i++) {
  options += '<option>' + i + '</option>'
}

document.getElementById('startExpYear').innerHTML = options;*/

/*Funcion para cambiar entre FORM y CV al clicar en las pestañas-nav*/
var switchFormButton = document.querySelector('.tab-form-button');
var switchCvButton = document.querySelector('.tab-cv-button');
var showForm = document.querySelector('.form-box');
var showCv = document.querySelector('.cv-box');

function switchCv () {
  showCv.classList.remove('hidden') + showForm.classList.add('hidden') + switchCvButton.classList.add('active') + switchFormButton.classList.remove('active');
}
switchCvButton.addEventListener('click', switchCv);

function switchForm () {
  showCv.classList.add('hidden') + showForm.classList.remove('hidden') + switchFormButton.classList.add('active') + switchCvButton.classList.remove('active');;
}
switchFormButton.addEventListener('click',switchForm)


/*Funcion para desplegar fieldeset al clicar en editar*/
var editButton = document.querySelector('.edit-button');
var showContent = document.querySelector('.contact-input');
function edit () {
  showContent.classList.remove('hidden');
}
editButton.addEventListener('click', edit);

/*Funcion para cerrar fieldeset al clicar en cerrar*/
var closeButton = document.querySelector('.close-input-button')
function close () {
  showContent.classList.add('hidden');
}
closeButton.addEventListener('click', close);
