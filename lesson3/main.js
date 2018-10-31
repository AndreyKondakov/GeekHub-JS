// first task  x.sum(y) === x + y
console.log('New method for all numbers:');

Number.prototype.num = function (b) {
  return console.log(this + b)
};

5..num(5);
10..num(7);















// Training
console.log('Training:');
// sum all numbers: example 4 = 4 + 3 + 2 + 1 (10)
// #1 using cycle
function sumTo(n) {
  var result = n;
  for (var i = 1; i < n; i++) {
    result += n - i
  }
  return result
}
console.log(sumTo(4));

// #2 using recursion
function sumToRecursion(n) {
  return n + sumTo(n-1)
}
console.log(sumToRecursion(100));

// #3 using arithmetic progression.

function mathProgress(n) {
  return n*(n+1)/2;
}
console.log(mathProgress(4));

//

// task #4  ???

// function stringDot(word) {
//   //TODO
//   var str = word.toLowerCase()
//   var finalStr = '';
//   for (var i=0; i<str.length; i++) {
//     word[i].indexOf('a', 'o', 'y', 'e', 'u', 'i') ? finalStr += '.' + word[i] : false
//   }
//   return finalStr
// }
//
//
// function stringDot(word) {
//   //TODO
//   var str = word.toLowerCase()
//   var finalStr = '';
//   for (var i=0; i<str.length; i++) {
//     word[i].replace(/[^b-z]/g, "")
//   }
//   return finalStr
//
// }
//
//
// var str = "hieeelalaoooasdfa"; //строка
// var vowels = "aoyeui"; //гласные
// var pos, res = "";
// var i = 0;
// while (i < str.length) {
//   res += str[i];
//   if(vowels.indexOf(str[i]) > -1) {
//     i += 3;
//   } else {
//     i += 2;
//   }
// }
// console.log(res);