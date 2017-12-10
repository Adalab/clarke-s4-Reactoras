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

/*JS Meter datos en el cv Contactos*/

document.getElementById("save1").addEventListener("click",saveFunction);

function saveFunction(){
  var inputContactList = document.getElementsByClassName("contact-field");
  for (var i = 0; i < inputContactList.length; i++) {
    document.getElementById(inputContactList[i].id+"_out").innerHTML = inputContactList[i].value;
  }

}
