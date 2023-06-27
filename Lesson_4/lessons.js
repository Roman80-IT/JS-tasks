//! ============================================================================
//* Kahoot!
//! ============================================================================

//? Ф-ція зворотного виклику (callback, колбек)  -   ф-ція, яка передається в іншу ф-цію як аргумент    -    а та, вже викликає передану ф-цію
//      що викликається в тілі іншої ф-ції - будь-яка ф-ція може викликатися в тілі іншої, але вона не стає колбеком через це - це просто виклик в будь-якомусь місці коду
//      ф-ція, що повертається під час виклику іншої ф-ції  - це просто якась операція (напр. повернути цифру)

//? Ф-ція вищого порядку (higher order function)  -  ф-ція, яка приймає іншу ф-цію як параметр  (очікує в аргументі (середині себе) іншу ф-цію) (приймає у якості параметрів інші ф-ції)  -  або повертає ф-цію у якості результату

// function foo(callback) {
//   callback(10);
// }
// function logger(value) {
//   console.log(value + value); //! якщо немає 'return' - повертається 'undefined'
//   return value;
// }
// foo(logger(10)); //! викликаємо результат, а не саму ф-цію
//! console.log(foo(logger(7)));

//? Стрілочна ф-ції створюються як функціональний вираз   (і якщо функція - не анонімна, її необхідно присвоювати змінній)   -   без function
//*     ресурсно легша версія ф-ції
//*        - використовується як Колбек - функція
//*        - маленька, легка  ф-ція

// параметри перераховуються через кому в круглих дужках '()':
//?        const add = (a, b, c) => {
//?          return a + b + c;
//?        };

// Скорочений запис:
//?       const add = (a, b, c) => a + b + c;      // неявне повернення (implicit return)
// add(1, 2, 3); //         щоб вивести це на консоль треба застосувати константу: const result = add(1, 2, 3);     console.log(result);
// console.log(add()); //   NaN
// console.log(add(1, 2, 3));

// Якщо параметр один, його можна оголошувати без круглих дужок.
//?       const add = a => {
//?         return a + 5;                          // явне повернення (explicit return)
//?       };

// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.
//?       const greet = () => {
//?         console.log("Привіт!");
//?       };

//? У стрілочних функцій немає локальної змінної 'arguments' та 'this'

//* Локальна змінна в JS - це змінна, яка оголошується всередині блока коду, такого як функція або блок в {}.
//*    Ця змінна доступна тільки всередині області дії, в якій вона була оголошена.
//* Такі змінні використовують для збереження тимчасових значень, обчислень та проміжних результатів всередині обмеженої області коду.
//*    Локальні змінні недоступні ззовні своєї області дії і не конфліктують з ін. змінними, оголошеними у інших областях дії.
//          function myFunction() {
//            var localVar = 10; // Оголошення локальної змінної
//              console.log(localVar); // Виведе: 10
//          }
//          myFunction();
//          console.log(localVar); // Помилка: localVar недоступна зовні функції

//? Що поверне "Mango"?
//!--------------------------------------------
//! const foo = () => {
//!   "Mango";           //    'undefined' (немає return)
//! };
//!--------------------------------------------
//! const foo = (str) => {
//!   str = "Mango"; //        'undefined' (немає return), перевизначення параметра 'str'
//! };
//!--------------------------------------------
//? const foo = () => "Mango";

//! ============================================================================
//* lesson-07
//! ============================================================================

// function foo(callback, someFn) {       //         це ф-ція вищого порядку
//   console.log(callback);
//   console.log("тут була викликана функція foo");
//   callback();
//   someFn();
// }

// function boo() {
//   console.log("Всім привіт! Я колбек функція! Передаюсь за посиланням!");
// }

// function doo() {
//   console.log("виклик ф-ції doo");
// }

// foo(boo, doo);
//! foo(boo());   - не можна робити виклик ф-ції, яку ви передаєте в якості колбеку!
//! коли викликаємо ф-цію вона відпрацьовує одразу - виведе в консоль текст - поверне 'undefined', або навіть чкась цифра - помилка при виклику ф-ції, тому очікується саме ф-ція

//! ========================

// // func declr
// function add(a, b) {
//   return a + b;
// }

// // func expr
// const add = function (a, b) {
//   return a + b;
// };

//arrow func
// const add = (a, b) => a + b;
// const add = (a, b) => {
//   //code
//   return a + b;
// };

//! ========================

// const cars = ["BMW", "Audi", "Mersedes", "Infinity"];

// for (let i = 0; i < cars.length; i += 1) {
//   console.log(`${i + 1}: ${cars[i]}`);
// }

// cars.forEach((car, i, cars) => {
//   console.log(`${i + 1}: ${car}`);
// });

// const callback = (car, i, cars) => {
//   console.log(`${i + 1}: ${car}`);
// };

// cars.forEach(callback);

//! ========================

//* Example 1 - Коллбек функції

// Напишіть наступні функції:

//? createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.

//? logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

//? logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

//? Виконайте рефакторинг коду за допомогою стрілочних функцій.

/*
{
    name: string,
    amount: number,
    price: number
}
*/

// function createProduct(obj, callback) {
//   const newObj = { ...obj, id: Date.now() };
//   callback(newObj);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice({ amount, price }) {
//   console.log(amount * price);
// }

// const logProduct = (product) => console.log(product);

// const logTotalPrice = ({ amount, price }) => console.log(amount * price);

// const product = {
//   name: "Cheese",
//   price: 20,
//   amount: 100,
// };

// createProduct(product, logProduct);
// createProduct(product, logTotalPrice);

//! ========================

//* Example 3 - Коллбек функції

//? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

//? Виконайте рефакторинг коду за допомогою стрілочних функцій.

// function each(array, callback) {
//   /*
//     1. створюємо пустий масив
//     2. перебираємо всі елементи масиву за допомогою циклу
//         2.1. створюємо новий елемент масиву викликаючи колбек ф-цію на поточному елементі масиву
//         2.2. додати цей елемент в новий масив
//     3. повернути новий масив
//     */
//   const newArray = [];
//   for (const el of array) {
//     const newEl = callback(el);
//     newArray.push(newEl);
//   }
//   return newArray;
// }

// //------

// function square(el) {
//   return el * el;
// }

// const arr = [1, 2, 3, 4, 5];

// console.log(each(arr, square)); // [1, 4, 9, 16, 25]

// console.log(each(arr, (el) => el + 1));
// console.log(each(arr, (el) => Math.sqrt(el)));
// console.log(each(arr, (el) => 5 * el));
// console.log(each(arr, (el) => el % 2 === 0));

//! ========================

//* порахувати середнє арифметичне всіх елементів масиву за допомогою forEach

// const arr = [1, 2, 3, 4, 5];

// let sum = 0;

// arr.forEach((el) => (sum += el));

// console.log(sum / arr.length);
//
//
//

function splitString(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    if (str.length % 2 !== 0) {
      result.push(str[i] + "_");
    } else {
      result.push(str.slice(i, i + 2));
    }
  }

  return result;
}

const inputString = "авбрвапар";
const outputArray = splitString(inputString);
console.log(outputArray);
console.log(splitString("авбрвапар"));

//
//
//

function splitString(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    if (str.length % 2 !== 0) {
      result.push(str[i] + "_");
    } else {
      result.push(str.slice(i, i + 2));
    }
  }

  return result;
}

const inputString = "авбрвапар";
const outputArray = splitString(inputString);
console.log(outputArray);
console.log(splitString("авбрвапар"));
