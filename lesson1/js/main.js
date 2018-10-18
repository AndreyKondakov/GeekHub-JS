console.log('Lesson 1');

var arr = [1, 2, 3, 'test'];
console.log(arr);

// pop
console.log('pop:');
arr.pop();
console.log(arr);

// push
console.log('push:');
arr.push('Some Text', [], 4);
console.log(arr);

// concat
console.log('concat:');
var copyArr = arr.concat("add new text", 5);
console.log(copyArr);

// indexOf
console.log('indexOf:');
console.log(arr.indexOf(2));
console.log(copyArr.indexOf('Some Text'));

// join
console.log('join:');
console.log(arr);
var testingJoin = arr.join('; ');
console.log(testingJoin);

// forEach !
console.log('forEach:');
copyArr.forEach(function (allElement) { console.log(allElement); });

console.log('forEach #2:');
var brand = ['Samsung', 'Asus', 'Lenovo'];
brand.forEach(function (allBrand) {
  console.log('This is a good brand: ' + allBrand)
});


// filter   !?
console.log('filter:');
var moreNum = copyArr.filter(function (num) { return num > 2 });
// var twoWord = copyArr.filter(function (str) { return str < copyArr.length });
console.log(moreNum);
// console.log(twoWord)

// find     !
console.log('find:');


var indexEl = 0;
function findVal(arr, value) {
  indexEl = arr.indexOf(value);
  return indexEl
}
findVal(copyArr, "Some Text");
console.log(indexEl);

console.log('#2');
var simpleNum = [1,2,3,4,5,6,7,9,12,13,14,155,55,555];

var resultOne = simpleNum.find(function firstOne(element, index, array) {
  return element > 6
});
console.log(resultOne);

/////////////////////////////


// map
console.log('map:');
var car = ['audi', 'bmw', 'lexus', 'toyota'];
var carLength = car.map(function (name){
  return name.length
});
console.log(car);
console.log(carLength);
// #2
var carUpperCase = car.map(function (name) {
  return name.toUpperCase()
});
console.log(carUpperCase);
var carVehicle = car.map(function (name) {
  return 'Vehicle: ' + name
});
console.log(carVehicle);



// slice
console.log('slice:');
var partCars = carVehicle.slice(1, 2);
console.log(partCars);

// splice
console.log('splice:');
var carRally = car.splice(1, 2, "subaru", "mitsubishi");
console.log(car);
console.log(carRally);

// shift
console.log('shift:');
var someCar = car.shift();
console.log(someCar);
console.log(car);

// unshift
console.log('unshift:');
car.unshift('volvo', 'porsche');
console.log(car);

//////////////////////////////////  other


// sort
console.log('sort:');

var numbers = [3, 4, 11, 1, 394, 88, 1];
console.log(numbers);
numbers.sort();
console.log(numbers);

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
numbers.sort(compareNumeric);
console.log(numbers);

// reverse
console.log("reverse:");
numbers.reverse();
console.log(numbers);
