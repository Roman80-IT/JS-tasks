// node Lesson_2/script - запуск через термінал ≡

// Вивід на консоль в лапках:
// console.log("Name =", '"' + name + '"');
// console.log("Name =", '"'.concat(name, '"')); // Вивід на консоль в лапках, використовуючи метод concat(), який об'єднує рядки
//                          використовуємо '"'.concat(name, '"') для об'єднання лапок ", значення name та ще одних лапок ".

//! =============================================
//*    split()
//*    /[+-]+/           Регулярний вираз, який визначає шаблон роздільників
//! =============================================

// Метод split() розбиває рядок на масив, використовуючи роздільники - повинні бути декілька символів, розміщених не поряд, вам може знадобитися регулярний вираз для визначення шаблону роздільників. Ось приклад:

// let myString = "Hello++world--JavaScript";
// let delimiterPattern = /[+-]+/; // Регулярний вираз, який визначає шаблон роздільників (+ або - повторюються один або більше разу)
// let myArray = myString.split(delimiterPattern);
// console.log(myArray); // Виведе: ['Hello', 'world', 'JavaScript']

// У цьому прикладі, ми маємо рядок myString, який містить деякий текст, розділений роздільниками ++ та --.
// Ми використовуємо регулярний вираз / [+-] + / як роздільник. Цей вираз визначає шаблон роздільників,
// де + та - повторюються один або більше разу.Потім ми використовуємо метод split() з аргументом delimiterPattern, щоб розбити рядок на масив.Результатом буде масив myArray, який містить окремі частини рядка, розділені роздільниками.У виведенні консолі буде['Hello', 'world', 'JavaScript'].

// Таким чином, використання регулярного виразу у методі split() дозволяє розбити рядок на масив з використанням роздільників, які можуть бути декілька символів та розміщені не поряд.

//  поясни детально по кожному символу регулярного виразу '/[+-]+/' ?
// Звичайні вирази (регулярні вирази) - це шаблони, які використовуються для знаходження та відповідного відповідних текстових рядків. Регулярні вирази використовуються у багатьох мовах програмування, включаючи JavaScript, для роботи зі строками.
// Давайте розглянемо детально кожен символ регулярного виразу /[+-]+/:
// [+-]: Це набір символів. Вказує, що відповідний символ може бути + або -. З квадратних дужок ([]) вираження означають набір допустимих символів, а + та - - це символи, які можуть бути використані.
// +: Це квантифікатор. Позначає, що попередній символ або група символів може повторюватися один або більше разів. У нашому випадку попередній символ - це [+-], тому [+-]+ означає, що символ + або - може повторюватися один або більше разу.
// Таким чином, регулярний вираз /[+-]+/ шукає послідовність символів, які можуть містити один або більше символів + або -. У нашому прикладі, він буде знаходити такі послідовності в текстовому рядку, якщо вони є присутніми.
// Наприклад:
// "+" - відповідає шаблону [+-]+, тому буде знайдений.
// "---" - також відповідає шаблону [+-]+, тому буде знайдений.
// "Hello++world--JavaScript" - знайде дві послідовності ++ та --, оскільки вони відповідають шаблону [+-]+.
// Надіюся, ця детальна пояснення допомогли вам зрозуміти кожен символ регулярного виразу /[+-]+/.

// Вираз /[+-]+/ у регулярних виразах в JavaScript зазвичай обгортають символами / для позначення початку і кінця виразу.
// Символ / використовується як роздільник для вказання початку і кінця регулярного виразу. Все, що знаходиться між символами /, вважається самим регулярним виразом.
// Наприклад, у регулярному виразі /[+-]+/:
// Початок регулярного виразу позначений символом /.
// [+-]+ - це сам шаблон (pattern) регулярного виразу, який містить набір символів та квантифікатор.
// Кінець регулярного виразу позначений другим символом /.
// Таке обгортання виразу символами / є стандартною практикою у багатьох мовах програмування, включаючи JavaScript, для позначення початку і кінця регулярного виразу. Воно робить вираз більш зрозумілим і простим у сприйнятті, а також дозволяє легко розрізняти вирази від інших частин коду.
// Таким чином, символи / використовуються для обгортання регулярного виразу у JavaScript, вказуючи його початок і кінець.

//! =============================================
//* Task 1K      патерн «раннє повернення» 'return'
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

//* Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.
//*  Ім'я змінної	   Значення змінної
//*   firstElement -     "apple"
//*   secondElement -    "plum"
//*   lastElement -      "orange"

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement); // - вивід на консоль
// console.log(secondElement); // - вивід на консоль
// console.log(lastElement); // - вивід на консоль

//! =============================================
//*             Рядки і масиви
//* Task 6K          Звернення до конкретного символу в рядку за допомогою індексу - використовуючи квадратні дужки[]
//*                  індекс символу в межах - від '0' до 'length - 1'
//*            .split(''); // Розбиваємо рядок на масив символів
//*            .join(''); // З'єднуємо масив символів назад у рядок
//! =============================================
//?  Рядки в JavaScript, які є не змінними (immutable) даними - після створення рядка його значення не можна змінити
// Коли ми звертаємось до конкретного символу в рядку за допомогою індексу,
// ми отримуємо лише доступ до значення цього символу, але не можемо змінити сам рядок.

// let myString = "Hello";
// let character = myString[0]; // Отримуємо перший символ рядка
// console.log(character); // Виведе: 'H'

//? На відміну - елементи масиву можна змінювати (включаючи рядки), звернувшись до них за індексом і присвоївши інше значення.

// const numbers = [1, 2, 3, 4, 5];
// numbers[0] = 7;
// numbers[2] = 14;
// console.log(numbers); // [7, 2, 14, 4, 5];

//? ми можемо створити масив з рядками і змінювати елементи цього масиву. Ось кілька прикладів:

//* Приклад 1: Зміна рядка через масив

// let myArray = ['Hello', 'world'];
// myArray[0] = 'Hi'; // Змінюємо перший елемент масиву
// console.log(myArray); // Виведе: ['Hi', 'world']

//* Приклад 2: Зміна символу в рядку за допомогою масиву

// let myString = 'Hello';
// let myArray = myString.split(''); // Розбиваємо рядок на масив символів
// myArray[0] = 'h'; // Змінюємо перший символ
// myString = myArray.join(''); // З'єднуємо масив символів назад у рядок
// console.log(myString); // Виведе: 'hello'

//! =============================================
//* Task 6    Зміна символу в рядку
//! =============================================

//* Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".
//*       Оголошена змінна fruits
//*       Значення змінної fruits - це масив ["apple", "peach", "pear", "banana"]

// const fruits = ["apple", "plum", "pear", "orange"];
// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits); // Вивід на консоль

//! =============================================
//*           Довжина масиву (к-сть його елементів - властивість 'length'.
//*  Task 7       Це динамічна величина, яка змінюється автоматично під час додавання або видалення елементів.
//*                 const planets = ["Earth", "Mars", "Venus"];
//*                 console.log(planets.length); // 3
//! =============================================

//* Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.
//* Оголошена змінна fruitsArrayLength
//* Значення змінної fruitsArrayLength - це число 4

// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log("number of items =", fruitsArrayLength); // Вивід на консоль

//! =============================================
//*              значення останнього елемента - довжина масиву завжди на одиницю більша за індекс останнього елемента.
//*              довжина_масиву - 1 - отримуємо значення останнього елемента масиву довільної довжини.
//* Task 8                const planets = ["Earth", "Mars", "Venus"];
//*                       const lastElementIndex = planets.length - 1;
//*                       planets[lastElementIndex]; // "Venus"
//! =============================================

//* Оголоси дві змінні:
//* Ім'я змінної	                    Очікуване значення
//* lastElementIndex	  (індекс останнього елемента масиву fruits через довжина_масиву - 1
//* lastElement	          (Значення останнього елемента масиву)
//* Оголошена змінна lastElementIndex
//* Значення змінної lastElementIndex - це число 3
//* Оголошена змінна lastElement
//* Значення змінної lastElement - це рядок "banana"

// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log("index of last items =", lastElementIndex); // Вивід на консоль
// console.log("lastElement =", '"' + lastElement + '"'); // Вивід на консоль в лапках
// console.log("lastElement =", '"'.concat(lastElement, '"')); // Вивід на консоль в лапках, використовуючи метод concat(), який об'єднує рядки
// //                                         використовуємо '"'.concat(lastElement, '"') для об'єднання лапок ", значення character та ще одних лапок ".

//! =============================================
//* Task 9      ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ - в масив перезаписуємо вибрані елементи
//! =============================================

//* ф-ція getExtremeElements(array), приймає параметр array - масив елементів довільної довжини. Ф-ція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.
//* Оголошена ф-ція getExtremeElements(array)
//* Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
//* Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
//* Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає["apple", "banana"]

// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length - 1]];
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); // ["apple", "banana"]

//! =============================================
//?          split(delimiter)
//*               дозволяє перетворити рядок на масив, "розбивши" його по роздільнику delimiter.
//*               Якщо роздільник - це порожній рядок, отримаємо масив окремих символів.
//* Task 10       Роздільником може бути один або кілька символів.
// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]
// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]

// let myString = "Hello++world--JavaScript";
// let delimiterPattern = /[+-]+/; // Регулярний вираз, який визначає шаблон роздільників (+ або - повторюються один або більше разу)
// let myArray = myString.split(delimiterPattern);
// console.log(myArray); // Виведе: ['Hello', 'world', 'JavaScript']
//! =============================================

// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words
// результат поділу рядка message за роздільником delimiter - масив рядків.

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   console.log(words); // Вивід на консоль
//   // Change code above this line
//   return words;
// }

// splitMessage("Mango hurries to the train", " "); // ["Mango", "hurries", "to", "the", "train"]
// splitMessage("Mango", ""); // ["M", "a", "n", "g", "o"]
// splitMessage("best_for_week", "_"); // ["best", "for", "week"]

//! =============================================
//* Task 11       ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС  Порахувати кількість слів
//! =============================================

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
//  залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).
// Ця функція приймає рядок, що складається зі слів, розділених лише пробілами(параметр message) та
// ціну гравірування одного слова(параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// function calculateEngravingPrice(message, pricePerWord) {
// Change code below this line
// -- ВАРІАНТ-1 --
//     let wordEngraving = message.split(" ");
//     let numberWord = wordEngraving.length;
// -- ВАРІАНТ-2 --
//   let totalPrice = pricePerWord * message.split(" ").length; // двійна команда
//   //   console.log(totalPrice); // Вивід на консоль
//   return totalPrice;
// -- ВАРІАНТ-3 --
//   return message.split(" ").length * pricePerWord; // двійна команда з return-ом
//   // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); // 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); // 80

//! =============================================
//*    join(delimiter)              з'єднання елементів масиву в рядок.
//*             У рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.
//*             Тобто це зворотна операція методу рядків split(delimiter).
//*  Task 12         const words = ["JavaScript", "is", "amazing"];
//*                  console.log(words.join("")); // 'JavaScriptisamazing'
//*                  console.log(words.join(" ")); // 'JavaScript is amazing'
//*                  console.log(words.join("*")); // 'JavaScript*is*amazing'
//! =============================================

//* Доповни код функції makeStringFromArray(array, delimiter), щоб вона повертала
//* у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.
//*       Оголошена функція makeStringFromArray(array, delimiter)
//*       Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
//*       Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
//*       Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);
//   console.log(string); // Вивід на консоль
//   // Change code above this line
//   return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "); //  "Mango hurries to the train"
// makeStringFromArray(["M", "a", "n", "g", "o"], ""); //  "Mango"
// makeStringFromArray(["top", "picks", "for", "you"], "_"); //  "top_picks_for_you"

//! =============================================
//*          ЗАДАЧА: ГЕНЕРАТОР SLUG
//*              Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.
//* Task 13      Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці
//*                 для створення читабельних URL - адрес.
//*               Наприклад, замість адресного рядку mysite.com/posts/1q8fh74tx,
//*               можна зробити slug з назви статті - адреса буде: mysite.com/posts/arrays-for-begginers.
//! =============================================

//* Напиши ф-цію slugify(title), яка приймає заголовок статті title, і повертає slug, створений з цього рядка.
//*       Значенням параметра title будуть рядки, слова яких розділені лише пробілами
//*           Усі символи slug повинні бути у нижньому регістрі
//*           Всі слова slug повинні бути розділені тире

// function slugify(title) {
//   // Change code below this line
//   return title.toLowerCase().split(" ").join("-");
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers")); //  "arrays-for-begginers"
// console.log(slugify("English for developer")); //  "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); //  "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); //  "how-to-become-a-junior-developer-in-two-weeks"

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
