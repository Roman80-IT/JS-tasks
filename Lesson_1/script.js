//             node Lesson_1/script         - запуск через термінал
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
//?       const
//?              Оголошення змінної:      <ключове слово> <назва змінної> = <значення>
//*              записується у форматi 'camelCase'
//*  Task 1            const age = 20;
//*                  const userName = "Mango";
//*                  const socialProfileTag = "@gluck";
//*                  const totalWorkerSalary = 4052;
//! =============================================
//* Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку.

// const productName = "Droid";
// console.log(productName); //   'Droid'
// const pricePerItem = 2000;
// console.log(pricePerItem); //   2000

//! =============================================
//?      let
//*          - змінна, якій у майбутньому можна буде присвоїти нове значення
//*          Оголошення змінної age:
//* Task 2     let age = 20;
//*            ✅ Правильно, звертаємося після оголошення
//*            age = 25;
//*            console.log(age); // 25
//! =============================================

// Ім'я товару змінили на "Repair droid" і збільшили ціну на +1500.
// Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line
// productName = "Repair droid";
// pricePerItem = pricePerItem + 1500;

//! =============================================
//?      Number      String      Boolean
//*           Number - цілі числа і числа з плаваючою комою (крапкою).
//* Task 3    String - рядки, послідовність від нуля або більше символів. Рядок починається і закінчується одинарною ' або подвійними лапками ".
//*           Boolean - логічний тип даних, прапорці стану. Всього два значення: true і false.
//*                     (на питання, чи увімкнено світло в кімнаті, можна відповісти так(true) або ні(false).)
//! =============================================

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
//* Task 16    СКЛАД ТОВАРІВ
//! =============================================

//* Ф-ція checkStorage(available, ordered) перевіряє оформлення замовлення і повертає результат:
//*    available - загальна кількість товарів на складі
//*    ordered - одиниць товару в замовленні

// function checkStorage(available, ordered) {
//   let message;

//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }

//   console.log(message); // - вивід на консоль
//   return message;
// }

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
//? Task 20       СКЛАД ТОВАРІВ 2.0
//?           if...else
//! =============================================

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   console.log(message); // - якщо потрібно було б виводити на консоль
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

//! =============================================
//?                Логічні оператори   &&
//? Task 21
//*             Оператор && приводить всі операнди до буля і повертає значення одного з них.
//*             Лівий операнд, якщо false, і правий - в ін. випадках.
//! =============================================

//* Ф-ція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок:
//*        number - число, яке перевіряється
//*        start - початок числового проміжку
//*        end - кінець числового проміжку

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   console.log(isInRange);
//   return isInRange;
// }

// isNumberInRange(10, 30, 17); //  true
// isNumberInRange(10, 30, 5);  //  false
// isNumberInRange(20, 50, 24); //  true
// isNumberInRange(20, 50, 76); //  false

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

// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

//! =============================================
//!            Логічне «НЕ» Оператор '!' приводить операнд до буля,
//!            а потім - інверсію - замінює на протилежний true -> false або false -> true
//*               console.log(!true); // false
//*               console.log(!false); // true
//               console.log(!3); // !3 -> !true -> false
// Task 23       console.log(!"Mango"); // !'Mango' -> !true -> false
//               console.log(!0); // !0 -> !false -> true
//               console.log(!""); // !'' -> !false -> true
//
//*               const isOnline = true;
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
//?          Тернарний оператор   -   <умова> ? <істина> : <хибна>
//*        коротша заміна інструкції 'if...else'   -   <умова> ? <вираз, якщо умова істинна> : <вираз, якщо хибна>
//*               const age = 20;
//* Task 25       const type = age >= 18 ? "adult" : "child";
//*               console.log(type); // "adult"
//?
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
//?           Тернарний оператор     <умова> ? <істина> : <хибна>
//?  Task 26          ПЕРЕВІРКА ПАРОЛЯ
//?
//! =============================================
//* Ф-ція checkPassword(password) порівнює пароль з адміністраторським (ADMIN_PASSWORD) і повертає результат.
//* Використовуючи тернарний оператор:
//*     - Якщо значення password і ADMIN_PASSWORD збігаються, присвой message рядок "Access is allowed".
//*     - інакше присвой message - "Access denied, wrong password!".

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";

//   console.log(message); // - якщо потрібно було б виводити на консоль
//   return message;
// }

// checkPassword("jqueryismyjam"); //  "Access is allowed"
// checkPassword("angul4r1sl1f3"); //  "Access denied, wrong password!"
// checkPassword("r3actsux"); //       "Access denied, wrong password!"

//! =============================================
//?           switch - заміна інструкції 'if...else'
//*             switch (що порівнюють) {
//*             case з чим порівнюють:
//*  Task 27    інструкції;
//!             break;          в алгоритмі використовується оператор строгої рівності ===
//*               case з чим порівнюють:
//*               інструкції;
//!            break;           Оператор break в кінці кожного блоку case необхідний, щоб перервати подальші перевірки
//*            }                та одразу перейти до коду після switch, коли перевірка на рівність повернула true.
//! =============================================

//* if (type === "starter") {
//*   price = 0;
//* } else if (type === "professional") {
//*   price = 20;
//* } else if (type === "organization") {
//*   price = 50;
//* }

//* Ф-ція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (type), перевіряє її
//*    на збіг з 3-ма типами щомісячної передплати та повертає ціну (price).
//* параметри (type):
//*    "starter" - ціна передплати 0 кредитів.
//*    "professional" -  20 кредитів.
//*    "organization" -  50 кредитів.

// function getSubscriptionPrice(type) {
//   let price;

//   switch (
//     type
//   ) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }
//   console.log(price); // - альтернативний вивід на консоль
//   return price;
// }

// console.log(getSubscriptionPrice("professional")); //  20
// console.log(getSubscriptionPrice("organization")); //  50
// console.log(getSubscriptionPrice("starter")); //       0

//! =============================================
//?           switch (значення) {
//*             case значення:
//*               інструкції;
//! Task 28            break;     - НЕ ЗАБУВАЄМО!   - в алгоритмі використовується оператор строгої рівності ===
//?             default:     - Якщо жодного збігу значень не відбулося
//*                інструкції;
//*             }            - break після блоку default не потрібен
//?          if...else  ≡ після case  + default
//! =============================================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//*      if (password === null) {
//*        message = "Canceled by user!";
//*      } else if (password === ADMIN_PASSWORD) {
//*        message = "Welcome!";
//*      } else {
//*        message = "Access denied, wrong password!";
//*      }

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       // console.log(message); // - покроковий вивід на консоль
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }
//   return message;
// }

// console.log(checkPassword("mangohackzor")); // "Access denied, wrong password!"
// console.log(checkPassword(null)); // "Canceled by user!"
// console.log(checkPassword("polyhax")); // "Access denied, wrong password!"
// console.log(checkPassword("jqueryismyjam")); // "Welcome!"

//! =============================================
//?          switch            `Shipping ${country}`
//? Task 29       ДОСТАВКА ТОВАРУ
//?
//! =============================================

//* перевірити можливість доставки товару в країну (country) і
//* повертати повідомлення про результат (message):
//* "Shipping to <country> will cost <price> credits", де замість <country> і <price>,
//*    China - 100 кредитів
//*    Chile - 250
//*    Australia - 170
//*    Jamaica - 120

// function getShippingCost(country) {
//   let message = "";
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
//   return message;
// }

// console.log(getShippingCost("Australia")); //  "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); //  "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); //  "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); //  "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); //  "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); //  "Sorry, there is no delivery to your country"

//! =============================================
//?        length      визначає довжину рядка
//*             const name = "Repair droid";
//*               рядок:
//* Task 30       console.log(name.length); // 12
//*             рядковий літерал:
//*             console.log("Repair droid".length); // 12
//! =============================================

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   console.log(message); // - якщо потрібно було б виводити на консоль
//   return message;
// }

// getNameLength("Poly"); //    "Name Poly is 4 characters long"
// getNameLength("Harambe"); // "Name Harambe is 6 characters long"
// getNameLength("Billy"); //   "Name Billy is 5 characters long"
// getNameLength("Joe"); //     "Name Joe is 3 characters long"

//! =============================================
//?      РЯДОК        доступ - рядок[індекс]
//*             const name = "Repair droid";
//*               console.log(name[0]); // "R"
//* Task 31       console.log(name[5]); // "r"
//*               console.log(name[11]); // "d"
//*               console.log(name[name.length - 1]); // "d"
//?                  const lastElement = name[name.length - 1];   до останнього елемента
//! =============================================

// const courseTopic = "JavaScript essentials";
// // Change code below this line
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// // Change code above this line

// console.log(courseTopicLength);  // 21
// console.log(firstElement);  // "J"
// console.log(lastElement);   // "s"

//! =============================================
//?       slice(startIndex, endIndex)
//?          використовується для створення копії частини або всього рядка
//*          const productName = "Repair droid";
//* Task 32    console.log(productName.slice(0, 4)); // "Repa"
//*            console.log(productName.slice(3, 9)); // "air dr"
//*            console.log(productName.slice(0, productName.length)); // "Repair droid"
//*            console.log(productName.slice(7, productName.length)); // "droid"
//! =============================================

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   console.log(substring); // - якщо потрібно було б виводити на консоль
//   return substring;
// }

// getSubstring("Hello world", 3); // "Hel"
// getSubstring("Hello world", 6); // "Hello"
// getSubstring("Hello world", 8); // "Hello wo"
// getSubstring("Hello world", 11); // "Hello world"
// getSubstring("Hello world", 0); // ""

//! =============================================
//? Task 33         length        slice(startIndex, endIndex)        message.slice(0, maxLength) + "..."
//! =============================================

//* Ф-ція formatMessage(message, maxLength) приймає і форматує рядок (message),
//*   якщо довжина > maxLength.
//*    довжина рядка (message):
//*      не перевищує maxLength - ф-ція повертає його в початковому вигляді.
//*      більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...",
//*      після чого повертає скорочену версію.

// function formatMessage(message, maxLength) {
//   let result;

//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }
//   console.log(result); // - якщо потрібно було б виводити на консоль
//   // Change code above this line
//   return result;
// }

// formatMessage("Curabitur ligula sapien", 16); // "Curabitur ligula..."
// formatMessage("Curabitur ligula sapien", 23); // "Curabitur ligula sapien"
// formatMessage("Vestibulum facilisis purus nec", 20); // "Vestibulum facilisis..."
// formatMessage("Vestibulum facilisis purus nec", 30); // "Vestibulum facilisis purus nec"
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); // "Nunc sed turpis..."
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); // "Nunc sed turpis a felis in nunc fringilla"

//! =============================================
//? Task 34     toLowerCase() і toUpperCase()
//*                 name.toUpperCase();
//! =============================================

// Ф-ція normalizeInput(input) приймає рядок (параметр input) і повертає його в нижньому регістрі.
//  Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   console.log(normalizedInput); // - якщо потрібно було б виводити на консоль
//   return normalizedInput;
// }

// normalizeInput("Hello world"); //      "hello world"
// normalizeInput("This ISN'T SpaM"); //  "this isn't spam"
// normalizeInput("Big SALE"); //         "big sale"

//! =============================================
//?         includes(substring);
//*                Метод рядків includes(substring) перевіряє, чи входить підрядок 'substring' у рядок,
//!                повертає буль - 'true', якщо входить, і 'false' - в іншому випадку.
//*                Регістр символів в рядку і підрядку має значення, оскільки, наприклад літера "a" не дорівнює літері "А".
//* Task 35                 const productName = "Repair droid";
//*                         console.log(productName.includes("a")); // true
//*                         console.log(productName.includes("A")); // false
//*                         console.log(productName.includes("droid")); // true
//*                         console.log(productName.includes("Droid")); // false
//! =============================================

//* Ф-ція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.
//*    fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
//*    name - ім'я для перевірки входження в повне ім'я.
//* Присвой змінній result вираз перевірки входження імені (name), у повне ім'я (fullname).
//*    Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   console.log(result); // - якщо потрібно було б виводити на консоль
//   return result;
// }

// checkForName("Egor Kolbasov", "Egor"); //      true
// checkForName("Egor Kolbasov", "egor"); //      false
// checkForName("Egor Kolbasov", "egOr"); //      false
// checkForName("Egor Kolbasov", "Zhenya"); //    false
// checkForName("Vadim Nekrasov", "Vadim"); //    true
// checkForName("Vadim Nekrasov", "vadim"); //    false
// checkForName("Vadim Nekrasov", "Dima"); //     false

//! =============================================
//?             Перевірка речення на вміст слів (2-х)
//? Task 36         'if...else'     '? :'
//*               lowerCaseMessage.includes("spam") ≡ message.toLowerCase().includes("spam")
//*               const type = age >= 18 ? "adult" : "child";
//! =============================================

//*   Ф-ція checkForSpam(message) приймає рядок (message), перевіряє його на вміст заборонених слів spam і sale,
//*     і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі (SPAM або sAlE).
//*   якщо знайшли заборонене слово (spam або sale) то ф-ція повертає буль true.
//*   якщо в рядку відсутні заборонені слова - ф-ція повертає буль false.

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   let lowerCaseMessage = message.toLowerCase(); // не обов'язково створювати

// --- ВАРІАНТ  if...else ---
// if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
//   result = true; // Знайдено заборонені слова
// } else {
//   result = false; // Заборонених слів немає
// }

// --- ВАРІАНТ  ? ---
//   result =
//     lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
// ? true
// : false;

//   console.log(result); // - якщо потрібно було б виводити на консоль
//   // Change code above this line
//   return result;
// }

// checkForSpam("Latest technology news"); //   false
// checkForSpam("JavaScript weekly newsletter"); //   false
// checkForSpam("Get best sale offers now!"); //   true
// checkForSpam("Amazing SalE, only tonight!"); //   true
// checkForSpam("Trust me, this is not a spam message"); //   true
// checkForSpam("Get rid of sPaM emails. Our book in on sale!"); //   true
// checkForSpam("[SPAM] How to earn fast money?"); //   true

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

//! =============================================
// Examples
//! =============================================

// const a = [2, 3, 4];
// a[10] = 11;
// console.log(a);

// const a = [1, 2, 3];
// [a[0], a[1], a[2]] = [10, 20, 30];
// console.log(a);

// const a = [1, 2, 3];
// a = [4, 5, 6];

const a = [2, 3, 4];
const b = a;
a[10] = 11;
console.log(a === b); // true
console.log(b);
// const a: number[] = [2, 3, 4];
