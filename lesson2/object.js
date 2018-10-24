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
//
let manyNumbers = {  0: 992,  1: 43,  2: 23,  3: 4452,  4: 9,  5: 92  };
console.log(manyNumbers);

for(var valueCaunt in manyNumbers) {  }
valueCaunt++;
console.log(valueCaunt);

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



// toString   !!
console.log('toString:');
let bestBrand = {
  'phone': 'samsung',
  'car': 'bmw',
  'laptop': 'asus',
  'tablet': 'ipad'
};

var brandStr = '';

for(var i in bestBrand) {
  // console.log(i); // печатает и bar и moo
  brandStr += i + ': ' + bestBrand[i] + '; '
}
console.log('brandStr:', brandStr);
console.log(typeof(brandStr));
console.log('bestBrand', bestBrand);

console.log('#2:');

let bestBrandStr = Object.keys(bestBrand);
console.log(bestBrandStr);
let newStr = bestBrandStr.join('; ');
console.log(newStr);


console.log('#3:');
console.log('bestBrand', bestBrand);


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

let likeArray = {};
likeArray.setSomeArguments = function () {
  for (let i=0; i < arguments.length; i++) {
    likeArray[i] = arguments[i]
  }
};

likeArray.setSomeArguments('nwer', 'wert', 'ewrg');
console.log(likeArray);      //  {0: "nwer", 1: "wert", 2: "ewrg", setSomeArguments: ƒ}

likeArray.setSomeArguments('444fghjf4');
console.log(likeArray);     // {0: "234", 1: "444цукц4  ", 2: "ewrg", setSomeArguments: ƒ}  ????????








