let arrRocks = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
let newTest = [1, 3, 5, 2, 8, 4, 5, 1];

function rock(arr) {
  var sum = 0;
  var a = 0;
  var count = 0;
  var c = arr[arr.length - 1];

  let result = arr.reduce(function (result, b, index, arr) {
    if (a > b) {
      sum += a - b;
      return sum
    } else {
      a = b;
      count = index
    }
  }, 0);

  for (var i = arr.length - 1; i > count; i--) {
    if (arr[i] > c) {
      c = arr[i]
    }
    sum -= arr[count] - c;
  }
  return sum

}

console.log(rock(arrRocks));
console.log(rock(newTest));


