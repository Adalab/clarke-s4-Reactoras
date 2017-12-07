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
selectMonths = selectMonths + '<option value="enero">Enero</option>';
selectMonths = selectMonths + '<option value="febrero">Febrero</option>';
selectMonths = selectMonths + '<option value="marzo">Marzo</option>';
selectMonths = selectMonths + '<option value="abril">Abril</option>';
selectMonths = selectMonths + '<option value="mayo">Mayo</option>';
selectMonths = selectMonths + '<option value="junio">Junio</option>';
selectMonths = selectMonths + '<option value="julio">Julio</option>';
selectMonths = selectMonths + '<option value="agosto">Agosto</option>';
selectMonths = selectMonths + '<option value="septiembre">Septiembre</option>';
selectMonths = selectMonths + '<option value="octubre">Octubre</option>';
selectMonths = selectMonths + '<option value="noviembre">Noviembre</option>';
selectMonths = selectMonths + '<option value="diciembre">Diciembre</option>';

var monthsAll = document.querySelectorAll('.month');
for (var i = 0; i < monthsAll.length;i++) {
    monthsAll[i].innerHTML = selectMonths;
}

// Desplegables año

var years = 2060;
var selectYears = '<option selected disabled value="año">Año</option>';

for (var initYear = 1950; initYear < years; initYear++) {
  selectYears = selectYears + '<option>' + (initYear) + '</option>';
}
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length;i++) {
    yearsAll[i].innerHTML = selectYears;
}
