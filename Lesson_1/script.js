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
// Task 14
//! =============================================

//! =============================================
// Task 15
//! =============================================

//! =============================================
// Task 16
//! =============================================

//! =============================================
// Task 17
//! =============================================

//! =============================================
// Task 18
//! =============================================

//! =============================================
// Task 19
//! =============================================

//! =============================================
// Task 20
//! =============================================

//! =============================================
// Task 21
//! =============================================

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
