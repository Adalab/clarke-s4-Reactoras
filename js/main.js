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
