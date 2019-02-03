document.addEventListener('DOMContentLoaded', function() {

  console.log('main.js');

// add dish
  var addBtn = document.getElementById('btn-add');
  var dataBase = {};

  // if(addBtn){
  //   addBtn.addEventListener('click', function (e) {
  //     e.preventDefault();

  //   }, false);
  // }

  // to LocalStorage
  // addBtn.addEventListener('click', function (e) {
  //   e.preventDefault();
  //   // const loginForm = document.getElementById('login-form');
  //   // console.log(loginForm.firstElementChild.value);
  //   // console.log(loginForm.querySelector('input[name=calories]').value);
  //
  //   let dishInput = addBtn.previousElementSibling.previousElementSibling;
  //   let caloriesInput = addBtn.previousElementSibling;
  //   dataBase[`"${dishInput.value}"`] = caloriesInput.value;
  //   dishInput.value = "";
  //   caloriesInput.value = "";
  //
  //   for(var key in dataBase){
  //     localStorage.setItem(key, dataBase[key]);
  //   }
  //
  //   console.log(dataBase);
  // });

  // to mongodb
  addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    // const loginForm = document.getElementById('login-form');
    // console.log(loginForm.firstElementChild.value);
    // console.log(loginForm.querySelector('input[name=calories]').value);

    let dishInput = addBtn.previousElementSibling.previousElementSibling;
    let caloriesInput = addBtn.previousElementSibling;
    dataBase[`"${dishInput.value}"`] = caloriesInput.value;
    dishInput.value = "";
    caloriesInput.value = "";

    for(var key in dataBase){
      localStorage.setItem(key, dataBase[key]);
    }

    console.log(dataBase);
  });


  //
  // (function () {
  //   var tableAlldish = document.getElementById('all-dishes');
  //   var tr = document.createElement('tr');
  //
  //   for(var i = 0;  i < localStorage.length; i++){
  //     console.log(localStorage.key(i), localStorage.key(value(i)));
  //     console.log('for')
  //   }
  //
  // }());


  // (function() {
  //   var td = '';
  //   for(var i in localStorage) if(typeof localStorage[i] == 'string') td += '<tr><td>' + i + '</td><td>' + localStorage[i] + '</td></tr>';
  //   document.getElementById('all-dishes').innerHTML = td;
  // })();







}, false);