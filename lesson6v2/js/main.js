// (function () {
class Character {
  constructor(name) {
    // this.createItem;
    this.name = name;
    this.walk = 100;
    this.eat = 100;
    this.sleep = 100;
    this.play = 100;

    this.createItem();

    // делаю counter в конструкторе , что бы время было свое у каждого нового обьекта
    this.counter = setInterval(() => {

      this.walk  = this.walk - 5;
      console.log('test walk 1', this.walk);
      let life = document.querySelector('.progress-life span');
      life.style.width = this.walk + '%';

      this.eat =   this.eat - 6;
      let saturation = document.querySelector('.progress-saturation span');
      saturation.style.width = this.eat + '%';

      this.sleep = this.sleep - 7;
      let strength = document.querySelector('.progress-strength span');
      strength.style.width = this.sleep + '%';

      this.play =  this.play - 10;
      let happiness = document.querySelector('.progress-happiness span');
      happiness.style.width = this.play + '%';

      // if ((this.walk && this.eat && this.sleep && this.play) <= 0 ) {   // if one of this value = 0
      if ((this.walk <= 0) && (this.eat <= 0) && (this.sleep <= 0) && (this.play <= 0)) {  // before all value = 0
        clearTimeout(this.counter);
      }
      console.log(this.name);
    }, 2000);
  }

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
          console.log('this is the sleep +50 = ', this.sleep)
        } else if (target.className === 'action-play') {
          this.play = this.play + 5;
          this.eat = this.eat - 10;
          console.log(this.walk, this.eat, this.sleep, this.play)
        }
      }
    })
  }

  createItem() {
    const character = document.getElementById('character');
    const items = character.children;
    const mainItem = items[0];
    const itemCopy = mainItem.cloneNode(true);
    itemCopy.querySelector('span').innerHTML = `${this.name}`;
    // this.counter();
    itemCopy.classList.remove('hidden');
    character.appendChild(itemCopy);
    this.targetAction();
  };
}


const addName = document.getElementById('add-name');
let inputName = addName.querySelector('input[type=text]');
let buttonAdd = addName.querySelector('button');

var countCharacter = 0;

buttonAdd.addEventListener('click', function () {
  let newName = inputName.value;
  if (newName !== '') {
    // eval('var z'+countCharacter+' = new Character(newName);');
    let person = new Character(newName);
    // createItem(newName);
    console.log(this.name);
    inputName.value = '';
  }


  // function createItem(name)  {
  //   const character = document.getElementById('character');
  //   const items = character.children;
  //   const mainItem = items[0];
  //   const itemCopy = mainItem.cloneNode(true);
  //   itemCopy.querySelector('span').innerHTML = `${name}`;
  //   // new Character(this.name);
  //   // this.counter();
  //   itemCopy.classList.remove('hidden');
  //   character.appendChild(itemCopy);
  //   targetAction();
  // };
  // setInterval(() => {
  //
  //   this.walk  = this.walk - 5;
  //   console.log('test walk 1', this.walk);
  //   let life = document.querySelector('.progress-life span');
  //   life.style.width = this.walk + '%';
  //
  //   this.eat =   this.eat - 6;
  //   let saturation = document.querySelector('.progress-saturation span');
  //   saturation.style.width = this.eat + '%';
  //
  //   this.sleep = this.sleep - 7;
  //   let strength = document.querySelector('.progress-strength span');
  //   strength.style.width = this.sleep + '%';
  //
  //   this.play =  this.play - 10;
  //   let happiness = document.querySelector('.progress-happiness span');
  //   happiness.style.width = this.play + '%';
  //
  //   // if ((this.walk && this.eat && this.sleep && this.play) <= 0 ) {   // if one of this value = 0
  //   if ((this.walk <= 0) && (this.eat <= 0) && (this.sleep <= 0) && (this.play <= 0)) {  // before all value = 0
  //     clearTimeout(this.counter);
  //   }
  //   console.log(this.name);
  // }, 2000);

  // function targetAction() {
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
  //         console.log('this is the sleep +50 = ', this.sleep)
  //       } else if (target.className === 'action-play') {
  //         this.play = this.play + 5;
  //         this.eat = this.eat - 10;
  //         console.log(this.walk, this.eat, this.sleep, this.play)
  //       }
  //     }
  //   })
  // }
});
