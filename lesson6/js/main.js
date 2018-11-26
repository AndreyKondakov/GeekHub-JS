(function () {
  'use strict';
  console.log('test');
  let character = document.getElementById('character');
  let buttonName = document.getElementById('buttonName');
  let inputName = character.querySelector('input[type=text]');
  let addName = document.getElementById('userName');

  // delete input block
  let characterBlock = document.getElementById('character-block');
  let nameBlock = document.getElementById('add-name');

  let gameBlock = document.getElementsByClassName('game')[0];
//  let gameBlock = characterBlock.querySelector('game');   // Так нельзя ? Что бы не искать по всему документу (13строка)

  // true star
  let hiddenStar = document.getElementById('character-true');

  buttonName.addEventListener('click', function () {
    let name = inputName.value;
    if (name !== '') {
      gameBlock.classList.remove('hidden');
      addName.innerHTML = name;
      characterBlock.removeChild(nameBlock);

      // oneStarFromAllLi.classList.add("hidden");

      // начать повторы с интервалом 2 сек
      // var timerId = setInterval(function() {
      //   console.log('test timer');
        // for (let i = 0; i<5; i++) {
        //
        // }
      // }, 2000);
      // for (let j = 1; j<=5; j++) {

      (function myLoop (i) {
        setTimeout(function () {
          console.log('hello');          //  your code here

            let oneStarFromAllLi = hiddenStar.querySelectorAll('li img:first-child');

            oneStarFromAllLi.forEach(function (firstImg) {
              firstImg.remove()

              // firstImg.className += " hidden";


            });

          if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
        }, 2000)
      })(6);     //  колисчетво повторов
      // }


    }
  });

  function Character(name) {
    this.name = name;
    this.life = 5;
    this.saturation = 5;
    this.strength = 5;
    this.happiness = 5;


  }


})();