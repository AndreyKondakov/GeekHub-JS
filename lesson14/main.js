console.log('a) Написати нескінченний генератор випадкових чисел на основі ітераторів.');
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


console.log('b) Написати функціонал для перебору через for .. of об\'єкта з декількома рівнями вкладеності.');

Object.prototype[Symbol.iterator] = function() {
  var keys = Object.keys(this)[Symbol.iterator]();
  var obj = this;
  var output;
  return {next:function() {
      if (!(output = keys.next()).done)
        output.value = [output.value, obj[output.value]];
      return output;
    }};
};

let myObj = {
  'первая вложеность1': '1',
  test2: '2',
  'первая вложеность3': '3',
  'первая вложеность obj': {
    'вторая вложеность4': '11',
    test5: '22',
    'вторая вложеность6': '33',
  }
};

for (const [k, v] of myObj) {
  console.log(`${k} : ${v}`);
  if ((typeof  v) === 'object') {
    for (const [n, t] of v) {
      console.log(`${n} : ${t}`);
    }
  }
  // else if ((typeof k) === 'object') {
  //   for (const [n, t] of k) {
  //     console.log(`${n} : ${t}`);
  //   }
  // }
}






// let myObj2 = {
//   'первая вложеность1': '1',
//   'первая вложеность2': '2',
//   'первая вложеность3': '3',
//   'первая вложеность obj': {
//     'вторая вложеность4': '11',
//     'вторая вложеность5': '22',
//     'вторая вложеность6': '33',
//   },
//   [Symbol.iterator]: function* () {
//     for (const i of Object.keys(this)) {
//       yield [i, this[i]];
//     }
//   }
// };
//
// for (const [k, v] of myObj2) {
//   console.log(`${k} : ${v}`);
//
// }