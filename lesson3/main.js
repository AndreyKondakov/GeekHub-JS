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






function dragonCount(k, l, m, n, d) {
  //TODO
  if (1 <= k && 1 <= d <= 105) {
    console.log('dragonCountTests: true')
  } else {
    console.log('false')
  }
  var arr = [k, l, m, n];
  var sum = [];
  var allDragon = d;
  var dragonsCount = d;
  function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
      action(array[i]);
      // dragonsCount = d
    }
  }

  forEach(arr, function(number) {
    // dragonsCount = d
    for (var i =0; dragonsCount>1; i++) {
      // if ((dragonsCount ^ 0)=== false) {
      sum.push(dragonsCount/number);
      dragonsCount = dragonsCount/number;
      console.log(dragonsCount)
      // }
    }
    // console.log(sum)


    // console.log(sum);
    return sum

  });

  // console.log(arguments)
  // console.log(sum)
  return sum

}




function dragonCount(k, l, d) {
  //TODO
  if (1 <= k && 1 <= d <= 105) {
    console.log('dragonCountTests: true')
  } else {
    console.log('false')
  }
  var arr = [k, l];
  var sum = [];
  var allDragon = d;
  var dragonsCount = d;
  function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
      action(array[i]);
      // dragonsCount = d
    }
  }
  forEach(arr, function(number) {
    // dragonsCount = d
    for (var i =1; i<10; i++) {
      var testik = dragonsCount
      sum.push(testik);
      // if ((dragonsCount ^ 0)=== true) {
      dragonsCount = (dragonsCount / number)
      // console.log(dragonsCount)
      // console.log(sum)
      // } else {
      //   console.log('??')
      // }

    }
    // console.log(sum);
    return sum
  });
  // console.log(arguments)
  // console.log(sum)
  return sum

}



