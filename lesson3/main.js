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

function registration(names) {
  //TODO
  if ((userNames.indexOf( names ) != -1 ) == false) {
    userNames.push(names);
    return "OK"
  } else {
    var i = 0;
    do {
      i++;
      names + i;
    } while ((userNames.indexOf( names ) != -1 ) == false) ;
    userNames.push(names + i)
    return userNames
  }

}
var userNames = [];
console.log(userNames);

registration('tess');
registration('tess');




/////////////





function registration(names) {
  //TODO

  var userNames = [];

  names.forEach(function (entry) {
    if ((userNames.indexOf( names ) != -1 ) == false) {
      userNames.push('OK');
      // return "OK"
    } else {
      var i = 0;
      do {
        i++;
        names + i;
      } while ((userNames.indexOf( names ) != -1 ) == false);
      userNames.push(names + i);
      // return userNames
    }
  });


  return userNames






}









