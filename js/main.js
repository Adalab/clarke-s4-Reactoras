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
}
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length;i++) {
    yearsAll[i].innerHTML = selectYears;
}

//Inputs de sección Experiencia

function viewprev(){
	document.getElementById('cv_part').style.display="block";
  document.getElementById('form_exp').style.display="block";
};

var saveExperience = document.querySelector('#send_exp_button');
saveExperience.addEventListener('click',fillExperience)


function fillExperience() {
  viewprev("preview");
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
  document.querySelector('#start_exp_out').innerHTML = '' + startMonthExp + '' + startYearExp;
  document.querySelector('#end_exp_out').innerHTML = '- ' + endMonthExp + '' + endYearExp;
};


//Imprimir CV

 function printCV(){
  var divPrint = document.getElementById('cv_part');
  divPrint.style.display="block";

  var contenido= divPrint.innerHTML;
  var contenidoOriginal= document.body.innerHTML;

  document.body.innerHTML = contenido;

  window.print();

  document.body.innerHTML = contenidoOriginal;
}
