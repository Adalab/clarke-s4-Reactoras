function legacyCode() {

  /*Funcion para cambiar entre FORM y CV al clicar en las pestañas-nav*/
  // var tabButton = document.querySelectorAll('.tab-button');
  // var showForm = document.querySelector('.form-box');
  // var showCv = document.querySelector('.cv-box');
  //
  // for (var i = 0; i < tabButton.length; i++) {
  //   tabButton[i].addEventListener('click', switchCv);
  // }
  //
  // function switchCv () {
  //   showCv.classList.toggle('hidden');
  //   showForm.classList.toggle('hidden');
  //   for (var i = 0; i < tabButton.length; i++) {
  //     tabButton[i].classList.toggle('active-state-button');
  //   }
  // }

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

  // skillsButton.addEventListener('click', skillsToCv);

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
    var job = document.querySelector('#job');
    var company = document.querySelector('#company');
    var comments = document.querySelector('#comments');
    var startMonthExp = document.querySelector('#start_month_exp');
    var startYearExp = document.querySelector('#start_year_exp');
    var endMonthExp = document.querySelector('#end_month_exp');
    var endYearExp = document.querySelector('#end_year_exp');

    document.querySelector('#job_out').innerHTML = job.value;
    document.querySelector('#company_out').innerHTML = company.value;
    document.querySelector('#comments_out').innerHTML = comments.value;
    document.querySelector('#start_exp_out').innerHTML = '' + startMonthExp.value + ' ' + startYearExp.value;
    document.querySelector('#end_exp_out').innerHTML = '- ' + endMonthExp.value + ' ' + endYearExp.value;

    var arrayCamps = [job,company,comments];
    var arrayMonths = [startMonthExp,endMonthExp];
    var arrayYear = [startYearExp,endYearExp];
    resetForm(arrayCamps,arrayMonths,arrayYear);
  };

  //Inputs de sección Educación

  var saveEducation = document.querySelector('#send_educ_button');
  saveEducation.addEventListener('click',fillEducation);

  function fillEducation() {
    var degree = document.querySelector('#degree');
    var university = document.querySelector('#university');
    var startMonthEduc = document.querySelector('#start_month_educ');
    var startYearEduc = document.querySelector('#start_year_educ');
    var endMonthEduc = document.querySelector('#end_month_educ');
    var endYearEduc = document.querySelector('#end_year_educ');

    document.querySelector('#degree_out').innerHTML = degree.value;
    document.querySelector('#university_out').innerHTML = university.value;
    document.querySelector('#start_educ_out').innerHTML = '' + startMonthEduc.value+ ' ' + startYearEduc.value;
    document.querySelector('#end_educ_out').innerHTML = '- ' + endMonthEduc.value + ' ' + endYearEduc.value;

    var arrayCamps = [degree, university];
    var arrayMonths = [startMonthEduc,endMonthEduc];
    var arrayYear = [startYearEduc,endYearEduc];
    resetForm(arrayCamps,arrayMonths,arrayYear);
  };

  // Resetear formulario sección Experiencia y Educación

  function resetForm(listCamps,listMonths,listYear) {
    for (var i = 0; i < listCamps.length; i++) {
      listCamps[i].value = '';
    }
  resetMonth(listMonths);
  resetYear(listYear);

  };
  function resetMonth(monthList) {
    for (var i = 0; i < monthList.length; i++) {
      monthList[i].selectedIndex = 0;
    }
  };
  function resetYear(yearList) {
    for (var i = 0; i < yearList.length; i++) {
      yearList[i].selectedIndex = 0;
    }
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

    // document.body.innerHTML = contenidoOriginal;
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
}

export default legacyCode;
