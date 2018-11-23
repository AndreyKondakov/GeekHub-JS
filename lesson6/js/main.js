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

  // true star
  let hiddenStar = document.getElementById('character-true');

  // console.log(hiddenStar.firstChild)

  // let firstImgFromLi = oneStarFromAllLi.querySelectorAll('firstChild');
  // console.log(firstImgFromLi);

  buttonName.addEventListener('click', function () {
    let name = inputName.value;
    if (name !== '') {
      addName.innerHTML = name;
      characterBlock.removeChild(nameBlock);

      // oneStarFromAllLi.classList.add("hidden");

      // начать повторы с интервалом 2 сек
      // var timerId = setInterval(function() {
        console.log('test timer');
        // for (let i = 0; i<5; i++) {
        //
        // }

      // }, 2000);

      (function myLoop (i) {
        setTimeout(function () {
          console.log('hello');          //  your code here
          let oneStarFromAllLi = hiddenStar.querySelectorAll('li img:first-child');
          oneStarFromAllLi.forEach(function (firstImg) {
            // firstImg.className += " hidden";
            firstImg.remove()
          });
          if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
        }, 2000)
      })(10);
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