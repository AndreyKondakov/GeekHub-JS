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
console.log('map:');
let newArr = {};
cat.map = function () {
  for (let i = 0; i < count; i++) {
    newArr[i] = cat[i].length
  }
};

cat.map();
console.log(newArr);


// sort
// console.log('sort:');

