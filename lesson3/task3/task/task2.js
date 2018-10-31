'use strict';

/**
 * Факториал
 * https://en.wikipedia.org/wiki/Factorial
 *
 * Найти факториал числа n.
 * Факториал от 0 будет 1. Факториал отрицательного числа не существует(NaN).
 * Используйте рекурсию для решения.
 */

var factorialTests = [
    {
        parameters: [3],
        expectedResult: 6
    },
    {
        parameters: [7],
        expectedResult: 5040
    },
    {
        parameters: [14],
        expectedResult: 87178291200
    },
    {
        parameters: [0],
        expectedResult: 1
    },
    {
        parameters: [-3],
        expectedResult: NaN
    }
];


function factorial(n) {
    //TODO
  if (n == 0) {
      return 1
  } else if (n < 0) {
      return NaN
  } else {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
}

tasks.push({
    title: "Факториал",
    solution: factorial,
    tests: factorialTests
});