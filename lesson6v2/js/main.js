class Character {
  constructor(name) {
    this.name = name;
    this.walk = 100;
    this.eat = 100;
    this.sleep = 100;
    this.play = 100;
    const item = this.createItem();

    this.counter = setInterval(() => {
      this.walk = this.walk - 5;
      let life = item.querySelector('.progress-life span');
      life.style.width = this.walk + '%';
      this.eat = this.eat - 6;
      let saturation = item.querySelector('.progress-saturation span');
      saturation.style.width = this.eat + '%';
      this.sleep = this.sleep - 7;
      let strength = item.querySelector('.progress-strength span');
      strength.style.width = this.sleep + '%';
      this.play = this.play - 10;
      let happiness = item.querySelector('.progress-happiness span');
      happiness.style.width = this.play + '%';
      // if ((this.walk && this.eat && this.sleep && this.play) <= 0 ) {   // if one of this value = 0
      if ((this.walk <= 0) && (this.eat <= 0) && (this.sleep <= 0) && (this.play <= 0)) {  // before all value = 0
        clearTimeout(this.counter);
      }
      console.log(this.name);
    }, 2000);
  }

  targetAction(item) {
    item.addEventListener('click', ({target}) => {
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
          this.play = this.play + 15;
          this.sleep = this.sleep - 10;
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
    itemCopy.classList.remove('hidden');
    character.appendChild(itemCopy);
    this.targetAction(itemCopy);
    return itemCopy
  };
}

const addName = document.getElementById('add-name');
let inputName = addName.querySelector('input[type=text]');
let buttonAdd = addName.querySelector('button');

buttonAdd.addEventListener('click', function () {
  let newName = inputName.value;
  if (newName !== '') {
    let person = new Character(newName);
    console.log(this.name);
    inputName.value = '';
  }
});