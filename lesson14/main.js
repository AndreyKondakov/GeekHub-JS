console.log('a) Написати нескінченний генератор випадкових чисел на основі ітераторів.')
const gRandomNumbers = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        let value = Math.ceil(Math.random() * 100);
        let done = count > 10;
        // let done = count < 0;  go to infinity
        count++;
        return { value, done };
      }
    };
  }
};

for (let random of gRandomNumbers) {
  console.log(random);
}






// function perform() {
//

// }
//
// perform(null, function(value) { // value === null
//   var param = 1;
//   console.log(param); // 1
//   return param;
// })
//   .then(function(param) { // param === 1
//     console.log(++param); // 2
//     return param;
//   })
//   .then(function(param) { // param === 2
//     console.log(++param); // 3
//     return param;
// });

