class Character {
  constructor(name) {
    this.name = name
    this.walk = 99;
    this.eat = 99;
    this.sleep = 99;
    this.play = 99;

    // this.life = 99;
    // this.saturation = 99;
    // this.strength = 99;
    // this.happiness = 99;

    this.counter();
  }
  // set Interval(value) {
  //   var timerId = setInterval(function() {
  //     console.log('test timer');
  //     this.walk -= 2;
  //     this.eat -= 2;
  //     this.sleep -= 2;
  //     this.play -= 2;
  //   }, 2000);
  // }

  counter () {
    setInterval(() => {
      // this.countProperties();

      this.walk  = this.walk - 5




    }, 2000); // Пашет
  }

  // countProperties () {
  //   this.walk  = this.walk - 5
  //   // this.eat =
  //   // this.sleep =
  //   // this.play =
  // }



  walk() {

  }
  eat() {

  }
  sleep() {

  }
  play() {

  }
}

var test = new Character(name)

console.log(test.walk);



//
// var car = new Character(name)
// console.log('test car', car.walk);





// (function () {
//
//
//   var timerId = setInterval(function() {
//     console.log('test timer');
//     // for (let i = 0; i<5; i++) {
//
//     // var car = new Character(tet)
//     //   console.log('test car', car.walk);
//
//     // }
//   }, 2000);
//
// })();
//



















// var tess  = prompt('');
// var test = new Character('' + tess)

// console.log(test);

// var timerId = setInterval(function() {
//   console.log('test timer');
// }, 2000);

//
// (function  () {
//
//
//   var timerId = setInterval(function() {
//     console.log('test timer');
//   }, 2000);
//
//
// })();