// node Lesson_1/script - запуск через термінал
//
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
//* Task 5
//! =============================================

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

//! =============================================
//* Task 6
//! =============================================

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

//! =============================================
//* Task 7
//! =============================================

// // 1. Оголошення функції sayHi
// function sayHi() {
//   // Тіло функції
//   console.log("Hello, this is my first function!");
// }

// // 2. Виклики функції sayHi
// sayHi(); // Hello, this is my first function!

//! =============================================
//* Task 8
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
//* Task 9
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
//* Task 10
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
//* Task 12
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
//* Task 13
//*            > - більше, < - менше
//*            >= - більше або дорівнює, <= - менше або дорівнює
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
//* Task 14    оператори === (строга рівність) і !== (строга нерівність)
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
//*                   if () {
//*   Task 15         } else {
//*                   }
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
//* Task 16
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
//* Task 17  Комбіновані оператори     age = age + 1;
//*                                    age += 1;
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
//*                   if () {         `You ${name} are best`;
//*   Task 18         } else {
//*                   }
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
//*                   if () {         ===
//*                   } else if {     null - особливе значення, яке по суті означає ніщо
//*   Task 19         } else if {
//*                   } else {
//*                   }               «шукаю перше виконання умови, ігнорую все інше»
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
//*                    Логічні оператори
//* Task 21
//! =============================================

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   console.log(isInRange);
//   return isInRange;
// }

// // 2. Виклик
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

//! =============================================
//                  логічне «АБО» запинається на істині і повертає те,
// Task 22          на чому запнулося або останній операнд false.
//
//! =============================================

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   console.log(canAccessContent); // - якщо потрібно було б виводити на консоль
//   return canAccessContent;
// }

// // 2. Виклик
// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

//! =============================================
//!            Логічне «НЕ» Оператор '!' приводить операнд до буля,
//!            а потім - інверсію - замінює на протилежний true -> false або false -> true
//               console.log(!true); // false
//               console.log(!false); // true
//               console.log(!3); // !3 -> !true -> false
// Task 23       console.log(!"Mango"); // !'Mango' -> !true -> false
//               console.log(!0); // !0 -> !false -> true
//               console.log(!""); // !'' -> !false -> true
//
//               const isOnline = true;
//               const isNotOnline = !isOnline; // !isOnline -> !true -> false
//! =============================================

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   console.log(isNotInRange); // - якщо потрібно було б виводити на консоль
//   return isNotInRange;
// }

// // 2. Виклик
// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

//! =============================================
//*                 if () {
//*                   } else if () {
//*   Task 24         } else if () {
//*                   } else {
//*                   }               «шукаю перше виконання умови, ігнорую все інше»
//! =============================================
// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   console.log(discount); // - якщо потрібно було б виводити на консоль
//   // Change code above this line
//   return discount;
// }

// getDiscount(137000); // 0.1
// getDiscount(46900); //  0.05
// getDiscount(8250); //  0.02
// getDiscount(1300); //  0
// getDiscount(5000); //  0.02
// getDiscount(20000); //  0.05
// getDiscount(50000); //  0.1

//! =============================================
//*          Тернарний оператор - коротша заміна інструкції 'if...else'
//*            const age = 20;
//* Task 25    const type = age >= 18 ? "adult" : "child";
//*            console.log(type); // "adult"
//*
//! =============================================

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   //   if (ordered > available) {
//   //     message = "Not enough goods in stock!";
//   //   } else {
//   //     message = "The order is accepted, our manager will contact you";
//   //     }

//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";

//   console.log(message); // - якщо потрібно було б виводити на консоль
//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50); //  "The order is accepted, our manager will contact you"
// checkStorage(100, 130); //  "Not enough goods in stock!"
// checkStorage(200, 20); //  "The order is accepted, our manager will contact you"
// checkStorage(200, 150); //  "The order is accepted, our manager will contact you"
// checkStorage(150, 180); //  "Not enough goods in stock!"

//! =============================================
//* Task 26   Тернарний оператор
//! =============================================
// Ф-ція checkPassword(password) порівнює переданий їй пароль зі збереженим паролем адміністратора (константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.
// Використовуючи тернарний оператор, доповни функцію таким чином, що:
//     - Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
//     - В іншому випадку, присвой message рядок "Access denied, wrong password!".

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";

//   console.log(message); // - якщо потрібно було б виводити на консоль
//   // Change code above this line
//   return message;
// }

// checkPassword("jqueryismyjam"); //  "Access is allowed"
// checkPassword("angul4r1sl1f3"); //  "Access denied, wrong password!"
// checkPassword("r3actsux"); //       "Access denied, wrong password!"

//! =============================================
//*           switch - заміна інструкції 'if...else'
//*           switch (що порівнюють) {
//*           case з чим порівнюють:
//*  Task 27  інструкції;
//!           break;          в алгоритмі використовується оператор строгої рівності ===
//*          case з чим порівнюють:
//*          інструкції;
//!          break;           Оператор break в кінці кожного блоку case необхідний, щоб перервати подальші перевірки
//*          }                та одразу перейти до коду після switch, коли перевірка на рівність повернула true.
//! =============================================

//* if (type === "starter") {
//*   price = 0;
//* } else if (type === "professional") {
//*   price = 20;
//* } else if (type === "organization") {
//*   price = 50;
//* }

// Ф-ція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (type), перевіряє її на збіг
//    з 3 - ма типами щомісячної передплати та повертає ціну, що зберігається у змінній price.
// Якщо значення параметра type - це рядок:
//    "starter" - ціна передплати 0 кредитів.
//    "professional" - ціна передплати 20 кредитів.
//    "organization" - ціна передплати 50 кредитів.

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }
//   console.log(price); // - якщо потрібно було б виводити на консоль
//   // Change code above this line
//   return price;
// }

// // console.log(getSubscriptionPrice("professional")); // - альтернативне виведення на консоль
// // console.log(getSubscriptionPrice("organization"));
// // console.log(getSubscriptionPrice("starter"));

// getSubscriptionPrice("professional"); //  20
// getSubscriptionPrice("organization"); //  50
// getSubscriptionPrice("starter"); //       0

//! =============================================
//*          switch (значення) {
//*           case значення:
//*             інструкції;
//!             break;     - НЕ ЗАБУВАЄМО!
//* Task 28   case значення:
//*             інструкції;
//!             break;
//*           default:     - Якщо жодного збігу значень не відбулося
//*              інструкції;
//*          }            - break після блоку default не потрібен
//! =============================================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   //   if (password === null) {
//   //     message = "Canceled by user!";
//   //   } else if (password === ADMIN_PASSWORD) {
//   //     message = "Welcome!";
//   //   } else {
//   //     message = "Access denied, wrong password!";
//   //   }

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       console.log(message); // - якщо потрібно було б виводити на консоль
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       console.log(message); // - якщо потрібно було б виводити на консоль
//       break;
//     default:
//       message = "Access denied, wrong password!";
//       console.log(message); // - якщо потрібно було б виводити на консоль
//   }
//   // Change code above this line
//   return message;
// }

// // console.log(checkPassword("mangohackzor")); // - ТУТ НЕ БУДЕ ПРАЦЮВАТИ (частково)
// // console.log(checkPassword(null)); // - ТУТ НЕ БУДЕ ПРАЦЮВАТИ
// // console.log(checkPassword("polyhax")); // - ТУТ НЕ БУДЕ ПРАЦЮВАТИ (частково)
// // console.log(checkPassword("jqueryismyjam")); // - ТУТ НЕ БУДЕ ПРАЦЮВАТИ

// checkPassword("mangohackzor"); //   "Access denied, wrong password!"
// checkPassword(null); //             "Canceled by user!"
// checkPassword("polyhax"); //        "Access denied, wrong password!"
// checkPassword("jqueryismyjam"); //  "Welcome!"

//! =============================================
//* Task 29
//! =============================================

// перевіряти можливість доставки товару в країну користувача (параметр country) і
// повертати повідомлення про результат, що зберігається у змінній message.
//   China - 100 кредитів
//   Chile - 250 кредитів
//   Australia - 170 кредитів
//   Jamaica - 120 кредитів
// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>,
// необхідно підставити відповідні значення.

// function getShippingCost(country) {
//   let message = "";
//   // Change code below this line
//   let price;
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       //   console.log(message); // - покроковий вивід на консоль (не потрібно)
//       break;
//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       //   console.log(message); // - покроковий вивід на консоль (не потрібно)
//       break;
//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       //   console.log(message); // - покроковий вивід на консоль (не потрібно)
//       break;
//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       //   console.log(message); // - покроковий вивід на консоль (не потрібно)
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//     //   console.log(message); // - покроковий вивід на консоль (не потрібно)
//   }
//   //   console.log(message); // - якщо потрібно було б виводити на консоль
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// getShippingCost("Australia"); //  "Shipping to Australia will cost 170 credits"
// getShippingCost("Germany"); //  "Sorry, there is no delivery to your country"
// getShippingCost("China"); //  "Shipping to China will cost 100 credits"
// getShippingCost("Chile"); //  "Shipping to Chile will cost 250 credits"
// getShippingCost("Jamaica"); //  "Shipping to Jamaica will cost 120 credits"
// getShippingCost("Sweden"); //  "Sorry, there is no delivery to your country"

//! =============================================
//*        length           const productName = "Repair droid";
//*
//*               Якщо у змінній зберігається рядок
//* Task 30       console.log(productName.length); // 12
//*
//*             Якщо рядковий літерал
//*             console.log("Repair droid".length); // 12
//! =============================================

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   console.log(message); // - якщо потрібно було б виводити на консоль
//   return message;
// }

// getNameLength("Poly"); //    "Name Poly is 4 characters long"
// getNameLength("Harambe"); // "Name Harambe is 6 characters long"
// getNameLength("Billy"); //   "Name Billy is 5 characters long"
// getNameLength("Joe"); //     "Name Joe is 3 characters long"

//! =============================================
//*             const productName = "Repair droid";
//*             console.log(productName[0]); // "R"
//* Task 31     console.log(productName[5]); // "r"
//*             console.log(productName[11]); // "d"
//*             console.log(productName[productName.length - 1]); // "d"
//*                const lastElement = courseTopic[courseTopic.length - 1];
//! =============================================

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// Значення courseTopicLength - 21
// Значення firstElement -     "J"
// Значення lastElement -      "s"

//! =============================================
//*       slice(startIndex, endIndex) використовується для створення копії частини
//*          const productName = "Repair droid";
//* Task 32    console.log(productName.slice(0, 4)); // "Repa"
//*            console.log(productName.slice(3, 9)); // "air dr"
//*            console.log(productName.slice(0, productName.length)); // "Repair droid"
//*            console.log(productName.slice(7, productName.length)); // "droid"
//! =============================================

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   console.log(substring); // - якщо потрібно було б виводити на консоль
//   return substring;
// }

// getSubstring("Hello world", 3); // "Hel"
// getSubstring("Hello world", 6); // "Hello"
// getSubstring("Hello world", 8); // "Hello wo"
// getSubstring("Hello world", 11); // "Hello world"
// getSubstring("Hello world", 0); // ""

//! =============================================
//* Task 33
//! =============================================

//! =============================================
//* Task 34
//! =============================================

//! =============================================
//* Task 35
//! =============================================

//! =============================================
//* Task 36
//! =============================================

//! =============================================
// Task 2-21
//! =============================================
// function findLongestWord(string) {
//   const words = string;
//   for (let i = 0; i < words.length; i += i) {}
//   return words;
// }
// console.log(findLongestWord("Google do a roll"));

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
