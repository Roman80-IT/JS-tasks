//            node Lesson_4/script           - запуск через термінал ≡

//  Number()  - "наверніка" перетворить рядкові значення на числа

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
//?           forEach(function callback()          includes()       push()
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
//?        const add = (a, b) => {
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

// //! Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   //* function calculateTotalPrice(quantity, pricePerItem) {
//   //! Change code above this line
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200

//! ============================================================================
//?      const add = (a, b) =>
//* Task 9      неявне повернення
//! ============================================================================

//* Виконай рефакторинг ф-ції calculateTotalPrice(), щоб вона використовувала неявне повернення.
//*       Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
//*       У ф-ції використане неявне повернення

//! Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// //! Change code above this line

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200

//! ============================================================================
//?      forEach()       const add = (a, b) =>      Number()
//*            Анонімні стрілочні ф-ції відмінно підходять як колбеки для перебираючих методів масиву завдяки коротшому синтаксису оголошення,
//*                 особливо, якщо не потрібне тіло функції.
//                    const numbers = [5, 10, 15, 20, 25];
//!                    Оголошення функції
//                    numbers.forEach(function (number, index) {
//                      console.log(`Індекс ${index}, значення ${number}`);
//                    });
//! Task 10            Анонімна стрілочна функція
//                    numbers.forEach((number, index) => {
//                      console.log(`Індекс ${index}, значення ${number}`);
//                    });
//*                 Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання.
//*                 Це варто робити, якщо одна ф-ція використовується у декількох місцях програми або якщо вона громіздка.
//                    const numbers = [5, 10, 15, 20, 25];
//                    const logMessage = (number, index) => {
//                      console.log(`Індекс ${index}, значення ${number}`);
//                    };
//                    numbers.forEach(logMessage);
//! ============================================================================

//*  Виконай рефакторинг ф-ції calculateTotalPrice(orderedItems), замінивши її на стрілочну ф-цію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну ф-цію.
//* Змінній calculateTotalPrice присвоєна стрілочна ф-ція з параметром (orderedItems)
//* Для перебирання масиву orderedItems використаний метод forEach
//* Колбек для методу forEach - це стрілочна функція

//! Change code below this line
//* function calculateTotalPrice(orderedItems) {
//*   let totalPrice = 0;

//*   orderedItems.forEach(function (item) {
//*     totalPrice += item;
//*   });

//*   return totalPrice;
//* }
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += Number(item);
//   });
//   return totalPrice;
// };
//! Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4])); //  138
// console.log(calculateTotalPrice([164, 48, 291])); //  503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //  1116

//! ============================================================================
//?      forEach()       const add = (a, b) =>
//* Task 11        ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
//! ============================================================================

//* Заміни оголошення ф-ції filterArray() і колбек для методу forEach() на стрілочні ф-ції.
//*    Змінній filterArray присвоєна стрілочна функція з параметрами (numbers, value)
//*    Для перебирання масиву numbers використаний метод forEach
//*    Колбек для методу forEach - це стрілочна функція

//! Change code below this line
//* function filterArray(numbers, value) {
//*   const filteredNumbers = [];
//*   numbers.forEach(function (number) {
//*     if (number > value) {
//*       filteredNumbers.push(number);
//*     }
//*   });
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//! Change code above this line
//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //  [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //  [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //  []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //  [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //  [24, 41, 76]

//! ============================================================================
//* Task 12      СПІЛЬНІ ЕЛЕМЕНТИ 2.0
//! ============================================================================

//* Заміни оголошення ф-ції getCommonElements() і колбек для методу forEach() на стрілочні ф-ції.
//*    Змінній getCommonElements присвоєна стрілочна функція з параметрами (firstArray, secondArray)
//*    Для перебирання масиву firstArray використаний метод forEach
//*    Колбек для методу forEach - це стрілочна функція

//! Change code below this line
//* function getCommonElements(firstArray, secondArray) {
//*   const commonElements = [];
//*   firstArray.forEach(function (element) {
//*     if (secondArray.includes(element)) {
//*       commonElements.push(element);       }     });

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   //! Change code above this line
//   return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4])); //  [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //  [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //  [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //  [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //  []

//! ============================================================================
//?    Чиста ф-ція (pure function)        push()
//*             Ф-ція з побічними ефектами - це ф-ція, яка в процесі виконання може змінювати або використовувати глобальні змінні,
//*                  змінювати значення аргументів посилального типу, виконувати операції введення - виведення тощо.
//                      const dirtyMultiply = (array, value) => {
//                        for (let i = 0; i < array.length; i += 1) {
//                          array[i] = array[i] * value;
//                        }
//                      };
//                      const numbers = [1, 2, 3, 4, 5];
//                      dirtyMultiply(numbers, 2);
//!                      Відбулася мутація вихідних даних - масиву numbers
//                      console.log(numbers); // [2, 4, 6, 8, 10]
//*                      Ф-ція dirtyMultiply(array, value) множить кожен елемент масиву array на число value. Вона змінює (мутує) вихідний масив за посиланням.
//* Task 13              Чиста ф-ція (pure function) - це ф-ція, результат якої залежить тільки від значень переданих аргументів.
//*                      За умови однакових аргументів вона завжди повертає один і той самий результат, і не має побічних ефектів, тобто не змінює значення аргументів.
//*                      Напишемо реалізацію чистої функції множення елементів масиву, що повертає новий масив, не змінюючи вихідний.
//                      const pureMultiply = (array, value) => {
//                        const newArray = [];
//                        array.forEach((element) => {
//                          newArray.push(element * value);
//                        });
//                        return newArray;
//                      };
//                      const numbers = [1, 2, 3, 4, 5];
//                      const doubledNumbers = pureMultiply(numbers, 2);
//!                      Мутація вихідних даних не відбулася
//                      console.log(numbers); // [1, 2, 3, 4, 5]
//!                      Функція повернула новий масив зі зміненими даними
//                      console.log(doubledNumbers); // [2, 4, 6, 8, 10]
//! ============================================================================

//* Ф-ція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.
//*   Виконай рефакторинг ф-ції, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
//*     Оголошена функція changeEven(numbers, value)
//*     Ф-ція changeEven не змінює значення параметра numbers

//?        ------- ВАРІАНТ1  for --------
// function changeEven(numbers, value) {
//! Change code below this line
//*   for (let i = 0; i < numbers.length; i += 1) {
//*     if (numbers[i] % 2 === 0) {
//*       numbers[i] = numbers[i] + value;       }     }
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else newArray.push(numbers[i]);
//   }
//   return newArray;
//   //! Change code above this line
// }

//?        ------- ВАРІАНТ2  forEach() --------
// function changeEven(numbers, value) {
//   const newArr = [];
//   numbers.forEach((el) => {
//     if (el % 2 === 0) {
//       newArr.push(el + value);
//     } else {
//       newArr.push(el);
//     }
//   });
//   return newArr;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); //   новий масив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //   новий масив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); //   новий масив [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //   новий масив [144, 13, 81, 192, 136, 154]

//! ============================================================================
//?         map()
//*                   Більшість перебираючих методів масиву - це чисті функції - створюють новий масив, заповнюють його,
//*                 застосовуючи до значення кожного елемента зазначену колбек - функцію, після чого повертають цей новий масив.
//*                 Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив, який і буде результатом виконання методу.
//                    масив.map((element, index, array) => {
//                      //! Тіло колбек-функції
//                    });
//*                Поелементо перебирає оригінальний масив.
//*                Не змінює оригінальний масив.
//*                Результат роботи колбек-функції записується у новий масив.
//* Task 14        Повертає новий масив однакової довжини.
//*                Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.
//                   const planets = ["Earth", "Mars", "Venus", "Jupiter"];
//                   const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
//                   console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
//                   const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
//                   console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]
//                   //! Оригінальний масив не змінився
//                   console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
//*               Використання анонімних стрілочних функцій з неявним поверненням скорочує «шум» оголошення колбек-функції,
//*               що робить код чистішим і простішим для сприйняття.
//! ============================================================================
//*   Доповни код, щоб у змінній planetsLengths вийшов масив довжин назв планет - використовуй метод map().
//*       Змінна planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
//*       Змінна planetsLengths - це масив [5, 4, 5, 7]

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// //! Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

//! ============================================================================
//* Task 15              повсякденне завдання - маніпуляція масивом об'єктів. Наприклад, отримати масив значень властивості з усіх об'єктів.
//*                  У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.
//                      const students = [
//                        { name: "Mango", score: 83 },
//                        { name: "Poly", score: 59 },
//                        { name: "Ajax", score: 37 },
//                        { name: "Kiwi", score: 94 },
//                        { name: "Houston", score: 64 },      ];
//                      const names = students.map(student => student.name);
//                      console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
//*                  Використовуючи метод map(), ми можемо перебрати масив об'єктів, і в колбек-функції повернути значення властивості кожного з них.
//! ============================================================================

//* Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.
//*    Значення змінної books - це масив
//*    Значення змінної titles - це масив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
//*    Для перебирання масиву books використовується метод map() як чиста функція
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// //! Change code below this line

// const titles = books.map((book) => book.title);

// console.log(titles);

//! ============================================================================
//?      flatMap()
//*              Метод flatMap(callback) - аналогічний методу map(),
//*               але застосовується у випадках, коли результат - це багатовимірний масив, який необхідно «розгладити».
//                  масив.flatMap((element, index, array) => {
//                    //! Тіло колбек-функції       });
//*                У масиві students зберігається список студентів зі списком предметів, які відвідує студент, у властивості courses.
//* Task 16         Кілька студентів можуть відвідувати один і той самий предмет.Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що, навіть повторюваних.
//                  const students = [
//                    { name: "Mango", courses: ["mathematics", "physics"] },
//                    { name: "Poly", courses: ["science", "mathematics"] },
//                    { name: "Kiwi", courses: ["physics", "biology"] },     ];
//                  students.map((student) => student.courses);
//                  //! [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]
//                  students.flatMap((student) => student.courses);
//                  //! ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
//*              Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив. Відмінність від map() у тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений масив і є результатом роботи flatMap().
//! ============================================================================

//* Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.
//*   Значення змінної books - це масив об'єктів
//*   Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
//*   Для перебирання масиву books використовується метод flatMap()
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// //! Change code below this line

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

//! ============================================================================
//* Task 17
//! ============================================================================

//* Доповни функцію getUserNames(users), щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.
//*    Змінній getUserNames присвоєна стрілочна функція з параметром (users).
//*    Для перебирання параметра users використовується метод map()
//*    Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

//! Change code below this line
// const getUserNames = (users) => users.map((user) => user.name);
// //! Change code above this line

//?        ------- ВАРІАНТ2  явне повернення --------
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// console.log(getUserNames(users));

//! ============================================================================
//* Task 18
//! ============================================================================
//* Доповни ф-цію getUserEmails(users), щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.
//*     Змінній присвоєна стрілочна функція з параметром (users)
//*     Для перебирання параметра users використовується метод map()

//! Change code below this line
//* const getUserEmails = users => {
// const getUserEmails = (users) => users.map((user) => user.email);

// console.log(getUserEmails(users)); // ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]

//! ============================================================================
//?           filter(callback)       операція a % b - [if (i % 2 === 0)]
//*               filter(callback) використовується для - фільтрації масиву, коли потрібно вибрати > 1 елемента з колекції за певним критерієм.
//                        масив.filter((element, index, array) => {
//                          //! Тіло колбек-функції
//                        });
//?                     Не змінює оригінальний масив.
//?                     Поелементо перебирає оригінальний масив.
//?                     Повертає новий масив.
//?                     Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
//?                        Якщо колбек повернув true, елемент додається у масив, що повертається.
//?                        Якщо колбек повернув false, елемент не додається у масив, що повертається.
//? Task 19             Якщо жоден елемент не задовольнив умову, повертає порожній масив.
//                       const values = [51, -3, 27, 21, -68, 42, -37];
//                         const positiveValues = values.filter((value) => value >= 0);
//                         console.log(positiveValues); // [51, 27, 21, 42]
//                       const negativeValues = values.filter((value) => value < 0);
//                       console.log(negativeValues); // [-3, -68, -37]
//                         const bigValues = values.filter((value) => value > 1000);
//                         console.log(bigValues); // []
//                        //! Оригінальний масив не змінився
//                       console.log(values); // [51, -3, 27, 21, -68, 42, -37]
//*                  Тобто метод filter викликає колбек-функцію для кожного елемента вихідного масиву і, якщо результат її виконання - true,
//*                    додає поточний елемент у новий масив.
//! ============================================================================
//? до речі, якщо первірка на тру то можна ще !(num % 2), тоді фолс буде num % 2

//* Доповни код, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers,
//*  а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter().
//*    const evenNumbers = numbers;  //  - парні   [24, 82, 36, 18, 52]
//*    const oddNumbers = numbers;   //  - непарні   [17, 61, 47, 73]
//*    Для перебирання масиву numbers використаний метод filter()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// //! Change code below this line
// const evenNumbers = numbers.filter((a) => a % 2 === 0);
// const oddNumbers = numbers.filter((a) => a % 2 !== 0);

//?        ------- ВАРІАНТ2  один масив --------
// let evenNumbers = [];
// let oddNumbers = [];
// [evenNumbers, oddNumbers] = [
//   numbers.filter((num) => num % 2 === 0),
//   numbers.filter((num) => num % 2 !== 0),
// ];

// console.log("Масив парних чисел:", evenNumbers);
// console.log("Масив непарних чисел:", oddNumbers);

//! ============================================================================
//?       flatMap()      filter()   +  indexOf()  -   фільтрація унікальних елементів
//*                Використовуючи метод filter(), можна виконати фільтрацію масиву так, що у ньому залишаться тільки унікальні елементи.
//*                     Цей прийом працює тільки з масивом примітивних значень - не об'єктів.
//*                  Повернемося до групи студентів і масиву усіх відвідуваних предметів, які ми отримали методом flatMap().
//                       const students = [
//                         { name: "Mango", courses: ["mathematics", "physics"] },
//                         { name: "Poly", courses: ["science", "mathematics"] },
//                         { name: "Kiwi", courses: ["physics", "biology"] },          ];
//                       const allCourses = students.flatMap(student => student.courses);   //      ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
//*                   У змінній allCourses зберігається масив усіх відвідуваних предметів, які можуть повторюватися.
//*                   Завдання полягає у тому, щоб створити новий масив, в якому будуть тільки унікальні предмети, тобто без повторень.
//                      const uniqueCourses = allCourses.filter(
//                        (course, index, array) => array.indexOf(course) === index        );
//* Task 20          Використовуючи array.indexOf(course), виконуємо пошук першого збігу поточного елемента course і отримуємо його індекс в оригінальному масиві усіх курсів.
//*                    В параметрі index зберігається індекс поточного елемента course, перебираючи масив методом filter.
//*                  Якщо результат indexOf() і значення index рівні - це унікальний елемент - таке значення зустрічається в масиві вперше,
//*                    і на поточній ітерації фільтр обробляє саме його.
//                     # Масив усіх курсів
//                     ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
//*                     Для елемента "mathematics" під індексом 0:
//*                         indexOf() поверне 0, тому що шукає перший збіг.
//*                         Значення параметра index буде 0.
//*                         Вони рівні, а отже, це унікальний елемент.
//*                     Для елемента "mathematics" під індексом 3:
//*                         indexOf() поверне 0, тому що шукає перший збіг.
//*                         Значення параметра index буде 3.
//*                         Вони не рівні, а отже, це повторюваний - не унікальний елемент.
//! ============================================================================

//* Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень.
//*      Значення змінної books - це масив об'єктів
//*      Для змінної allGenders - використаний метод flatMap()
//*      Для змінної uniqueGenres - використаний метод filter()
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
//! Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (course, index) => allGenres.indexOf(course) === index
// );

// console.log(allGenres); //     ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// console.log(uniqueGenres); //   ["adventure", "history", "fiction", "mysticism", "horror"]

//! ============================================================================
//?            filter()      { score } (деструктуризація об'єктів)     &&
//*               Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості.
//*                У підсумку, утворюється новий масив відфільтрованих об'єктів.
//*                   є масив студентів з балами за тест. Необхідно відфільтрувати кращих (бал вище 80), гірших (бал нижче 50) і середніх студентів (бал від 50 до 80):
//                          const LOW_SCORE = 50;
//                          const HIGH_SCORE = 80;
//                          const students = [
//                            { name: "Mango", score: 83 },
//                            { name: "Poly", score: 59 },
//  Task 21                   { name: "Ajax", score: 37 },
//                            { name: "Kiwi", score: 94 },
//                            { name: "Houston", score: 64 },       ];
//                          const best = students.filter((student) => student.score >= HIGH_SCORE);
//                          console.log(best); // Масив об'єктів з іменами Mango і Kiwi
//                          const worst = students.filter((student) => student.score < LOW_SCORE);
//                          console.log(worst); // Масив з одним об'єктом Ajax
//                    //! В колбек-функції зручно деструктуризувати властивості об'єкта
//                          const average = students.filter(
//                            ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE         );
//                          console.log(average);          //   Масив об'єктів з іменами Poly і Houston
//! ============================================================================

//* Використовуючи метод filter(), доповни код так, щоб:
//*  У змінній topRatedBooks - масив книг, рейтинг яких (властивість rating) > за або =  MIN_RATING.
//*  У змінній booksByAuthor - масив книг, написаних автором з ім'ям (властивість author), яке збігається зі AUTHOR.
//*      Значення змінної books - це масив об'єктів
//*      Значення змінної MIN_RATING - це число 8
//*      Значення змінної AUTHOR - це рядок "Bernard Cornwell"

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
//! Change code below this line

//?        ------- ВАРІАНТ1  деструктуризація об'єктів --------
// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

//?        ------- ВАРІАНТ2 --------
// const topRatedBooks = books.filter((rate) => rate.rating >= MIN_RATING);
// const booksByAuthor = books.filter((auth) => auth.author === AUTHOR);

// console.log(topRatedBooks); // - це масив книг з рейтингом, вищим за 8
// console.log(booksByAuthor); // - це масив книг, автор яких "Bernard Cornwell"

//! ============================================================================
//* Task 22
//! ============================================================================

//* Доповни ф-цію getUsersWithEyeColor(users, color) так, щоб вона повертала масив користувачів,
//*  у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.
//*     Змінній getUsersWithEyeColor присвоєна стрілочна ф-ція з параметрами (users, color)
//*     Для перебирання параметра users використовується метод filter()
//* Якщо значення параметра color - це "blue", ф-ція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
//* Якщо значення параметра color - це "green", ф-ція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
//* Якщо значення параметра color - це "brown", ф-ція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
//* Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив
//* Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

//?        ------- ВАРІАНТ1 --------
// const getUsersWithEyeColor = (users, color) =>
//   users.filter((user) => user.eyeColor === color);

//?        ------- ВАРІАНТ2 --------
// const getUsersWithEyeColor = (users, color) => {
//   return users
//     .filter(({ eyeColor }) => eyeColor === color)
//     .map(({ name }) => name);
// };

//?        ------- ВАРІАНТ3 --------
// const getUsersWithEyeColor = (users, color) => {
//   if (color === "blue") {
//     return users
//       .filter(({ eyeColor }) => eyeColor === color)
//       .map(({ name }) => name);
//   } else if (color === "green") {
//     return users
//       .filter(({ eyeColor }) => eyeColor === color)
//       .map(({ name }) => name);
//   } else if (color === "brown") {
//     return users
//       .filter(({ eyeColor }) => eyeColor === color)
//       .map(({ name }) => name);
//   } else {
//     return [];
//   }
// };

//?        ------- ВАРІАНТ4 --------
// const getUsersWithEyeColor = (users, color) => {
//   const colorMap = {
//     blue: ["Moore Hensley", "Sharlene Bush", "Carey Barr"],
//     green: ["Ross Vazquez", "Elma Head"],
//     brown: ["Blackburn Dotson", "Sheree Anthony"],
//   };

//   return colorMap[color] || [];
// };

//?        ------- ВАРІАНТ5  reduce() --------
// const getUsersWithEyeColor = (users, color) => {
//   const colorMap = users.reduce((map, user) => {
//     const { eyeColor, name } = user;
//     if (map[eyeColor]) {
//       map[eyeColor].push(name);
//     } else {
//       map[eyeColor] = [name];
//     }
//     return map;
//   }, {});

//   return colorMap[color] || [];
// };

// console.log(getUsersWithEyeColor(users, "blue"));
// console.log(getUsersWithEyeColor(users, "green"));
// console.log(getUsersWithEyeColor(users, "brown"));

//! Change code below this line
//* const getUsersWithEyeColor = (users, color) => {};
//! Change code above this line

//! ============================================================================
//?       filter()
//* Task 23
//! ============================================================================

//* Доповни ф-цію getUsersWithAge(users, minAge, maxAge) так, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.
// Змінній getUsersWithAge присвоєна стрілочна функція з параметрами (users, minAge, maxAge)
// Для перебирання параметра users використовується метод filter()

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

//! Change code below this line
//* const getUsersWithAge = (users, minAge, maxAge) => { };
//! Change code above this line

// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter((user) => user.age >= minAge && user.age <= maxAge);

// console.log(getUsersWithAge(users, 20, 30)); //     масив об'єктів користувачів - Ross Vazquez, Elma Head і Carey Barr
// console.log(getUsersWithAge(users, 30, 40)); //     масив об'єктів користувачів - Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// console.log(getUsersWithAge(users, 80, 100)); //    []

//! ============================================================================
//?        filter()         includes()         flatMap()
//* Task 24         обєкт - вибір user по елементу який міститься в масиві всередині
//! ============================================================================

//* Доповни ф-цію getUsersWithFriend(users, friendName) так, щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі friendName.
//*    Масив друзів користувача зберігається у властивості friends.
//*    Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами (users, friendName)
//*    Для перебирання параметра users використовується метод filter()
//! Change code below this line
//* const getUsersWithFriend = (users, friendName) => {};
//! Change code above this line

//?        ------- ВАРІАНТ1 --------
// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));

//?        ------- ВАРІАНТ2  flatMap() --------
// const getUsersWithFriend = (users, friendName) =>
//   users.flatMap((user) => {
//     const matchedFriends = user.friends.filter(
//       (friend) => friend === friendName
//     );
//     return matchedFriends.map((friend) => user);
//   });

//?        ------- ВАРІАНТ2  flatMap() короткий --------
// const getUsersWithFriend = (users, friendName) =>
//   users.flatMap((user) =>
//     user.friends.filter((friend) => friend === friendName).map((friend) => user)
//   );

// console.log(getUsersWithFriend(users, "Briana Decker")); //    -   масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// console.log(getUsersWithFriend(users, "Goldie Gentry")); //    -   масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// console.log(getUsersWithFriend(users, "Adrian Cross")); //     -   []

//! ============================================================================
//?         filter()    indexOf()
//* Task 25     щоб масив, не містив повторень
//! ============================================================================
// students.flatMap((student) => student.courses);
//* Доповни ф-цію getFriends(users) так, щоб вона повертала масив друзів всіх користувачів (властивість friends).
//*  У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.
//*     Змінній getFriends присвоєна стрілочна функція з параметром (users)
//*     Виклик функції повертає масив ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
//! Change code below this line
//* const getFriends = (users) => {};
//! Change code above this line

//?        ------- ВАРІАНТ1 --------
// const getFriends = (users) =>
//   users
//     .flatMap((user) => user.friends)
//     .filter((friend, index, arr) => arr.indexOf(friend) === index);

// console.log(getFriends(users));

//?        ------- ВАРІАНТ2 --------
// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   const uniqueFriends = allFriends.filter(
//     (friend, index, arr) => arr.indexOf(friend) === index
//   );

//   return uniqueFriends;
// };

// console.log(getFriends(users));

//?        ------- ВАРІАНТ3 без параметра --------
// const getFriends = users
//   .flatMap((user) => user.friends)
//   .filter((friend, index, arr) => arr.indexOf(friend) === index);

// console.log(getFriends);

//! ============================================================================
//?  Task 26      filter()
//! ============================================================================

//* Доповни ф-цію getActiveUsers(users) так, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true.
//*    Змінній getActiveUsers присвоєна => з (users)
//*    Для перебирання параметра users використовується метод filter()
//*    Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony

//! Change code below this line
// const getActiveUsers = (users) =>
//   users.filter((user) => user.isActive === true);
//! Change code above this line
// console.log(getActiveUsers(users));

//! ============================================================================
//? Task 27       filter()
//! ============================================================================
//* Доповни ф-цію getInactiveUsers(users) так, щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false.
//*    Змінній getInactiveUsers присвоєна => з (users)
//*    Для перебирання параметра users використовується метод filter()
//*    Виклик ф-ції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами Moore Hensley, Ross Vazquez і Blackburn Dotson

//! Change code below this line
// const getInactiveUsers = (users) =>
//   users.filter((user) => user.isActive === false);
//! Change code above this line
// console.log(getInactiveUsers(users));

//! ============================================================================
//?          find()
//*                 метод find(callback) - знаходить і повертає перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.
//*                 метод filter(callback) - для пошуку всіх елементів, що задовольняють умову, то
//                     масив.find((element, index, array) => {
//                 //! Тіло колбек-функції      });
//*                  Не змінює оригінальний масив.
//*                  Поелементо перебирає оригінальний масив.
//*                  Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
//*                  Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.
//* Task 28          Метод find() використовується для одного завдання - пошуку елемента за унікальним значенням властивості. Наприклад, пошук користувача за поштою, автомобіля - за серійним номером, книги - за назвою тощо.
//                       const colorPickerOptions = [
//                         { label: "red", color: "#F44336" },
//                         { label: "green", color: "#4CAF50" },
//                         { label: "blue", color: "#2196F3" },
//                         { label: "pink", color: "#E91E63" },
//                         { label: "indigo", color: "#3F51B5" },      ];
//                       colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
//                       colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
//                       colorPickerOptions.find((option) => option.label === "white"); // undefined
//! ============================================================================

//* Використовуючи метод find(), доповни код таким чином, щоб:
//*   в bookWithTitle - об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
//* У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.
//*    Значення змінної books - це масив
//*                     BOOK_TITLE - це рядок "The Dream of a Ridiculous Man"
//*                     AUTHOR - це рядок "Robert Sheckley"
//*                     bookWithTitle - це об'єкт книги з назвою вище "The Dream of a Ridiculous Man"
//*                     bookByAuthor - це об'єкт книги автора "Robert Sheckley"

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
//! Change code below this line
//* const bookWithTitle = books;
//* const bookByAuthor = books;

//?        ------- ВАРІАНТ1  прямий підхід  --------
// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

//?        ------- ВАРІАНТ1  виклик функції і передача їй масиву books   --------

// const bookWithTitle = (books) =>
//   books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = (books) => books.find((book) => book.author === AUTHOR);

// console.log(bookWithTitle(books));
// console.log(bookByAuthor(books));

//! ============================================================================
//* Task 29       find()
//! ============================================================================
//! Task 23
//* Доповни ф-цію getUserWithEmail(users, email) так, щоб вона повертала об'єкт користувача, (email) якого  збігається зі значенням параметра email.
//* Оголошена ф-ція getUserWithEmail(users, email)
//*          використовується метод find()
//*          Якщо  email - це "shereeanthony@kog.com", // об'єкт користувача з ім'ям Sheree Anthony
//*          Якщо  email - це "elmahead@omatom.com", // об'єкт користувача з ім'ям Elma Head
//*          Якщо  email - це "blackburndotson@furnigeer.com", // об'єкт користувача з ім'ям Blackburn Dotson
//*          Якщо в масиві users відсутній користувач з поштою із параметра email, функція повертає undefined
//! Change code below this line
//* const getUserWithEmail = (users, email) => {};
//! Change code above this line
// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));

//! ============================================================================
//?      every()
//*                         Метод every(callback) перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.
//                        масив.every((element, index, array) => {
//                          //! Тіло колбек-функції         });
//*                    - Не змінює оригінальний масив.
//*                    - Поелементо перебирає оригінальний масив.
//* Task 30            - Повертає true, якщо всі елементи масиву задовольняють умову.
//*                    - Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
//*                    - Перебирання масиву припиняється, якщо колбек повертає false.
//                     //! Усі елементи більші або дорівнюють нулю? - так
//                        [1, 2, 3, 4, 5].every((value) => value >= 0); // true         //    перевіряється значення якоїсь їх властивості
//                     //! Усі елементи більші або дорівнюють нулю? - ні
//                        [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
//! ============================================================================

//* Використовуючи метод every(), доповни код так, щоб:
//*       У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
//*       У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
//*       У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
//*       У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
//*       У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
//*       У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
//! Change code below this line
//* const eachElementInFirstIsEven = firstArray;
//* const eachElementInFirstIsOdd = firstArray;
//* const eachElementInSecondIsEven = secondArray;
//* const eachElementInSecondIsOdd = secondArray;
//* const eachElementInThirdIsEven = thirdArray;
//* const eachElementInThirdIsOdd = thirdArray;

// const eachElementInFirstIsEven = firstArray.every(
//   (element) => element % 2 === 0
// );
// const eachElementInFirstIsOdd = firstArray.every(
//   (element) => element % 2 !== 0
// );
// const eachElementInSecondIsEven = secondArray.every(
//   (element) => element % 2 === 0
// );
// const eachElementInSecondIsOdd = secondArray.every(
//   (element) => !(element % 2 === 0)
// );
// const eachElementInThirdIsEven = thirdArray.every(
//   (element) => element % 2 === 0
// );
// const eachElementInThirdIsOdd = thirdArray.every(
//   (element) => element % 2 !== 0
// );

// console.log(eachElementInFirstIsEven); //   true
// console.log(eachElementInFirstIsOdd); //   false
// console.log(eachElementInSecondIsEven); //   false
// console.log(eachElementInSecondIsOdd); //   true
// console.log(eachElementInThirdIsEven); //   false
// console.log(eachElementInThirdIsOdd); //   false
//! ============================================================================
//? Task 31       every()
//! ============================================================================
//!Task 23

//* Доповни функцію isEveryUserActive(users) так, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.
//*     Змінній isEveryUserActive присвоєна стрілочна функція з параметром (users)
//*     Для перебирання параметра users використовується метод every()
//*     Виклик функції із зазначеним масивом користувачів повертає false

//! Change code below this line
//* const isEveryUserActive = (users) => {};
//! Change code above this line
// const isEveryUserActive = (users) =>
//   users.every((user) => user.isActive === true);

// console.log(isEveryUserActive(users));

//! ============================================================================
//?        some()
//*                   Метод some(callback) перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.
//                        масив.some((element, index, array) => {
//                         //! Callback function body       });
//*                       - Не змінює оригінальний масив.
//*                       - Поелементо перебирає оригінальний масив.
//*                       - Повертає true, якщо хоча б один елемент масиву задовольняє умову.
//*                       - Повертає false, якщо жоден елемент масиву не задовольняє умову.
//* Task 32               - Перебирання масиву припиняється, якщо колбек повертає true.
//*                       - Чи є хоча б один елемент, що більший або дорівнює нулю? - так
//                        [1, 2, 3, 4, 5].some(value => value >= 0); // true
//                        //! Чи є хоча б один елемент, що більший або дорівнює нулю? - так
//                        [-7, -20, 3, -10, -14].some(value => value >= 0); // true
//                        //! Чи є хоча б один елемент, що менший нуля? - ні
//                        [1, 2, 3, 4, 5].some(value => value < 0); // false
//                        //! Чи є хоча б один елемент, що менший нуля? - так
//                        [1, 2, 3, -10, 4, 5].some(value => value < 0); // true
//! ============================================================================
//* Використовуючи метод some(), доповни код так, щоб:
//*       У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
//*       У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
//*       У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
//*       У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
//*       У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
//*       У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
//! Change below this line
//* const anyElementInFirstIsEven = firstArray;
//* const anyElementInFirstIsOdd = firstArray;
//* const anyElementInSecondIsEven = secondArray;
//* const anyElementInSecondIsOdd = secondArray;
//* const anyElementInThirdIsEven = thirdArray;
//* const anyElementInThirdIsOdd = thirdArray;

// const anyElementInFirstIsEven = firstArray.some((element) => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((element) => element % 2 !== 0);
// const anyElementInSecondIsEven = secondArray.some(
//   (element) => element % 2 === 0
// );
// const anyElementInSecondIsOdd = secondArray.some(
//   (element) => !(element % 2 === 0)
// );
// const anyElementInThirdIsEven = thirdArray.some((element) => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((element) => element % 2 !== 0);

// console.log(anyElementInFirstIsEven); //     true
// console.log(anyElementInFirstIsOdd); //     false
// console.log(anyElementInSecondIsEven); //     false
// console.log(anyElementInSecondIsOdd); //     true
// console.log(anyElementInThirdIsEven); //     true
// console.log(anyElementInThirdIsOdd); //     true

//! ============================================================================
//? Task 33       some()
//! ============================================================================
//!Task 23

//* Доповни ф-цію isAnyUserActive(users) так, щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false.
//*       Оголошена ф-ція isAnyUserActive(users)
//*       Для перебирання параметра users використовується метод some()
//*       Виклик ф-ції із зазначеним масивом користувачів повертає true

//! Change code below this line
//* const isAnyUserActive = (users) => {};
//! Change code above this line

// const isAnyUserActive = (users) => users.some((user) => user.isActive === true);
// console.log(isAnyUserActive(users));

//! ============================================================================
//?         reduce()
//*                               Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву
//*                          із збереженням проміжного результату, як акумулятор.
//*                     Складніший за інші методи для засвоєння, але результат вартий того.
//                            массив.reduce((previousValue, element, index, array) => {
//                              //! Тіло колбек-функції
//                            }, initialValue);
//?                     - Не змінює оригінальний масив.
//*                     - Поелементо перебирає оригінальний масив.
//*                     - Повертає все, що завгодно.
//*                     - Робить все, що завгодно.
//*                     - Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.
//                           const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//                             return previousValue + number;
//                           }, 0);
//                           console.log(total); // 32
//* Task 34          1-ий параметр колбек-функції (previousValue) - це акумулятор, тобто проміжний результат.
//*                        Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації.
//*                  2-им аргументом для reduce() можна передати необов'язкове початкове значення акумулятора - параметр initialValue.
//*                     # Спочатку reduce() створює внутрішню змінну-акумулятор і
//*                     # присвоює їй значення параметра initialValue або 1-го елемента
//*                     # масиву, що перебирається, якщо initialValue не задане.
//*                  previousValue = 0
//*                     # Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
//*                     # параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
//*                         Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
//*                         Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
//*                         Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
//*                         Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
//*                         Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32
//?                     # Після завершення перебирання масиву, reduce() повертає значення акумулятора.
//*                         Результат - 32
//*                 Тобто reduce() використовується, коли необхідно взяти «багато» і привести до «одного». Переважно - це робота з числами.
//! ============================================================================

//* Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.
//*       Ззмінна players - об'єкт гравців з ігровим часом кожного
//*       Змінна playtimes -  масив [1270, 468, 710, 244]
//*       Змінна totalPlayTime - число 2692
//*       Для перебирання масиву playtimes використовується метод reduce()
//*       Значення змінної averagePlayTime - це число 673
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
//! Change code below this line
//* const totalPlayTime = playtimes;
//! Change code above this line
// const totalPlayTime = playtimes.reduce((total, element) => total + element, 0);
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(players);
// console.log(playtimes);
// console.log(totalPlayTime);
// console.log(averagePlayTime);

//! ============================================================================
//?         reduce()
//*                 Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості.
//*                      Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.
//                      const students = [
//                        { name: "Mango", score: 83 },
//                        { name: "Poly", score: 59 },
// Task 35                { name: "Ajax", score: 37 },
//                        { name: "Kiwi", score: 94 },
//                        { name: "Houston", score: 64 },        ];
//                      //! Назва акумулятора може бути довільною, це просто параметр функції
//                      const totalScore = students.reduce((total, student) => {
//                        return total + student.score;       }, 0);
//                      const averageScore = totalScore / students.length;
//! ============================================================================

//* Сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу.
//* Розрахувати час для кожного з гравців можна, розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).
//*    Значення змінної players - це масив об'єктів гравців
//*    Змінна totalAveragePlaytimePerGame - це число 1023
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
//! Change code below this line
//?        ------- ВАРІАНТ1 --------

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   const averagePlaytimePerGame = player.playtime / player.gamesPlayed;
//   return total + averagePlaytimePerGame;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

//?        ------- ВАРІАНТ2 (інше завдання) --------
// const totalAveragePlaytimePerGame = (players) => {
//   allPlaytime = players.reduce((total, player) => total + player.playtime, 0);
//   allGames = players.reduce((total, game) => total + game.gamesPlayed, 0);
//   return allPlaytime / allGames;
// };

//! ============================================================================
//? Task 36       reduce()
//! ============================================================================
//* Доповни ф-цію calculateTotalBalance(users) так, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.
//*     Змінній calculateTotalBalance присвоєна стрілочна ф-ція з параметром (users)
//*     Для перебирання параметра users використовується метод reduce()
//*     Виклик ф-ції із зазначеним масивом користувачів повертає число 20916
//! Change code below this line
//* const calculateTotalBalance = (users) => {};
//! Change code above this line

// const calculateTotalBalance = (users) =>
//?   users.reduce((total, baks) => total + baks.balance, 0);

// console.log(calculateTotalBalance(users));

//! ============================================================================
//? Task 37      reduce()
//! ============================================================================

//* Доповни ф-цію getTotalFriendCount(users) так, щоб вона рахувала і повертала загальну к-сть друзів (властивість friends) усіх користувачів з масиву users.
//*         Змінній getTotalFriendCount присвоєна => з параметром (users)
//*         Для перебирання параметра users використовується метод reduce()
//*         Виклик ф-ції із зазначеним масивом користувачів повертає число 14
//*         Виклик ф-ції з випадковими, але валідними аргументами, повертає правильне значення

//! Change code below this line
//* const getTotalFriendCount = (users) => {};
//! Change code above this line

// const getTotalFriendCount = (users) =>
//   users.reduce((total, friend) => {
//     return total + friend.friends.length;
//   }, 0);

// console.log(getTotalFriendCount(users));

//! ============================================================================
//?        sort()
//*              Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.
//*                - Сортує і змінює вихідний масив.
//*                - Повертає змінений масив, тобто посилання на відсортований вихідний.
//?                - За замовчуванням сортує за зростанням.
//*                - Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
//*                - Такий масив чисел буде відсортований за зростанням.
//                       const scores = [61, 19, 74, 35, 92, 56];
//                       scores.sort();
//                       console.log(scores); // [19, 35, 56, 61, 74, 92]
//* Task 38         Оскільки за замовчуванням значення приводяться до рядка, стандартне сортування чисел працює незвично.
//                       const scores = [27, 2, 41, 4, 7, 3, 75];
//                       scores.sort();
//                       console.log(scores); // [2, 27, 3, 4, 41, 7, 75]
//*                 Масив рядків сортується за алфавітом.
//                       const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
//                       students.sort();
//                       console.log(students); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
//*                 Водночас порядковий номер великих літер менший, ніж у малих.
//                       const letters = ["b", "B", "a", "A", "c", "C"];
//                       letters.sort();
//                       console.log(letters); // ["A", "B", "C", "a", "b", "c"]
//*                  Через те, що сортується вихідний масив, порушується принцип чистоти функцій і не можна зручно створити декілька похідних колекцій на основі вихідної.
//*                  Наприклад, створити колекцію, відсортовану за зростанням, а іншу - за спаданням. Тому перед сортуванням роблять повну копію вихідного масиву і сортують вже її.
//                       const scores = [61, 19, 74, 35, 92, 56];
//                       const ascendingScores = [...scores].sort();
//                       console.log(scores); // [61, 19, 74, 35, 92, 56]
//                       console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
//! ============================================================================

//* Доповни код так, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням,
//*  а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.
//*      Змінна releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
//*      Змінна authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
//*      Змінна ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
//*      Змінна alphabeticalAuthors - це масив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
//! Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

//! ============================================================================
//?         sort()
//*            Для зазначення свого порядку сортування методу sort(compareFunction) потрібно передати колбек-функцію з двома параметрами.
//*                Це ф-ція порівняння(compare function), порядок сортування залежить від її результату. Метод sort() буде викликати її для двох довільних елементів.
//?                     масив.sort((a, b) => {
//                      //! Callback function body       });
//                     a - перший елемент для порівняння.
//                     b - другий елемент для порівняння.
//* Task 39          Якщо виклик compareFunction(a, b) повертає будь-яке від'ємне значення, тобто a менше b, сортування поставить a перед b. Це сортування за зростанням.
//                     const scores = [61, 19, 74, 35, 92, 56];
//?                     const ascendingScores = [...scores].sort((a, b) => a - b);        - сортування за зростанням
//                     console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
//*                  Якщо виклик compareFunction(a, b) повертає будь-яке додатне значення більше нуля, тобто b більше a, сортування поставить b перед a. Це сортування за спаданням.
//                     const scores = [61, 19, 74, 35, 92, 56];
//?                     const descendingScores = [...scores].sort((a, b) => b - a);       - сортування за спаданням
//                     console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
//*                  Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів. Але взагалі неважливо, що повертати, якщо їх взаємний порядок не має значення.
//! ============================================================================

//* Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням або спаданням.
//* Доповни код так, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.
//*    Змінна releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
//*    Змінна ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
//*    Значення змінної descendingReleaseDates - це масив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
//! Change code below this line
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//! ============================================================================
//?         localeCompare()        sort()
//*               Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().
//                 firstString.localeCompare(secondString)
//*                 Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).
//                 "a".localeCompare("b"); // -1
//                 "b".localeCompare("a"); // 1
//                 "a".localeCompare("a"); // 0
//                 "b".localeCompare("b"); // 0
//* Task 40                Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
//*                 Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
//*                 Якщо рядки однакові, повертається нуль.
//*                 Це зручно використовувати для сортування рядків, оскільки метод sort() очікує такі самі значення від колбек-функції.
//                 const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
//                    const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
//                    console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
//                 const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
//                 console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]
//! ============================================================================

//* Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному алфавітному порядку.
//* Доповни код так, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом,
//* а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.
// *     Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// *     Значення змінної authorsInAlphabetOrder - це масив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// *     Значення змінної authorsInReversedOrder - це масив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// //! Change code below this line
// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

//! ============================================================================
//?         localeCompare()        sort()
//*           Під час роботи з масивом об'єктів, сортування виконується за числовим або рядковим значенням певної властивості.
//*                Наприклад, у нас є група студентів з балами за тест. Необхідно відсортувати масив об'єктів за зростанням і спаданням кількості балів, і за ім'ям студента.
//                     const students = [
//                       { name: "Mango", score: 83 },
//                       { name: "Poly", score: 59 },
// Task 41               { name: "Ajax", score: 37 },
//                       { name: "Kiwi", score: 94 },      ];
//                     const inAscendingScoreOrder = students.sort(
//                       (firstStudent, secondStudent) => firstStudent.score - secondStudent.score     );
//                     const inDescendingScoreOrder = students.sort(
//                       (firstStudent, secondStudent) => secondStudent.score - firstStudent.score      );
//                     const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//                       firstStudent.name.localeCompare(secondStudent.name)        );
//! ============================================================================

//* Доповни код таким чином, щоб:
//* У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
//* У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
//* У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
//* У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

//* Значення змінної books - це вихідний масив об'єктів книг
//* Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку
//* Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
//* Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
//* Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
//! Change code below this line
// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );
// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );
// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

//! ============================================================================
//?  Task 42           sort()    =>
//! ============================================================================
//!Task 23

//* Доповни функцію sortByAscendingBalance(users) так, щоб вона повертала масив користувачів, відсортований за зростанням їх балансу (властивість balance).
//*          Оголошена змінна sortByAscendingBalance
//*          Змінній sortByAscendingBalance присвоєна => з параметром (users)
//*          Значення параметра users не змінюється
//*          Виклик ф-ції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за зростанням їх балансу
//*          Для перебирання параметра users використаний метод sort()

//! Change code below this line
// const sortByAscendingBalance = (users) =>
//   [...users].sort((a, b) => a.balance - b.balance);
// //! Change code above this line
// console.log(sortByAscendingBalance(users));

//! ============================================================================
//?  Task 43           sort()    =>
//! ============================================================================
//!Task 23

//* Доповни ф-цію sortByDescendingFriendCount(users) так, щоб вона повертала масив користувачів, відсортований за спаданням к-сті їхніх друзів (властивість friends).
//*     Оголошена змінна sortByDescendingFriendCount
//*     Змінній sortByDescendingFriendCount присвоєна => з параметром (users)
//*     Значення параметра users не змінюється
//*     Для перебирання параметра users використаний метод sort()
//*     Виклик ф-ції  повертає новий масив користувачів, відсортований за спаданням кількості їхніх друзів

//! Change code below this line
// const sortByDescendingFriendCount = (users) =>
//   [...users].sort((a, b) => b.friends.length - a.friends.length);
// //! Change code above this line

// console.log(sortByDescendingFriendCount(users));

//! ============================================================================
//?  Task 44           sort()      localeCompare()      =>
//! ============================================================================
//!Task 23

//* Доповни ф-цію sortByName(users) так, щоб вона повертала масив користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.
//*      Змінній sortByName присвоєна => з параметром (users)
//*      Значення параметра users не змінюється
//*      Виклик ф-ції повертає новий масив користувачів, відсортований за ім'ям в алфавітному порядку

//! Change code below this line
// const sortByName = (users) =>
//   [...users].sort((a, b) => a.name.localeCompare(b.name));
// //! Change code above this line
// console.log(sortByName(users));

//! ============================================================================
//?        Ланцюжок методів
//*              У нас є масив об'єктів з іменами, балами і відвідуваними предметами кожного студента.
//                            const students = [
//                              { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//                              { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//                              { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//                              { name: "Kiwi", score: 94, courses: ["literature", "science"] },        ];
//*                      Необхідно отримати масив їхніх імен, відсортованих за зростанням балів за тест.
//*                      З цією метою ми відсортуємо копію масиву методом sort(), після чого методом map() створимо масив значень властивості name з відсортованого масиву.
//                            const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
//                            const names = sortedByAscendingScore.map((student) => student.name);
//                            console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
//*                      Проблема в тому, що у нас з'являються проміжні змінні після кожної операції, крім фінальної.
//*                      Змінна sortedByAscendingScore - зайва і необхідна тільки для зберігання проміжного результату.
//* Task 45              Позбутися таких «мертвих» змінних можна за допомогою групування викликів методів у ланцюжки. Кожний наступний метод буде виконуватися на основі результату роботи попереднього.
//                            const names = [...students]
//                              .sort((a, b) => a.score - b.score)
//                              .map((student) => student.name);
//                            console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
//*                      Робимо копію вихідного масиву перед сортуванням.
//*                      На копії викликаємо метод sort().
//*                      До результату роботи методу sort() застосовуємо метод map().
//*                      Змінній names присвоюється результат роботи методу map().
//*                      Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
//                            const uniqueSortedCourses = students
//                              .flatMap((student) => student.courses)
//                              .filter((course, index, array) => array.indexOf(course) === index)
//                              .sort((a, b) => a.localeCompare(b));
//                            console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
//*                         На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
//*                         До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
//*                         На результаті методу filter() викликаємо sort().
//*                         Змінній uniqueSortedCourses присвоюється результат роботи методу sort().
//*                      Ланцюжок методів може бути довільної довжини, але, зазвичай, не більше 2-3 операцій.
//*                      1) перебираючі методи використовуються для порівняно простих операцій над колекцією.
//*                      2) виклик кожного наступного методу - це додаткове перебирання масиву, що за великої кількості, може позначитися на продуктивності.
//! ============================================================================
//?          filter()        map()         sort()         localeCompare()        =>

//* Доповни код так, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
//*       Змінна books - це вихідний масив об'єктів
//*       Змінна MIN_BOOK_RATING - це число 8
//*       Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
//! Change code below this line
// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((a, b) => a.localeCompare(b));

// console.log(names); // ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]

//! ============================================================================
//? Task 46               map()        sort()         =>
//! ============================================================================

//* Ф-ція getNamesSortedByFriendCount(users) повертає масив імен користувачів, відсортований за зростанням к-сті їхніх друзів (властивість friends).
//*    Змінній getNamesSortedByFriendCount присвоєна  => з параметром (users)
//*    У тілі ф-ції використовується ланцюжок методів
//*    Значення параметра users не змінюється
//*    Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]

//! Change code below this line
// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((friend) => friend.name);
// //! Change code above this line
// console.log(getNamesSortedByFriendCount(users));

//! ============================================================================
//? Task 47             flatMap()      filter()        sort()         =>     .indexOf       .localeCompare()
//! ============================================================================
//* Ф-ція getSortedFriends(users) повертає масив унікальних імен друзів (властивість friends), відсортований за алфавітом.
//*      Змінній getSortedFriends присвоєна стрілочна функція з параметром (users)
//*      У тілі функції використовується ланцюжок методів в правильному порядку
//*      Значення параметра users не змінюється
//*      Виклик функції із зазначеним масивом користувачів повертає масив ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]

//! Change code below this line
// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((friend) => friend.friends)
//     .filter((frie, index, arr) => arr.indexOf(frie) === index)
//     .sort((a, b) => a.localeCompare(b));
// //! Change code above this line
// console.log(getSortedFriends(users));

//! ============================================================================
//?                filter()         reduce()            =>       *parseFloat()
//* Task 48           вбудована функція в JS, яка призначена для перетворення рядкового значення на числове значення з плаваючою точкою (дробове число).
//*                   Вона використовується для парсингу числових значень з рядків.
//! ============================================================================

//* Ф-ція getTotalBalanceByGender(users, gender) повертає загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.
//*      Змінній getTotalBalanceByGender присвоєна => з параметрами (users, gender)
//*      У тілі ф-ції використовується ланцюжок методів в правильному порядку
//*      Значення параметра users не змінюється

//! Change code below this line
// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((total, baks) => total + parseFloat(baks.balance), 0);
//! Change code above this line
// console.log(getTotalBalanceByGender(users, "male")); //  12053
// console.log(getTotalBalanceByGender(users, "female")); //  8863

//            node Lesson_4/script           - запуск через термінал
