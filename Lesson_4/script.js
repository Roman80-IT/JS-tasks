//            node Lesson_4/script           - запуск через термінал ≡

//! ============================================================================
//?        виклик функції       посилання на функцію
//*                Ф-ції не відрізняються від чисел, рядків або масивів - це просто спеціальний тип даних (об'єкт вищого порядку),
//*                значення, яке можна зберігати у змінній або передавати у якості аргументу в іншу ф-цію.
//                  function greet(name) {
//                    return `Ласкаво просимо ${name}.`;     }
//*                   // Викликаємо функцію greet        // і виводимо результат у консоль
//?                  console.log(greet("Mango"));
//* Task 1            // Ласкаво просимо Манго.

//*                   // Виводимо функцію 'greet' // у консоль, не викликаючи її
//?                  console.log(greet);
//*                    /*
//*                  ƒ greet() {
//*                    return `Ласкаво просимо ${name}.`;      }
//*                У першому лозі ми викликаємо ф-цію greet за допомогою круглих дужок, і в консоль виводиться результат її виконання.
//*                У другому лозі передається посилання на ф-цію, а не результат її виклику (відсутні круглі дужки), тому в консоль виводиться її тіло.
//*                  Це означає, що ф-цію можна присвоїти у змінну або передати як аругмент іншої ф-ції.
//! ============================================================================

//*   Доповни код, щоб у змінній 'result' був результат виконання ф-ції 'makePizza',
//*   а у змінній 'pointer' було посилання на ф-цію 'makePizza'
//*        Значення змінної result отримане за допомогою виклику функції
//*        Значення змінної pointer - це посилання на функцію makePizza

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;
// console.log(result);
// console.log(pointer);

//! ============================================================================
//?           Ф-ція зворотного виклику (callback, колбек)
//* Task 2                - передається іншій ф-ції як аргумент, а та, в свою чергу, викликає передану ф-цію.
//                    function greet(name) {
//                      console.log(`Ласкаво просимо ${name}.`);
//                    }
//?                Ф-ція вищого порядку (higher order function)
//*               - ф-ція, яка приймає у якості параметрів інші ф-ції або повертає ф-цію у якості результату.
//                    function registerGuest(name, callback) {
//                      console.log(`Реєструємо гостя ${name}.`);
//                      callback(name);
//                    }
//                   registerGuest("Mango", greet);
//*                Ми передали посилання на ф-цію 'greet' як аргумент, тому вона буде присвоєна в параметр 'callback'
//*                і викликана всередині ф-ції 'registerGuest' за допомогою круглих дужок.
//*                Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде ф-ція.
//! ============================================================================

//*  Доповни ф-цію makeMessage, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик.
//*  Ф-ція 'deliverPizza' або 'makePizza' буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.
//*        Ф-ція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

//! Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
//* function makeMessage(pizzaName) {
//*   return;
//* }
// console.log(makeMessage("Royal Grand", makePizza)); // "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza)); // "Delivering Ultracheese pizza."

//! ============================================================================
//?         інлайн колбек-функція
//*                    маленька колбек-функція, використовуються тільки для передачі аргументом,
//*                   її можна оголосити безпосередньо на момент виклику ф-ції, в яку передаємо колбек.
//*                 Така ф-ція буде доступна тільки у якості значення параметра і більше ніде в коді.
//                        function registerGuest(name, callback) {
//                          console.log(`Реєструємо гостя ${name}.`);
//                          callback(name);           }
//* Task 3                 Передаємо інлайн-функцію greet у якості колбека
//                        registerGuest("Mango", function greet(name) {
//                          console.log(`Ласкаво просимо ${name}.`);         });
//*                        Передаємо інлайн-функцію notify у якості колбека
//                        registerGuest("Poly", function notify(name) {
//                          console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);         });
//! ============================================================================

//* Доповни другий виклик ф-ції makePizza(pizzaName, callback), передавши 2-им аргументом інлайн колбек-функцію eatPizza(pizzaName),
//*    яка логує рядок "Eating pizza <назва піци>".
//* Оголошена ф-ція makePizza, яка приймає 2 параметри
//* Другим аргументом під час виклику makePizza("Ultracheese") передана ф-ція eatPizza з єдиним параметром pizzaName

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
//! Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

//! ============================================================================
//?            Ф-ція може приймати довільну к-сть колбеків.
//*                    Наприклад, ми пишемо логіку прийняття дзвінків для телефону.
//*                    Програма повинна увімкнути автовідповідач, якщо абонент - недоступний, або з'єднати дзвінок в іншому випадку.
//*                    Доступність абонента будемо імітувати генератором випадкового числа, щоб між різними викликами ф-ції можна було отримати різні результати.
//                       function processCall(recipient) {
//                         //! Імітуємо доступність абонента випадковим числом
//                         const isRecipientAvailable = Math.random() > 0.5;

//                         if (!isRecipientAvailable) {
//                           console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//                           //! Логіка активації автовідповідача
//                         } else {
//                           console.log(`З'єднуємо з ${recipient}, очікуйте...`);      }      }
//                           //! Логіка прийняття дзвінка
//                       processCall("Mango");
//*                    Проблема такого підходу полягає у тому, що ф-ція processCall робить занадто багато і прив'язує перевірку доступності абонента
//*                       до 2-ох заздалегідь визначених дій. А, якщо в майбутньому, замість автовідповідача, потрібно буде залишати голограму?
//*                    Ми могли б написати ф-цію таким чином, щоб вона повертала якесь значення, і потім за результатом її виконання,
//* Task 4                робити перевірки і виконувати потрібний код. Але перевірки не стосуються зовнішнього коду і будуть його засмічувати.
//*                    Виконаємо рефакторинг ф-ції таким чином, щоб вона приймала 2 колбеки onAvailable і onNotAvailable, і викликала їх за умовою.
//                       function processCall(recipient, onAvailable, onNotAvailable) {
//                         //! Імітуємо доступність абонента випадковим числом
//                         const isRecipientAvailable = Math.random() > 0.5;
//                         if (!isRecipientAvailable) {
//                           onNotAvailable(recipient);
//                           return;      }
//                         onAvailable(recipient);       }
//                       function takeCall(name) {
//                         console.log(`З'єднуємо з ${name}, очікуйте...`);        }
//                         //! Логіка прийняття дзвінка
//                       function activateAnsweringMachine(name) {
//                         console.log(`Абонент ${name} недоступний, залиште повідомлення.`);     }
//                         //! Логіка активації автовідповідача
//                       function leaveHoloMessage(name) {
//                         console.log(`Абонент ${name} недоступний, записуємо голограму.`);       }
//                         //! Логіка запису голограми
//                       processCall("Mango", takeCall, activateAnsweringMachine);
//                       processCall("Poly", takeCall, leaveHoloMessage);
//*                    Колбеки застосовуються для обробки дій користувача на сторінці,
//*                      на момент обробки запитів на сервер, виконання заздалегідь невідомих ф-цій тощо.
//*                    У цьому і полягає їх суть - це ф-ції, призначені для відкладеного виконання.
//! ============================================================================

//* Необхідно написати логіку обробки замовлення піци.
//*   Виконай рефакторинг методу order, щоб він приймав 2-им і 3-ім параметром 2 колбеки onSuccess і onError.
//* Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//*    метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
//* Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//*    метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
//* Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Нічого там не міняй.

//* const pizzaPalace = {
//*   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//*   order(pizzaName) {},
//* };
//?  ------ Пряме порівняння: ------
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };
//?  ------ Непряме порівняння: ------
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//     return onSuccess(pizzaName);
//   },
// };
//! Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// // Method calls with callbacks

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError)); // "Your order is accepted. Cooking pizza Smoked."
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError)); // "Your order is accepted. Cooking pizza Four meats."
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError)); // "Error! There is no pizza with a name Big Mike in the assortment."
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError)); // "Error! There is no pizza with a name Vienna in the assortment."

//! ============================================================================
//?                 forEach(function callback(element, index, array)
//*                    Метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією.
//                       массив.forEach(function callback(element, index, array) {
//                        / Тіло колбек-функції /     });
//*                     Поелементо перебирає масив.
//*                     Викликає колбек-функцію для кожного елемента масиву.
//*                     Нічого не повертає.
//*                     Аргументи колбек-функції - це значення поточного елемента element, його індекс index і власне вихідний масив array.
//* Task 5              Можна оголошувати тільки необхідні параметри, найчастіше - це елемент, головне не забувати про їх порядок.
//                       const numbers = [5, 10, 15, 20, 25];
//                        //! Класичний for
//                       for (let i = 0; i < numbers.length; i += 1) {
//                         console.log(`Індекс ${i}, значення ${numbers[i]}`);     }
//                        //! Метод перебирання forEach
//                       numbers.forEach(function (number, index) {
//                         console.log(`Індекс ${index}, значення ${number}`);     });
//*                     Єдиним випадком, коли варто використовувати цикли for або for...of для перебирання масиву, - це задачі з перериванням виконання циклу.
//*                     Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.
//! ============================================================================
//? Загальна сума масиву
//* Ф-ція calculateTotalPrice(orderedItems) приймає параметр (orderedItems) - масив чисел,
//*   і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи ф-ції.
//*       Виконай рефакторинг ф-ції, щоб замість циклу for, вона використовувала метод forEach.
//* Для перебирання масиву orderedItems використаний метод 'forEach'

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//! Change code below this line
//* for (let i = 0; i < orderedItems.length; i += 1) {
//*   totalPrice += orderedItems[i];
//* }
//   orderedItems.forEach(function (element) {
//     totalPrice += element;
//   });
//   //! Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

//! ============================================================================
//?           forEach(function callback()         push()
//? Task 6          ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
//! ============================================================================

//* Ф-ція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву,
//*  які більші за значення параметра value.
//*    Виконай рефакторинг ф-ції, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//! Change code below this line
//* for (let i = 0; i < numbers.length; i += 1) {
//*   if (numbers[i] > value) {
//*     filteredNumbers.push(numbers[i]);
//*   }
//* }
// numbers.forEach(function (element) {
//   if (element > value) {
//     filteredNumbers.push(element);
//   }
// });
//! Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

//! ============================================================================
//?           forEach(function callback()          includes(element)       push()
//* Task 7         ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ
//! ============================================================================

//* Ф-ція getCommonElements(firstArray, secondArray) приймає 2 масиви довільної довжини,
//*  і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.
//* Виконай рефакторинг ф-ції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//! Change code below this line
//* for (let i = 0; i < firstArray.length; i += 1) {
//*   if (secondArray.includes(firstArray[i])) {
//*     commonElements.push(firstArray[i]);
//*   }
//* }
//* return commonElements;

// firstArray.forEach(function (element) {
//   if (secondArray.includes(element)) {
//     commonElements.push(element);
//   }
// });

// return commonElements;

//! Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //  [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //  [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //  [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //  [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

//! ============================================================================
//*                Стрілочні ф-ції мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду,
//*                        особливо коли ф-ція маленька або якщо вона використовується як колбек.
//*                       Усі стрілки створюються як ф-ціональний вираз, і якщо ф-ція - не анонімна, її необхідно присвоювати змінній.
//!                       Звичайне оголошення функції
//                       function classicAdd(a, b, c) {
//                         return a + b + c;     }
//!                       Те саме стрілочною функцією
//?                       const arrowAdd = (a, b, c) => {
//                         return a + b + c;        };
//* Task 8                Ключове слово 'function' не використовується, замість цього відразу зазначається оголошення параметрів, після нього - символ => і тіло ф-ції.
//*                       Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками рівності = і стрілкою =>.
//?                       const add = (a, b, c) => {
//                         return a + b + c;      };
//*                       Якщо параметр один, його можна оголошувати без круглих дужок.
//?                       const add = a => {
//                         return a + 5;       };
//*                       Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.
//?                       const greet = () => {
//                         console.log("Привіт!");       };
//! ============================================================================

//* Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
console.log(calculateTotalPrice(5, 100)); // 500
console.log(calculateTotalPrice(8, 60)); // 480
console.log(calculateTotalPrice(3, 400)); // 1200

// Change code below this line

function calculateTotalPrice(quantity, pricePerItem) {
  // Change code above this line
  return quantity * pricePerItem;
}

//! ============================================================================
//* Task 9
//! ============================================================================

//! ============================================================================
//* Task 10
//! ============================================================================

//! ============================================================================
//* Task 11
//! ============================================================================

//! ============================================================================
//* Task 12
//! ============================================================================

//! ============================================================================
//* Task 13
//! ============================================================================

//! ============================================================================
//* Task 14
//! ============================================================================

//! ============================================================================
//* Task 15
//! ============================================================================

//! ============================================================================
//* Task 16
//! ============================================================================

//! ============================================================================
//* Task 17
//! ============================================================================

//! ============================================================================
//* Task 18
//! ============================================================================

//! ============================================================================
//* Task 19
//! ============================================================================

//! ============================================================================
//* Task 20
//! ============================================================================

//! ============================================================================
//* Task 21
//! ============================================================================

//! ============================================================================
//* Task 22
//! ============================================================================

//! ============================================================================
//* Task 23
//! ============================================================================

//! ============================================================================
//* Task 24
//! ============================================================================

//! ============================================================================
//* Task 25
//! ============================================================================

//! ============================================================================
//* Task 26
//! ============================================================================

//! ============================================================================
//* Task 27
//! ============================================================================

//! ============================================================================
//* Task 28
//! ============================================================================

//! ============================================================================
//* Task 29
//! ============================================================================

//! ============================================================================
//* Task 30
//! ============================================================================

//! ============================================================================
//* Task 31
//! ============================================================================

//! ============================================================================
//* Task 32
//! ============================================================================

//! ============================================================================
//* Task 33
//! ============================================================================

//! ============================================================================
//* Task 34
//! ============================================================================

//! ============================================================================
//* Task 35
//! ============================================================================

//! ============================================================================
//* Task 36
//! ============================================================================
