// "JavaScript is awesome".length;

// Змінні, оголошені як const, обов'язково повинні бути ініціалізовані
// значенням під час оголошення, інакше виникне помилка.

// Change code below this line
// const productName = "Droid";
// console.log(productName);
// 'Droid'
// const pricePerItem = 2000;
// console.log(pricePerItem);
// 2000

// var a = 10;
// console.log(a);

// const yearOfBirth = 2006;
// console.log(yearOfBirth);

// const message = "JavaScript is awesome!";
// alert(message);

//! =============================================

//! =============================================
// Task 1
//! =============================================

// const productName = 'Droid'
// // console.log(productName);
// // 'Droid'
// const pricePerItem = 2000
// // console.log(pricePerItem);
// // 2000

//! =============================================
// Task 2
//! =============================================

// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line
// productName = "Repair droid";
// pricePerItem = pricePerItem + 1500;

//! =============================================
// Task 3
//! =============================================

// // Change code below this line
// // Числа
// const topSpeed = 160;
// let distance = 617.54;

// // Рядки
// const login = "mango935";

// // Булі
// const isOnline = true;
// const isAdmin = false;

//! =============================================
// Task 4
//! =============================================

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

//! =============================================
// Task 5
//! =============================================

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

//! =============================================
// Task 6
//! =============================================

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

//! =============================================
// Task 7
//! =============================================

// // 1. Оголошення функції sayHi
// function sayHi() {
//   // Тіло функції
//   console.log("Hello, this is my first function!");
// }

// // 2. Виклики функції sayHi
// sayHi(); // Hello, this is my first function!

//! =============================================
// Task 8
//! =============================================

// // 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // 2. Передача аргументів
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550

//! =============================================

// // 1. Оголошення параметрів a, b, c:
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// // 2. Передача аргументів
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//! =============================================
// Task 9
//! =============================================

// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// // Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

//! =============================================

// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//! =============================================
// Task 10
//! =============================================

// 1. Оголошення параметрів name, price

// function makeMessage(name, price) {

//   const message = `You picked ${name}, price per item is ${price} credits`;

//   return message;
// }

//   // 2. Передача аргументів
// console.log(makeMessage("Radar", 6150));
// console.log(makeMessage("Scanner", 3500));
// console.log(makeMessage("Reactor", 8000));
// console.log(makeMessage("Engine", 4070);

//! =============================================
// Task 11
//! =============================================

// 1. Оголошення параметрів orderedQuantity, pricePerItem

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }

// // 2. Передача аргументів
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

//! =============================================
// Task 12
//! =============================================

// // 1. Оголошення параметрів
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// // 2. Передача аргументів
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

//! =============================================
// Task 13
// > - більше, < - менше
// >= - більше або дорівнює, <= - менше або дорівнює
//! =============================================

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// без виводу в консоль, тому не відображається

//! =============================================
// Task 14   оператори === (строга рівність) і !== (строга нерівність)
//! =============================================

// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;
//   // console.log(isMatch === SAVED_PASSWORD); - якщо потрібно було б виводити на консоль
//   // Change code above this line
//   return isMatch;
// }

// // 2. Виклик
// // console.log(isValidPassword("mangodab3st")); - для себе на консоль
// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

//! =============================================
//                   if () {
//   Task 15         } else {
//                   }
//! =============================================

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }
//   console.log(message); // - якщо потрібно було б виводити на консоль
//   return message;
// }

// // 2. Виклик
// // console.log(checkAge(20));
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

//! =============================================
// Task 16
//! =============================================

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   console.log(message); // - якщо потрібно було б виводити на консоль
//   // Change code above this line
//   return message;
// }

// // 2. Виклик
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

//! =============================================
// Task 17  Комбіновані оператори     age = age + 1;
//                                    age += 1;
//! =============================================

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2; // a = a + 2;
// b -= 4; // b = b - 4;
// c *= 3; // c = c * 3;
// d /= 10; // d = d / 10;

// console.log("a=", a);
// console.log("b=", b);
// console.log("c=", c);
// console.log("d=", d);

//! =============================================
//                   if () {         `You ${name} are best`;
//   Task 18         } else {
//                   }
//! =============================================

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   console.log(message); // - якщо потрібно було б виводити на консоль
//   // Change code above this line
//   return message;
// }

// // 2. Виклик
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

//! =============================================
//                   if () {         ===
//                   } else if {     null - особливе значення, яке по суті означає ніщо
//   Task 19         } else if {
//                   } else {
//                   }               «шукаю перше виконання умови, ігнорую все інше»
//! =============================================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
//   console.log(message); // - якщо потрібно було б виводити на консоль
//   return message;
// }

// // 2. Виклик
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

//! =============================================
// Task 20
//! =============================================

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   console.log(message); // - якщо потрібно було б виводити на консоль
//   // Change code above this line
//   return message;
// }

// // 2. Виклик
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

//! =============================================
//                    Логічні оператори
// Task 21
//! =============================================

function isNumberInRange(start, end, number) {
  const isInRange = number; // Change this line

  return isInRange;
}

//! =============================================
// Task 22
//! =============================================

//! =============================================
// Task 23
//! =============================================

//! =============================================
// Task 24
//! =============================================

//! =============================================
// Task 25
//! =============================================

//! =============================================
// Task 26
//! =============================================

//! =============================================
// Task 27
//! =============================================

//! =============================================
// Task 28
//! =============================================

//! =============================================
// Task 29
//! =============================================

//! =============================================
// Task 30
//! =============================================

//! =============================================
// Task 31
//! =============================================

//! =============================================
// Task 32
//! =============================================

//! =============================================
// Task 33
//! =============================================

//! =============================================
// Task 34
//! =============================================

//! =============================================
// Task 35
//! =============================================

//! =============================================
// Task 36
//! =============================================

//! =============================================
// Task 2-21
//! =============================================
// function findLongestWord(string) {
//   // Change code below this line
//   const arr = string.split(" ");

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[0].length < arr[i].length) {
//       arr.unshift(arr[i]);
//     }
//   }

//   return arr[0];
//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
