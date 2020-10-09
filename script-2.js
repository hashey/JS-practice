//////////////////////////////////////////////////
/*
Использование for
Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения (конкатенации) строк в формате ${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.

Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

Используйте вспомогательную переменную result для добавления (конкатенации) строк внутри цикла for
*/

// const getItemsString = function (array) {
//   'use strict';
//   let result = '';
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

//console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

//console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/

//////////////////////////////////////////////////

/*
Подсчет стоимости гравировки украшений
Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

Для решения этой задачи не используйте циклы. Т.е. никаких for, while, do while, for of, for in, forEach или функциональных методов.
*/

// const calculateEngravingPrice = function (message = '', pricePerWord = 0) {
//   let totalPrice = 0;
//   const words = message.split(' ');
//   totalPrice = words.length * pricePerWord;

//   return totalPrice;
// }; // Write code in this line

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// console.log(calculateEngravingPrice('Uno', 100)); // 100

//////////////////////////////////////////////////

/*
Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
*/

// const findLongestWord = function (string = '') {
//   // Write code under this line

//   const words = string.split(' ');

//   // console.log(words[2].length);
//   let longestWord = words[0];

//   for (const word of words) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

//console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'

//////////////////////////////////////////////////

/*
Форматирование строки в зависимости от длинны строки
Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.
*/

// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   let shortString = '';
//   if (string.length > maxLength) {
//     shortString = string.slice(0, maxLength);
//     shortString += '...';
//   } else {
//     shortString = string;
//   }
//   return shortString;
// }

//console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

//console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'

//////////////////////////////////////////////////

/*Функция предикат
Функция предикат возвращает true или false

Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
Функция проверяет ее на содержание слов spam и sale.
Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.
Слова в строке могут быть в произвольном регистре.
*/

// function checkForSpam(str) {
//   'use strict';
//   let result = false;
//   const words = ['spam', 'sale'];
//   // Write code under this line

//   let newstr = str.toLowerCase();
//   console.log(newstr);

//   for (const word of words) {
//     if (newstr.includes(word)) {
//       result = true;
//     }
//   }
//   return result;
// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM]  How to earn fast money?')); // true

//////////////////////////////////////////////////
