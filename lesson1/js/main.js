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

// filter   !?
console.log('filter:');
var moreNum = copyArr.filter(function (num) { return num > 2 });
// var twoWord = copyArr.filter(function (str) { return str < copyArr.length });
console.log(moreNum);
// console.log(twoWord)
