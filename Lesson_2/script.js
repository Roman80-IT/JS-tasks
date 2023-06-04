// node Lesson_2/script - запуск через термінал ≡

//! =============================================
//* Task 1k      патерн «раннє повернення» 'return'
//*             У ф-ції може бути більше одного оператора 'return'
//! =============================================

// // ВАРІАНТ з раннім поверненням return
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return;
//   }
//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return;
//   }
//   console.log("Операція зняття коштів проведена");
// }

// // ВАРІАНТ без раннього повернення
// function withdraw(amount, balance) {
//   let message = "";
//   if (amount === 0) {
//     message = "Для проведення операції введіть суму більшу за нуль";
//   } else if (amount > balance) {
//     message = "Недостатньо коштів на рахунку";
//   } else {
//     message = "Операція зняття коштів проведена";
//   }
//   console.log(message);
//   //   return message;
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена"

//! =============================================
//* Task 1       патерн «раннє повернення» 'return'
//! =============================================

// У виразі перевірки віку використаний оператор >=
//     В тілі функції є тільки одна інструкція if
// В тілі функції відсутні інструкції else або else if

//? =============================================

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }
//   return "You are a minor";
// }

// console.log(checkAge(20)); //  "You are an adult"
// console.log(checkAge(8)); //  "You are an adult"
// console.log(checkAge(14)); //  "You are an adult"
// console.log(checkAge(38)); //  "You are an adult"

// checkAge(20); //  "You are an adult"
// checkAge(8); //  "You are a minor"
// checkAge(14); //  "You are a minor"
// checkAge(38); //  "You are an adult"

//! =============================================
//* Task 2      патерн «раннє повернення» 'return'
//! =============================================
// Ф-ція checkPassword отримує пароль користувача у password, перевіряє на збіг з адміністраторот у ADMIN_PASSWORD
// і повертає повідомлення про результат порівняння.
// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:
//       видали змінну message
//       видали else
//       код повинен працювати так само, як і до оптимізації

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
//   return message;
// }
//? =============================================

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }

// console.log(checkPassword("mangohackzor")); //  "Access denied, wrong password!"
// console.log(checkPassword("polyhax")); //  "Access denied, wrong password!"
// console.log(checkPassword("jqueryismyjam")); //  "Welcome!"

// checkPassword("mangohackzor"); //  "Access denied, wrong password!"
// checkPassword("polyhax"); //  "Access denied, wrong password!"
// checkPassword("jqueryismyjam"); //  "Welcome!"

//! =============================================
//?            патерн «раннє повернення» 'return'
//*  Task 3        if () { return "empty!";
//!                }         !!! else  непотрібно!!!
//*                if () { return "Your!";
//*                } return "The";
//?   console.log("Your order is empty!");       return;
//! =============================================

//* Ф-ція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
//* Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
//*     available - доступна кількість товарів на складі
//*     ordered - кількість одиниць товару в замовленні
//* Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = "Your order is empty!";
//   } else if (ordered > available) {
//     message = "Your order is too large, not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   return message;
// }
//? =============================================

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }

// checkStorage(100, 50); //  "The order is accepted, our manager will contact you"
// checkStorage(100, 130); //  "Your order is too large, not enough goods in stock!"
// checkStorage(70, 0); //  "Your order is empty!"
// checkStorage(200, 20); //  "The order is accepted, our manager will contact you"
// checkStorage(200, 250); //  "Your order is too large, not enough goods in stock!"
// checkStorage(150, 0); //  "Your order is empty!"

//! =============================================
//?              Масив - зберігає впорядковану колекцію елементів.
//*                  Він оголошується відкритою і закритою квадратною дужкою [] - літералом масиву.
//* Task 4           Всередині дужок кожен елемент масиву розділяється комою.
//?                     const planets = ["Earth", "Mars", "Venus"];
//?                     як правило, використовують const
//! =============================================

//* Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".
//* Оголошена змінна fruits
//* Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

//! =============================================
//* Task 5       Для доступу до значення елемента масиву застосовують синтаксис квадратних дужок масив[індекс].
//*              Між ім'ям змінної масиву і квадратними дужками не повинно бути пробілу.
//*                     const planets = ["Earth", "Mars", "Venus"];
//* planets[0]; // "Earth"
//* planets[2]; // "Venus"
//! =============================================

//! =============================================
//* Task 6
//! =============================================

//! =============================================
//* Task 7
//! =============================================

//! =============================================
//* Task 8
//! =============================================

//! =============================================
//* Task 9
//! =============================================

//! =============================================
//* Task 10
//! =============================================

//! =============================================
//* Task 11
//! =============================================

//! =============================================
//* Task 12
//! =============================================

//! =============================================
//* Task 13
//! =============================================

//! =============================================
//* Task 14
//! =============================================

//! =============================================
//* Task 15
//! =============================================

//! =============================================
//* Task 16
//! =============================================

//! =============================================
//* Task 17
//! =============================================

//! =============================================
//* Task 18
//! =============================================

//! =============================================
//* Task 19
//! =============================================

//! =============================================
//* Task 20
//! =============================================

//! =============================================
//* Task 21
//! =============================================

//! =============================================
//* Task 22
//! =============================================

//! =============================================
//* Task 23
//! =============================================

//! =============================================
//* Task 24
//! =============================================

//! =============================================
//* Task 25
//! =============================================

//! =============================================
//* Task 26
//! =============================================

//! =============================================
//* Task 27
//! =============================================

//! =============================================
//* Task 28
//! =============================================

//! =============================================
//* Task 29
//! =============================================

//! =============================================
//* Task 30
//! =============================================

//! =============================================
//* Task 31
//! =============================================

//! =============================================
//* Task 32
//! =============================================

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
