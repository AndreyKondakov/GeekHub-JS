'use strict';

/**
 * Почти счастливое число
 *
 * Петя любит счастливые числа.
 * Всем известно, что счастливыми являются положительные целые числа,
 * в десятичной записи которых содержатся только счастливые цифры 4 и 7.
 * Например, числа 47, 744, 4 являются счастливыми, а 5, 17, 467 — не являются.
 *
 * К сожалению, не все числа счастливые. Петя называет число почти счастливым,
 * если количество счастливых цифр в нем — счастливое число. Ему интересно, является ли число n почти счастливым.
 *
 * Входные данные
 * В единственной строке задано целое число n (1 ≤ n.length ≤ 1018).
 *
 * Выходные данные
 * true, если число n — почти счастливое, и false в противном случае.
 *
 * Note: обратите внимание на что такое "число" и "цифра"
 */

var luckyNumberTests = [
    {
        parameters: ["40047"],
        expectedResult: false
    },
    {
        parameters: ["7747774"],
        expectedResult: true
    },
    {
        parameters: ["1000000000000000000"],
        expectedResult: false
    },
    {
            parameters: ["44444444447777777777474744747474747474747474"],
        expectedResult: true
    },
    {
        parameters: ["384782347434328472387485847983279483278474588234812894723829104723842024247294723847234237823823"],
        expectedResult: false
    },
    {
        parameters: ["47"],
        expectedResult: false
    }
];
/**
 Примечание
 В первом примере количество счастливых цифр числа равно 3 (первая и последние две цифры), поэтому ответ false.

 Во втором примере все цифры числа — счастливые, а их общее количество — 7, поэтому ответ true.
 */


function luckyNumber(number) {
    //TODO
    var testInteger4 = number / 4;
    var testInteger7 = number / 7;
    var str = '' + number;
    var newstr = str.replace(/[^'4', '7']/g, "");
  if (7 > str.length) {
      return false
    } else if ((testInteger7 ^ 0) === true ) {
      return true
    } else if ((testInteger4 ^ 0) === true ) {
      return true
    } else if (newstr == number) {
      return true
    } else {
      return false
    }
}


tasks.push({
    title: "Почти счастливое число",
    solution: luckyNumber,
    tests: luckyNumberTests
});
