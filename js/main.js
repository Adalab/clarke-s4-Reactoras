'use strict';

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


/*Funcion para cerrar los fieldset al clicar en cerrar*/
/*function closeContent(event) {
  var content = document.querySelectorAll('.content');
  var closeIdButton = event.currentTarget.getAttribute('data-id');
  content[closeIdButton].classList.add('hidden');
}

var closeButton = document.querySelectorAll('.close-button-input');
for (var i = 0; i < closeButton.length; i++) {
  closeButton[i].addEventListener('click', closeContent);
};*/

/*var editButton = document.querySelectorAll('.edit-button');
var showContent = document.querySelector('.content');

for (var i = 0; i < editButton.length; i++) {
editButton[i].addEventListener('click', editContent);
}

function editContent (event) {
  var progreso = event.currentTarget;
  var input = progreso.
  for (var i = 0; i < editButton.length; i++) {
  showContent.classList.remove('hidden');
}
for (var i = 0; i < showContent.length; i++) {
  showContent[i].classList.add('hidden');
}
};*/
