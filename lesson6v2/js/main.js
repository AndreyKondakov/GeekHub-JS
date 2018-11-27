class Character {
  constructor(name) {
    this.name = name;
    this.walk = 99;
    this.eat = 99;
    this.sleep = 99;
    this.play = 99;

    this.initCharacter(name);
    // this.createItem(name);
    // this.counter();
  }
  counter () {
    setInterval(() => {
      this.walk  = this.walk - 5;
      this.eat =   this.eat - 5;
      this.sleep = this.sleep - 5;
      this.play =  this.play - 5;
    }, 2000);
  }

  createItem(name) {
    const character = document.getElementById('character');
    const items = character.children;
    const mainItem = items[0];
    const itemCopy = mainItem.cloneNode(true);
    itemCopy.querySelector('span').innerHTML = `${name}`;


    character.appendChild(itemCopy);
  }


  initCharacter () {
    const addName = document.getElementById('add-name');
    let inputName = addName.querySelector('input[type=text]');
    let buttonAdd = addName.querySelector('button');

    buttonAdd.addEventListener('click', function () {
      let newName = inputName.value;
      if (newName !== '') {
        this.createItem(newName);
        inputName.value = '';
      }
    })
  }



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

let ted = 'ted';

var test = new Character(`${ted}`);
console.log(test.name);
