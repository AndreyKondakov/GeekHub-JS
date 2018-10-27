let cat = {
  0: 'color: "red"',
  1: "sex: 'male'",
  2: "name: 'Redbull'"
};
let count = 3;
console.log(cat);

// push
console.log('push:');
cat[3] = 'maxSpeed: "14 km/h"';
console.log(cat);

// #2
cat.push = function (value) {
  return cat[count++] = value
};

cat.push('push some info');
console.log(cat);
cat.push('push more info');

console.log(cat);
console.log(cat.push.toString());

// pop
console.log('pop:');
cat.pop = function () {
  return delete cat[--count]
};
cat.pop();
console.log(cat);

// find:
console.log('find:');
cat.find = function (value) {
  return cat[value]
};
console.log(cat.find(0));

// map
console.log('map: (cat => length)');
let newArr = {};
cat.map = function () {
  for (let i = 0; i < count; i++) {
    newArr[i] = cat[i].length
  }
};
cat.map();
console.log(newArr);

// sort    !?
console.log('sort:');
let manyNumbers = {  0: 992,  1: 43,  2: 23,  3: 4452,  4: 9,  5: 92  };
console.log(manyNumbers);

for(var valueCaunt in manyNumbers) { valueCaunt++; }

let saveNumbers = [];
manyNumbers.sort = function () {
  for (let i = 0; i < valueCaunt; i++) {
    saveNumbers.push(manyNumbers[i])
  }
};
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
manyNumbers.sort(compareNumeric);
console.log(saveNumbers);
saveNumbers.sort(compareNumeric);
console.log(saveNumbers);


// toString
console.log('toString:');
let bestBrand = {
  'phone': 'samsung',
  'car': 'bmw',
  'laptop': 'asus',
  'tablet': 'ipad'
};

function makeStr(obj) {
  var brandStr = '';
  for(var i in obj) {
    brandStr += i + ': ' + bestBrand[i] + '; '
  }
  return brandStr
}
console.log(makeStr(bestBrand));

console.log('#2:');
let bestBrandStr = Object.keys(bestBrand);
console.log(bestBrandStr);
let newStr = bestBrandStr.join('; ');
console.log(newStr);

// console.log('#3:');
// console.log('bestBrand', bestBrand);

console.log('#3:');
let someNum = {  0: 9392,  1: 443,  2: 123,  3: 40002,  4: 9,  5: 22 };

function objToString (obj) {
  var str = '';
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str += p + ': ' + obj[p] + '; ';
    }
  }
  return str;
}
let answerObjToStr = objToString(someNum);
console.log(answerObjToStr);


// getter
console.log('Getter:');

let car = {
  'BMW': 'M3',
  'Mitsubishi': 'Lancer EVO',
  'Subaru': 'Impreza WRX'

};

car.getCountCars = function getCountCars() {
  let counter = 0;
  for (let key in car) {
    counter++
  }
  return counter
};

console.log(car.getCountCars());

car['Mclaren'] = 'P1';
car['Porshe'] = '911 GT3 RS';

console.log(car);
console.log(car.getCountCars());


// Task with *

let likeArray = { count : 0 };
likeArray.setSomeArguments = function () {
  for (let i=0; i < arguments.length; i++) {
    likeArray[likeArray.count++] = arguments[i]
  }
};

likeArray.setSomeArguments('nwer', 'wert', 'ewrg');
console.log(likeArray);

likeArray.setSomeArguments('444fghjf4', 'sdfs45', 'SOme Test ');
console.log(likeArray);
