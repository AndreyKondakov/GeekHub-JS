(function () {

class Character {
  constructor() {
    // this.name = name;
    this.walk = 20;
    this.eat = 20;
    this.sleep = 20;
    this.play = 20;

    this.initCharacter();
    // this.createItem(name);
    // this.counter();

    // делаем counter в конструкторе , что бы время было свое у каждого нового обьекта

    this.counter = setInterval(() => {
      this.walk  = this.walk - 5;
      console.log('test walk', this.walk);
      
      this.eat =   this.eat - 5;
      console.log( this.eat);

      this.sleep = this.sleep - 5;
      console.log( this.sleep);

      this.play =  this.play - 5;
      console.log( this.play);

      if ((this.walk && this.eat && this.sleep && this.play) <= 0 ) {
        clearTimeout(this.counter);
      }

    }, 2000);
  }
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
      new Character();
      // this.counter();


      character.appendChild(itemCopy);
    }
    buttonAdd.addEventListener('click', function () {
      let newName = inputName.value;
      if (newName !== '') {
        createItem(newName);

        inputName.value = '';
      }
    })
  }

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


  // walk() {
  //
  // }
  // eat() {
  //
  // }
  // sleep() {
  //
  // }
  // play() {
  //
  // }
}
//
// let ted = 'ted';
//
// var test = new Character(`${ted}`);
// console.log(test.name);

new Character();



})();
