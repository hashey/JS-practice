/*
Задача 6 - 1
map
Получи массив имен всех пользователей (свойство name) используя деструктурирующее присваивание для параметра функции ({name}) без пробелов и переносов на новую строку.

Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
    Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.
*/
// Write code under this line

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// const getUserNames = array => array.map(({ name }) => name);

// console.log(getUserNames(users));

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Задача 6-2
// filter
// Получи массив объектов пользователей, отобранный по цвету глаз (свойство eyeColor),
// используя деструктурирующее присваивание для параметра функции({ eyeColor }) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
//   Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUsersWithEyeColor = (array, color) =>
//   array.filter(({ eyeColor }) => eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue'));

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Задача 6-3
// filter, map
// Получи массив имен пользователей (значение свойства name) по полу (значение свойства gender).

// Используй деструктурирующее присваивание для параметра функции ({name}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// const getUsersWithGender = (array, isGender) =>
//   array
//     .filter(({ gender }) => gender === isGender)

//     .map(({ name }) => name);

// console.log(getUsersWithGender(users, 'female'));

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Задача 6-4
// filter и оператор !
// Получи массив только неактивных пользователей (отфильтруй по значению свойства isActive)

// Используй деструктурирующее присваивание для параметра функции ({isActive}) без пробелов и переносов на новую строку.

// Используй оператор !.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// const getInactiveUsers = array => array.filter(({ isActive }) => !isActive);
// console.log(getInactiveUsers(users));

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Задача 6-5
// find
// Получи объект пользователя (не массив) по уникальному значению свойства email.

// Используй деструктурирующее присваивание для параметра функции ({email}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
//   Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// const getUserWithEmail = (array, mail) =>
//   array.find(({ email }) => email === mail);

// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Задача 6-6
// filter, map и создание анонимных объектов
// Получи массив из объектов, которые состоят только из свойств name и email тех пользователей,
// которые попадают в возрастную категорию от min до max лет(значение свойства age).

// Сравнение, пример

// const x = 13;

// // num больше 10 ?
// const larger = num > 10; // true

// // num меньше 100 ?
// const smaller = 100 > num; // true

// // num находитя между 10 и 100 ?
// const between = smaller && larger; // true
// Создание анонимных объектов:

// const arr = Array(3)
//   .fill('')
//   .map((e,i) => ({['index']: i }));
// /* [ { index: 0 }, { index: 1 }, { index: 2 } ] */
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
//   Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// Write code under this line
// const getUsersWithAge = (array, min, max) =>
//   array

//     .filter(({ age }) => min <= age && age <= max)

//     .map(({ name, email }) => ({ ['name']: name, ['email']: email }));

// console.log(getUsersWithAge(users, 20, 30));
/* [
    { name: 'Ross Vazquez', email: 'rossvazquez@xinware.com' },
    { name: 'Elma Head', email: 'elmahead@omatom.com' },
    { name: 'Carey Barr', email: 'careybarr@nurali.com' }
] */

// console.log(getUsersWithAge(users, 30, 40));
/* [
    { name: 'Moore Hensley', email: 'moorehensley@indexia.com' },
    { name: 'Sharlene Bush', email: 'sharlenebush@tubesys.com' },
    { name: 'Blackburn Dotson', email: 'blackburndotson@furnigeer.com' },
    { name: 'Sheree Anthony', email: 'shereeanthony@kog.com' }
] */

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Задача 6-7
// reduce
// Получи общую сумму баланса (сумму значений свойства balance) всех пользователей.

// Используй деструктурирующее присваивание для параметра функции {balance} без пробелов и переносов на новую строку

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
// Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// Write code under this line
// const calculateTotalBalance = array =>
//   array.reduce((chlen, { balance }) => chlen + balance, 0);

// console.log(calculateTotalBalance(users));
// 20916

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Задача 6-8
// filter, includes и map
// Получи массив имен всех пользователей у которых есть друг с заданным именем.

// Используй деструктурирующее присваивание для параметра функции {friends}и ({name}) без пробелов и переносов на новую строку

// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
// Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// Write code under this line

// const getUsersWithFriend = (array, friendName) =>
// array
// .filter(({ friends }) => friends.includes(friendName))

// .map(({ name }) => name);

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Задача 6-9
// sort и map
// Получи массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// Избегаем мутации исходного массива:
// т.к.метод sort изменяет(мутирует) исходный массив, то следует сделать копию массива и сортировать уже копию, а не исходный массив.

// Копирование массива:

// const arr = [1, 3, 5];

// // 1
// const first = [...arr];

// // 2
// const second = arr.slice();

// // 3
// const third = arr.concat();
// Используй деструктурирующее присваивание для параметра функции ({name})` без пробелов и переносов на новую строку

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив.
// Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

// Write code under this line
// const getNamesSortedByFriendsCount = array =>
//   array
//     .slice()
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// Задача 6-10
// reduce, filter, sort
// Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// Слияние массивов:

// const odd = [1, 3, 5];
// const even = [2, 4, 6];

// // 1
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]

// // 2
// odd.concat(even)
// //  [1, 3, 5, 2, 4, 6]
// Используй только перебирающие методы массива которые не изменяют(не мутируют) исходный массив.
// Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

// Write code under this line
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function onlyUnique(value, index, self) {
//   return self.indexOf(value) === index;
// }

// // usage example:
// var a = ['a', 1, 'a', 2, '1'];
// var unique = a.filter(onlyUnique);

// console.log(unique); // ['a', 1, 2, '1']
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const getSortedUniqueSkills = array =>
  array
    .reduce((allSkills, step = []) => {
      // allSkills.push(...step.skills);

      return [...allSkills, ...step.skills];

      // return allSkills.concat(step.skills);
    }, [])
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
