'use strict'

// Desplegables mes

var selectMonths = '<option selected disabled value="mes">  Mes</option>';
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
var selectYears = '<option selected disabled value="año"> Año</option>'; //almacena selections de html que van en el select

for (var initYear = 1950; initYear < years; initYear++) {
  selectYears = selectYears + '<option>' + (initYear) + '</option>';
}
var yearsAll = document.querySelectorAll('.year');
for (var i = 0; i < yearsAll.length;i++) {
    yearsAll[i].innerHTML = selectYears;
}
