//*    node Lesson_2/script     - запуск через термінал ≡

//? Вивід на консоль в лапках:
// console.log("Name =", '"' + name + '"');
// console.log("Name =", '"'.concat(name, '"')); // Вивід на консоль в лапках, використовуючи метод concat(), який об'єднує рядки
//                          використовуємо '"'.concat(name, '"') для об'єднання лапок ", значення name та ще одних лапок ".

//? array[array.length - 1]; останній елемент масиву

//? Number();
// Якщо впевнені, що всі елементи масиву мають числовий тип даних або можуть бути перетворені на числа в задачі, тоді не обов'язково використовувати Number().
// В цьому випадку можна просто додавати значення елементів масиву без додаткового перетворення.

//! =============================================

//? Оператор typeof
//* Використовується для отримання типу значення змінної. Повертає на місце свого виклику тип значення змінної, вказаного після нього - рядок, в якому вказано тип.
//* let username;
// console.log(typeof username); // "undefined"
//* let inputValue = null;
// console.log(typeof inputValue); // "object"
//* const quantity = 17;
// console.log(typeof quantity); // "number"
//* const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"
//* const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"

//! =============================================
//?    split()           розбиває рядок на масив:    myString.split(delimiter)
//?    /[+-]+/           Регулярний вираз - шаблон роздільників
//! =============================================

//* Метод split() розбиває рядок на масив, використовуючи роздільники - повинні бути декілька символів, розміщених не поряд:
//*      let myString = "Hello++world--JavaScript";
//*      let delimiterPattern = /[+-]+/; // Регулярний вираз, який визначає шаблон роздільників (+ або - повторюються один або більше разу)
//*      let myArray = myString.split(delimiterPattern);
//*      console.log(myArray); // Виведе: ['Hello', 'world', 'JavaScript']

//* У цьому прикладі, рядок myString, містить текст, розділений  '++' та '--'.
//*     регулярний вираз / [+-] + / - шаблон роздільників,
//*     де + та - повторюються один або більше разу. Потім методом split() з аргументом delimiterPattern розбиваємо рядок
//*        на масив myArray, який містить окремі частини рядка - ['Hello', 'world', 'JavaScript'].

//* Звичайні вирази (регулярні вирази) - це шаблони, які використовуються для знаходження та відповідного відповідних текстових рядків. Регулярні вирази використовуються у багатьох мовах програмування, включаючи JavaScript, для роботи зі строками.
//* Давайте розглянемо детально кожен символ регулярного виразу /[+-]+/:
//* [+-]: Це набір символів. Вказує, що відповідний символ може бути + або -. З квадратних дужок ([]) вираження означають набір допустимих символів, а + та - - це символи, які можуть бути використані.
//* +: Це квантифікатор. Позначає, що попередній символ або група символів може повторюватися один або більше разів. У нашому випадку попередній символ - це [+-], тому [+-]+ означає, що символ + або - може повторюватися один або більше разу.
//* Таким чином, регулярний вираз /[+-]+/ шукає послідовність символів, які можуть містити один або більше символів + або -. У нашому прикладі, він буде знаходити такі послідовності в текстовому рядку, якщо вони є присутніми.
//* Наприклад:
//* "+" - відповідає шаблону [+-]+, тому буде знайдений.
//* "---" - також відповідає шаблону [+-]+, тому буде знайдений.
//* "Hello++world--JavaScript" - знайде дві послідовності ++ та --, оскільки вони відповідають шаблону [+-]+.

//? Вираз /[+-]+/ у регулярних виразах в JavaScript обгортають символами / для позначення початку і кінця регулярного виразу:
//*     Початок і Кінець регулярного виразу позначений символом /.
//*     [+-]+ - це сам шаблон (pattern) регулярного виразу, який містить набір символів та квантифікатор.
//* Таке обгортання виразу символами / є стандартною практикою у багатьох мовах програмування,
//*  робить вираз більш зрозумілим і простим у сприйнятті, розрізняє вираз від інших частин коду.

//! =============================================
//? Task 1K      патерн «раннє повернення» 'return'
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
//? Task 1       патерн «раннє повернення» 'return'
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
//? Task 2      патерн «раннє повернення» 'return'
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
//?       [індекс]
//*              Для доступу до значення елемента масиву застосовують синтаксис квадратних дужок масив[індекс].
//*              Між ім'ям змінної масиву і квадратними дужками не повинно бути пробілу.
//* Task 5             const planets = ["Earth", "Mars", "Venus"];
//*                    planets[0]; // "Earth"
//*                    planets[2]; // "Venus"
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
//?             Рядки і масиви
//*                 Звернення до конкретного символу в рядку за допомогою індексу - використовуючи квадратні дужки[]
//* Task 6K         індекс символу в межах - від '0' до 'length - 1'
//?            .split(''); // Розбиваємо рядок на масив символів
//?            .join(''); // З'єднуємо масив символів назад у рядок
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
//? Task 6    Зміна символу в рядку
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
//?          властивість 'length' - довжина масиву (к-сть його елементів)
//*  Task 7       це динамічна величина, яка змінюється автоматично під час додавання або видалення елементів.
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
//?          length - 1   останній елемент - довжина масиву завжди на одиницю більша за індекс останнього елемента.
//* Task 8                const planets = ["Earth", "Mars", "Venus"];
//*                       const lastElementIndex = planets.length - 1;
//*                       planets[lastElementIndex]; // "Venus"
//! =============================================
//*          Оголоси дві змінні:
//* lastElementIndex	  (індекс останнього елемента масиву fruits через довжина_масиву - 1
//* lastElement	          (Значення останнього елемента масиву)
//* lastElementIndex  //  3
//* lastElement       //  "banana"

// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log("index of last items =", lastElementIndex); // Вивід на консоль
// console.log("lastElement =", '"' + lastElement + '"'); // Вивід на консоль в лапках
// console.log("lastElement =", '"'.concat(lastElement, '"')); // Вивід на консоль в лапках, використовуючи метод concat(), який об'єднує рядки
// //                                         використовуємо '"'.concat(lastElement, '"') для об'єднання лапок ", значення character та ще одних лапок ".

//! =============================================
//? Task 9      ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ - в масив перезаписуємо вибрані елементи
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
//*               перетворює рядок на масив, "розбивши" його по роздільнику delimiter.
//*               Якщо роздільник - це порожній рядок, отримаємо масив окремих символів.
//*               Роздільником може бути один або кілька символів.
//*             const name = "Mango";
//* Task 10     console.log(name.split("")); // ["M", "a", "n", "g", "o"]
//*             const message = "JavaScript essentials";
//*             console.log(message.split(" ")); // ["JavaScript", "essentials"]
//?         Роздільник - кілька символів:
//*           let myString = "Hello++world--JavaScript";
//*           let delimiterPattern = /[+-]+/; // Регулярний вираз, який визначає шаблон роздільників (+ або - повторюються один або більше разу)
//*           let myArray = myString.split(delimiterPattern);
//*           console.log(myArray); // Виведе: ['Hello', 'world', 'JavaScript']
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
//? Task 11       ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС  Порахувати кількість слів
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
//?    join(delimiter)              з'єднання елементів масиву в рядок.
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
//?         ГЕНЕРАТОР SLUG
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
//?        КОПІЯ МАСИВУ   Метод slice(begin, end) повертає новий масив,
//*            що містить копію частини вихідного масиву, не змінюючи його.
//*            Копія робиться від begin і до, (але не включно), end - індекси елементів вихідного масиву.
//*              Якщо begin та end не вказані - буде створена повна копія вихідного масиву.
//*              Якщо не вказаний end, копіювання буде від start до кінця вихідного масиву.
//* Task 14      Якщо значення start від'ємне, а end не вказане, то будуть скопійовані останні N елементів.
//*                   const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
//*                   console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
//*                   console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
//*                   console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
//*                   console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
//*                   console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']
//                    const nonExtremeEls = fruits.slice(1, fruits.length - 1);
//! =============================================

//* Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
//*       firstTwoEls - масив із перших двох елементів
//*       nonExtremeEls - масив з усіх елементів, крім першого та останнього
//*       lastThreeEls - масив із трьох останніх елементів
//* lastThreeEls присвоєна частина масиву fruits після застосування методу slice з правильними аргументами

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(fruits); // fruits -  ["apple", "plum", "pear", "orange", "banana"]
// console.log(firstTwoEls); // firstTwoEls -  ["apple", "plum"]
// console.log(nonExtremeEls); // nonExtremeEls -  ["plum", "pear", "orange"]
// console.log(lastThreeEls); // lastThreeEls - ["pear", "orange", "banana"]

//! =============================================
//?        concat
//*              Метод concat для об'єднання 2-ох або більше масивів. Не змінює масив на якому викликається,
//*              а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.
//*                  const firstArray = ["Mercury", "Venus", "Earth"];
//* Task 15          const secondArray = ["Mars", "Jupiter"];
//*                  const thirdArray = ["Saturn", "Uranus", "Neptune"];
//*                  const allPlanets = firstArray.concat(secondArray, thirdArray);
//*                  console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
//*                  console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
//! =============================================

//* Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.
//* Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(oldClients); //  ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); //  ["Peach", "Houston"]
// console.log(allClients); //  ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]

//! =============================================
//? Task 16     КОМПОЗИЦІЯ МАСИВІВ - новий масив з обмеженням по к-сті елементів
//*             concat   slice
//! =============================================

//* ф-ція makeArray(firstArray, secondArray, maxLength) створює новий масиву з вихідних firstArray і secondArray.
//*  Параметр maxLength - макс. допустима довжина.
//*      Якщо к-сть елементів нового масиву більша за maxLength, ф-ція повинна повернути копію масиву довжиною maxLength елементів.
//*      інакше ф-ція повинна повернути масив повністю.

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   // ---- ВАРІАНТ 1 ----
//   //   let newArray = firstArray.concat(secondArray);
//   //   let editArray = newArray.slice(0, maxLength);
//   //   return editArray;
// ---- ВАРІАНТ 2 ----
//   return firstArray.concat(secondArray).slice(0, maxLength);
//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); //  ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); //  ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); //  ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); //  ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); //  ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); //  []

//! =============================================
//?         ЦИКЛИ
//*          Цикли використовуються для багаторазового повторення коду. Оголошення циклу for складається з трьох виразів.
//*                for (Ініціалізація; Умова; Пост - вираз) {
//*                    Тіло циклу
//? Task 17        }
//*   Ініціалізація - виконується 1 раз перед початком циклу - для створення змінної-лічильника і встановлення її початкового значення.
//*   Умова - вираз, що оцінюється перед кожною ітерацією (повторенням) циклу - Тіло циклу виконується,
//*     коли вираз приводиться до true, а завершується, якщо false.
//*   Пост-вираз - для оновлення змінної-лічильника, виконується в кінці кожного циклу, перед перевіркою умови.
//*   Тіло - набір інструкцій для виконання на кожному повторенні. Виконується, якщо вираз умови приводиться до true.
//*        for (let i = 0; i <= 20; i += 5) {
//*           console.log(i);
//*        }
//*   оголошується змінна i - лічильник циклу, ініціалізується значенням 0, і цикл виконується (його тіло) доти,
//*   доки i <= 20 (умова приводиться до true). Після кожної ітерації лічильник збільшується на 5.
//! =============================================

//*   Доповни цикл for так, щоб він логував всі цілі числа в діапазоні від start до end включно.
//*        Початкове значення змінної i (лічильник циклу) дорівнює 3
//*        Умова циклу приводиться до true доти, доки 'i <= 7'
//*   На кожній ітерації значення змінної 'i' збільшується на одиницю
//*   Виведення у консоль змінної 'i' покаже числа 3, 4, 5, 6, 7

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

//! =============================================
//? Task 18      СУМА ЧИСЕЛ (ЦИКЛ FOR)
//! =============================================

//* ф-ція calculateTotal(number), яка приймає ціле число (параметр number) і повертає
//* суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// ---- ВАРІАНТ 1 ----
// function calculateTotal(number) {
//   let k = 0;
//   for (let i = 1; i <= number; i += 1) {
//     k = k + i;
//   }
//   return k; // - за межами циклу
// }
// ---- ВАРІАНТ 2 ----
// function calculateTotal(number) {
//   let k = 0;
//   for (let i = 1; i <= number; i++) {
//     k += i;
//   }
//   return k;
// }

// console.log(calculateTotal(1)); //  1
// console.log(calculateTotal(3)); //  6
// console.log(calculateTotal(7)); //  28
// console.log(calculateTotal(18)); //  171
// console.log(calculateTotal(24)); //  300

//! =============================================
//?       Цикл for - для ітерації по масиву - «перебрати» його поелементно:
//*            const planets = ["Earth", "Mars", "Venus"];
//*            for (let i = 0; i < planets.length; i += 1) {
//? Task 19    console.log(planets[i]);
//*            }
//*       Для доступу до елементів використовується синтаксис квадратних дужок масив[індекс],
//*       де індекс - це значення лічильника циклу від 0 і до останнього індексу масиву, який на одиницю менший за довжину масиву.
//? array[array.length - 1]; останній елемент масиву
//! =============================================

// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.
//     Початкове значення змінної i = 0 (лічильник циклу)
//        Умова циклу приводиться до true доти, доки i < 4
//        На кожній ітерації значення змінної i збільшується на одиницю
//        В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
//        В тілі циклу for використовується виведення у консоль змінної fruit

// const fruits = ["apple", "plum", "pear", "orange"];
// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//! =============================================
//? Task 20         ОБЧИСЛЕННЯ СУМИ ПОКУПКИ
//?            цикл for () {}
//! =============================================
//* функція calculateTotalPrice(order) приймає order - масив чисел, і обчислює загальну суму його елементів.
//* Загальна сума елементів повинна зберігатися у змінній total.
// ---- ВАРІАНТ 1 ----
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total = total + order[i];
//   }
//   return total;
// }
// ---- ВАРІАНТ 2 ----
// function coo(array) {
//   let sum = 0;
//   array.forEach((i) => (sum += i));
//   return sum;
// }
// console.log(coo([2, 4, 3]));

// console.log(calculateTotalPrice([12, 85, 37, 4])); //     138
// console.log(calculateTotalPrice([164, 48, 291])); //      503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //  1116

//! =============================================
//? Task 21   ПОШУК НАЙДОВШОГО СЛОВА
//?    split()           розбиває рядок на масив:    myString.split(delimiter)
//?    /[+-]+/           Регулярний вираз - шаблон роздільників
//?    цикл for () {}
//?    if () {}        .length
//! =============================================

//* ф-ція findLongestWord(string) приймає довільний рядок, що складається тільки зі слів,
//*   розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   const word = string.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < word.length; i += 1) {
//     if (word[i].length > longestWord.length) {
//       longestWord = word[i];
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //  jumped
// console.log(findLongestWord("Google do a roll")); //  Google
// console.log(findLongestWord("May the force be with you")); //  force

//! =============================================
//?          push()
//* Task 22       дозволяє додати один або кілька елементів в кінець масиву,
//*               без необхідності вказувати індекси
//! =============================================

//* ф-ція createArrayOfNumbers(min, max) повертає масив усіх цілих чисел від значення min до max.
//* В циклі for використовувався метод push

// ---- ВАРІАНТ 1 ----
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   const difference = max - min + 1;
//   for (let i = 0; i < difference; i += 1) {
//     numbers.push(min + i);
//   }
//   return numbers;
// }
//! =============================================
// ---- ВАРІАНТ 2 ----
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3)); //  [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); //  [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); //  [29, 30, 31, 32, 33, 34]

//! =============================================
//? Task 23        ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
//! =============================================

//* ф-ція filterArray(numbers, value) приймає масив чисел (numbers) і повертає новий масив,
//*  в якому будуть тільки ті елементи масиву numbers, які > value(число).
//* В циклі for використовувався метод push

// function filterArray(numbers, value) {
//   const valueNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       valueNumbers.push(numbers[i]);
//     }
//   }
//   return valueNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //  [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //  [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //  []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //  [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //  [24, 41, 76]

//! =============================================
//?       includes(value)
//*  Task 24        перевіряє, чи присутній в масиві елемент зі значенням value, і повертає true або false
//*                   сфера застосування - коли необхідно перевірити, чи присутній елемент в масиві,
//*                   і не важлива його позиція(індекс).
//! =============================================

//* Ф-ція checkFruit(fruit) приймає рядок з назвою фрукта (fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
//*    фрукт присутній в масиві, то функція повертає true;
//*    фрукт відсутній в масиві, то функція повертає false.
//* використовувався метод includes

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum")); //  true
// console.log(checkFruit("mandarin")); // false
// console.log(checkFruit("pear")); //  true
// console.log(checkFruit("Pear")); //  false
// console.log(checkFruit("apple")); //  true

//! =============================================
//?        СПІЛЬНІ ЕЛЕМЕНТИ
//*               елементи, які присутні у всіх масивах
//* Task 25            Наприклад, у двох масивах[1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5.
//*                    А числа 0, 1 і 8 присутні тільки в одному з масивів.
//?        for       includes         push
//! =============================================
//!      if (array1[i] === array2[i]) {              - порівнювати елементи з однаковим індексом некоректно, особливо коли масиви мають різну довжину.
//! =============================================
//* Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
//* В циклі for використовувалися методи includes і push

// function getCommonElements(array1, array2) {
//   const commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }
//   return commonElements;
// }

// ----- Просунутий Вірний варіант циклу -----
// function getCommonElements(array1, array2) {
//   const commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     const currentElement = array1[i];
//     let found = false;
//     for (let j = 0; j < array2.length; j++) {
//       if (currentElement === array2[j]) {
//         found = true;
//         break; // важливо зупинити цикл при знаходженні true
//       }
//     }
//     if (found) {
//       commonElements.push(currentElement);
//     }
//   }
//   return commonElements;
// }

// ----- Вірний варіант циклу -----
// function getCommonElements(array1, array2) {
//   const commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     const currentElement = array1[i];
//     for (let j = 0; j < array2.length; j++) {
//       if (currentElement === array2[j]) {
//         commonElements.push(currentElement);
//       }
//     }
//   }
//   return commonElements;
// }

// ----- Невірний варіант циклу -----
// function getCommonElements(array1, array2) {
//   const numbers = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === array2[i]) {
//       //!  порівнювати елементи з однаковим індексом некоректно, особливо коли масиви мають різну довжину.
//       numbers.push(array1[i]);
//     }
//   }
//   return numbers;
// }

// ----- Віталій (вірний варіант циклу) -----

// function getCommonElements(array1, array2) {
//   const result = [];

//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         result.push(array2[j]);
//       }
//     }
//   }
//   return result;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //              [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //       [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //    [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //    [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //          []

//! =============================================
//?            for...of
//*            цикл, який перебирає ітерабельні об'єкти, такі як масиви та рядки.
//*               буде виконуватися для кожного елемента - це заміна циклу for, якщо не потрібен доступ до лічильника ітерації.
//?               for (const variable of iterable) {      variable - змінна, яка буде зберігати значення елемента на кожній ітерації
//?                 тіло цикла                           iterable - колекція, яка містить ітерабельні елементи, наприклад масив
//? Task 26       }
//*             const planets = ["Earth", "Mars", "Venus"];
//*             for (const planet of planets) {
//*               console.log(typeof planet);
//*               console.log(planet);    }
//! =============================================

//* Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

//* function calculateTotalPrice(order) {
//*   let total = 0;
//*   for (let i = 0; i < order.length; i += 1) {
//*     total += order[i];
//*   }
//*   return total;
//* }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const item of order) {
//     total += Number(item); // Number() не обовязково
//   }
//   return total;
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const item of order) {
//     total += item;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //  138
// console.log(calculateTotalPrice([164, 48, 291])); //  503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //  1116
// console.log(calculateTotalPrice([])); //  0

//! =============================================
//* Task 27       ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0   цикл for..of
//! =============================================

//* Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

//* function filterArray(numbers, value) {
//*   const filteredNumbers = [];
//*   for (let i = 0; i < numbers.length; i += 1) {
//*     const number = numbers[i];
//*     if (number > value) {
//*       filteredNumbers.push(number);
//*     }
//*   }
//*   return filteredNumbers;
//* }

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const item of numbers) {
//     if (item > value) {
//       filteredNumbers.push(item);
//     }
//   }
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //  [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //  [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //  []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //  [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //  [24, 41, 76]

//! =============================================
//?             %
//?         повертає цілочисельну остачу від ділення
//* Task 28    5 % 1 = 0;      5 % 5 = 0;
//*            5, поділене на 1, дорівнює 5, а остача - 0
//*            5 % 3 = 2;
//*            5, поділене на 3, дорівнює 1, а остача - 5-3 = 2
//! =============================================
// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a); //  0
// console.log(b); //  1
// console.log(c); //  3
// console.log(d); //  5
// console.log(e); //  2
//! =============================================
//? Task 29      ПАРНІ ЧИСЛА
//*           ділиться на 2 без остачі (10 % 2 === 0)
//! =============================================

//* ф-ція getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.
//* Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }

// console.log(getEvenNumbers(2, 5)); //  [2, 4]
// console.log(getEvenNumbers(3, 11)); //  [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); //  [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); //  [8]
// console.log(getEvenNumbers(7, 7)); //  []

//! =============================================
//?         break
//*             оператор break припиняє виконання циклу і передає управління на рядок за його тілом.
//*               У прикладі шукаємо число 3. Щойно виконається умова if, цикл буде перерваний:
//*                for (let i = 0; i <= 5; i += 1) {
//* Task 30          console.log(i);
//*                  if (i === 3) {
//*                    console.log("Знайшли число 3, перериваємо виконання циклу");
//*                    break;
//*                  }
//*                } console.log("Лог після циклу");
//! =============================================

// у змінну number записується перше число від start до end, яке ділиться на 5 без остачі.
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     // console.log(
//     //   `Знайшли число ${number}, яке ділиться на 5, перериваємо виконання циклу!`
//     // );
//     break;
//   }
// }

//! =============================================
//?           break          return
//*           оператор break припиняє виконання лише циклу, а не ф-ції
//*           Для того щоб переривати виконання відразу циклу і ф-ції, є оператор return.
//*             У прикладі шукаємо число 3. Щойно виконається умова if, робимо повернення, яке перерве виконання циклу і функції.
//*                function fn() {
//*                  for (let i = 0; i <= 5; i += 1) {
//*                    console.log(i);
//* Task 31              if (i === 3) {
//*                      console.log(
//*                        "Знайшли число 3, робимо повернення, перериваючи цикл і функцію"
//*                      );
//*                      return i;
//*                    }
//*                  }
//*                  Цей console.log не виконається:
//*                  console.log("Лог після циклу в тілі функції");
//*                }
//*              const result = fn();
//*              console.log("Лог після виходу з функції");
//*              console.log(`Результат виконання функції ${result}`);
//! =============================================

//* Виконай рефакторинг ф-ції, щоб вона:
//*           повертала перше число від start до end, яке ділиться на divisor без остачі
//*           не використала оператор break
//*           не використала змінну number

//* function findNumber(start, end, divisor) {
//*   let number;
//*   for (let i = start; i < end; i += 1) {
//*     if (i % divisor === 0) {
//*       number = i;
//*       break;
//*     }
//*   }
//*   return number;
//* }

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log(findNumber(2, 6, 5)); //      5
// console.log(findNumber(8, 17, 3)); //     9
// console.log(findNumber(6, 9, 4)); //      8
// console.log(findNumber(16, 35, 7)); //    21

//! =============================================
//? Task 32      ФУНКЦІЯ INCLUDES()
//*     Агалог    масив.includes(значення)
//! =============================================

//* Напиши ф-цію, яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
//* У ф-ції includes використовується for, return, але не метод масиву includes

// ----- ВАРІАНТ 1 -----
// function includes(array, value) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// ----- СКОРОЧЕНИЙ ЗАПИС -----
// function includes(array, value) {
//   for (let i = 0; i < array.length; i++) if (array[i] === value) return true;
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3)); //   true
// console.log(includes([1, 2, 3, 4, 5], 17)); //   false
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// ); //   true
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// ); //   false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum")); //   true
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); //   false

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
// нам потрібно відтворити такий код:
// *
// **
// ***
// ****
// ****
// ***
// **
// *
// як це зробити через цикли?

// --- ВАРІАНТ1 ---
// for (let i = 1; i <= 4; i++) {
//   console.log("*".repeat(i));
// }

// for (let i = 4; i >= 1; i--) {
//   console.log("*".repeat(i));
// }

// --- ВАРІАНТ2 ---
// const n = 4; // Задайте бажану кількість рядків
// for (let i = 1; i < 2 * n; i++) {
//   if (i <= n) {
//     console.log("*".repeat(i));
//   } else {
//     console.log("*".repeat(2 * n - i));
//   }
// }
