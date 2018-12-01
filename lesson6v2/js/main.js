(function () {

class Character {
  constructor(name = '') {
    this.name = name;
    this.walk = 50;
    this.eat = 50;
    this.sleep = 50;
    this.play = 50;

    this.initCharacter();

    // делаю counter в конструкторе , что бы время было свое у каждого нового обьекта
    this.counter = setInterval(() => {
      // document.getElementsByClassName('character-name').style.color = "blue";  //for test

      this.walk  = this.walk - 5;
      console.log('test walk 1', this.walk);

      let life = document.querySelector('.progress-life .progress-bar');
      life.style.width = this.walk + '%';
      // life.querySelector('span').style.width = `${this.walk} + %`;

      // let testik = document.getElementById('add-name').style.color = 'red';
      this.eat =   this.eat - 5;
      console.log( this.eat);
      // let saturation = document.getElementsByClassName('progress-saturation')[0].style.width = `${this.eat} + %`;

      this.sleep = this.sleep - 5;
      // console.log( this.sleep);
      // let strength = document.getElementsByClassName('progress-strength')[0].style.width = `${this.sleep} + %`;

      this.play =  this.play - 5;
      // console.log( this.play);
      // let happiness = document.getElementsByClassName('progress-happiness')[0].style.width = `${this.play} + %`;

      if ((this.walk && this.eat && this.sleep && this.play) <= 0 ) {
        clearTimeout(this.counter);
      }
      console.log(this.name);
    }, 2000);
    // this.walkAction(this.walk);
    this.targetAction();

    // this.targetAction = function() {
    //   let character = document.getElementById('character');
    //   character.addEventListener('click', ({target}) => {
    //     if (target.tagName === 'BUTTON') {
    //       console.log(target.className);
    //       if (target.className === 'action-walk') {
    //         this.walk = this.walk + 20;
    //         console.log(target.className, '+20 = ', this.walk);
    //       } else if (target.className === 'action-eat') {
    //         this.eat = this.eat + 30;
    //         console.log('eat +30 = ', this.eat)
    //       } else if (target.className === 'action-sleep') {
    //         this.sleep = this.sleep + 50;
    //         console.log('this is the speel +50 = ', this.sleep)
    //       } else if (target.className === 'action-play') {
    //         this.play = this.play + 5;
    //         this.eat = this.eat - 10;
    //         console.log(this.walk, this.eat, this.sleep, this.play)
    //       }
    //     }
    //     // return this.walk
    //   })
    // }
  }

  initCharacter () {
    const addName = document.getElementById('add-name');
    let inputName = addName.querySelector('input[type=text]');
    let buttonAdd = addName.querySelector('button');

    function createItem(name) {
      const character = document.getElementById('character');
      const items = character.children;
      const mainItem = items[0];
      const itemCopy = mainItem.cloneNode(true);
      itemCopy.querySelector('span').innerHTML = `${name}`;
      new Character(name);
      // this.counter();
      itemCopy.classList.remove('hidden');

      // character.getElementsByClassName('item').innerHTML = 'test InnerHtml';
      character.appendChild(itemCopy);

      // character.getElementsByClassName('character-name').style.color = 'green';
    }
    buttonAdd.addEventListener('click', function () {
      let newName = inputName.value;
      if (newName !== '') {
        createItem(newName);
        // new Character(newName);

        // console.log(this.name);
        inputName.value = '';
      }
    })
  }

  // walkAction(number) {
  //   // let actions = document.getElementsByClassName('actions');
  //   let actionWalk = document.querySelector('button.action-walk');
  //   actionWalk.addEventListener('click', function () {
  //     console.log('(до добавления 20)=', number);
  //     number += 20;
  //     this.walk = number;
  //     console.log('(walk + 20)=', this.walk);
  //     return this.walk
  //   })
  // }
  // eatAction() {
  // }
  // sleepAction() {
  //
  // }
  // playAction() {
  //
  // }

  targetAction() {
    let character = document.getElementById('character');
    character.addEventListener('click', ({target}) => {
      if (target.tagName === 'BUTTON') {
        console.log(target.className);
        if (target.className === 'action-walk') {
          this.walk = this.walk + 20;
          console.log(target.className, '+20 = ', this.walk);
        } else if (target.className === 'action-eat') {
          this.eat = this.eat + 30;
          console.log('eat +30 = ', this.eat)
        } else if (target.className === 'action-sleep') {
          this.sleep = this.sleep + 50;
          console.log('this is the speel +50 = ', this.sleep)
        } else if (target.className === 'action-play') {
          this.play = this.play + 5;
          this.eat = this.eat - 10;
          console.log(this.walk, this.eat, this.sleep, this.play)
        }
      }
      // return this.walk
    })
  }
}

new Character('за функцией');    // без такой записили или  var test = new Character() ничего не работает

})();



















//
// let ted = 'ted';
// var test = new Character(`${ted}`);
// console.log(test.name);


// counter () {
//   setInterval(() => {
//     this.walk  = this.walk - 5;
//     console.log(this.walk);
//     this.eat =   this.eat - 5;
//
//     this.sleep = this.sleep - 5;
//
//     this.play =  this.play - 5;
//   }, 2000);
// }

// createItem(name) {
//   const character = document.getElementById('character');
//   const items = character.children;
//   const mainItem = items[0];
//   const itemCopy = mainItem.cloneNode(true);
//   itemCopy.querySelector('span').innerHTML = `${name}`;
//
//   character.appendChild(itemCopy);
// }

// initCharacter () {
//   const addName = document.getElementById('add-name');
//   let inputName = addName.querySelector('input[type=text]');
//   let buttonAdd = addName.querySelector('button');
//
//   buttonAdd.addEventListener('click', function () {
//     let newName = inputName.value;
//     if (newName !== '') {
//       // this.createItem(newName);
//
//       inputName.value = '';
//     }
//   })
// }