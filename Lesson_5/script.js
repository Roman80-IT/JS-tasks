//            node Lesson_5/script        - запуск через термінал ≡

//! ============================================================================
//?           this
//*               Всередині ф-цій можна використовувати зарезервоване ключове слово 'this'
//*                 Під час виконання ф-ції, в this записується посилання на об'єкт, в контексті якого вона була викликана.
//*                 Отже, в тілі ф-ції ми можемо отримати доступ до властивостей і методів цього об'єкта.
//                    const bookShelf = {
//                      authors: ["Bernard Cornwell", "Robert Sheckley"],
//                      getAuthors() {
// Task 1                 return this.authors;        },
//                      addAuthor(authorName) {
//                        this.authors.push(authorName);           },       };
//                    console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
//                    bookShelf.addAuthor("Tanith Lee");
//                    console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
//*                Методи getAuthors і addAuthor - це ф-ції (методи об'єкта), які викликаються в контексті об'єкта bookShelf.
//*                Під час їх виконання в this записується посилання на об'єкт bookShelf і ми можемо звернутися до його властивостей і методів.
//! ============================================================================

//* Виконай рефакторинг методів об'єкта 'pizzaPalace', розставивши відсутні 'this' в місцях звернення до властивостей і методів об'єкта.
//*    Метод checkPizza об'єкта pizzaPalace використовує this.
//*    Метод order об'єкта pizzaPalace використовує this

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//! Change code below this line
//*   checkPizza(pizzaName) {
//*     return pizzas.includes(pizzaName);
//*   },
//*   order(pizzaName) {
//*     const isPizzaAvailable = checkPizza(pizzaName);

//*     if (!isPizzaAvailable) {
//*       return `Sorry, there is no pizza named «${pizzaName}»`;
//*     }

//*     return `Order accepted, preparing «${pizzaName}» pizza`;
//*   },
//! Change code above this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked")); //    "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); //    "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); //    "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); //    "Sorry, there is no pizza named «Viennese»"

//! ============================================================================
//* Task 2      АКАУНТ КОРИСТУВАЧА
//! ============================================================================
//?           this
//* Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі.
//* Виконай рефакторинг методів об'єкта customer, розставивши відсутні 'this' під час звернення до властивостей об'єкта.
//*      Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
//*      Значення змінної customer - це об'єкт з властивостями і методами
//*      Виклик customer.getDiscount() повертає поточне значення властивості discount
//*      Виклик customer.setDiscount(0.15) оновлює значення властивості discount
//*      Виклик customer.getBalance() повертає поточне значення властивості balance.
//*      Виклик customer.getOrders() повертає поточне значення властивості orders
//*      Виклик customer.addOrder(5000, "Steak") додає "Steak" в масив значень властивості orders і оновлює баланс
//*      Метод getBalance об'єкта customer використовує this
//*      Метод getDiscount об'єкта customer використовує this
//*      Метод setDiscount об'єкта customer використовує this
//*      Метод getOrders об'єкта customer використовує this
//*      Метод addOrder об'єкта customer використовує this

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//! Change code below this line
//*   getBalance() {
//*     return balance;
//*   },
//*   getDiscount() {
//*     return discount;
//*   },
//*   setDiscount(value) {
//*     discount = value;
//*   },
//*   getOrders() {
//*     return orders;
//*   },
//*   addOrder(cost, order) {
//*     balance -= cost - cost * discount;
//*     orders.push(order);
//*   },
//! Change code above this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//! ============================================================================
//* Task 3       ІСТОРІЯ ЗАМОВЛЕНЬ
//! ============================================================================
//?           this.
//* Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.
//* Необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.
//*      Змінна historyService - це об'єкт з вихідними властивостями та методами

//*      Метод getOrdersLog об'єкта historyService використовує this
//*      Метод getEmails об'єкта historyService використовує this
//*      Метод getOrdersByEmail об'єкта historyService використовує this

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//! Change code below this line
//*   getOrdersLog() {
//*     return orders
//*       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//*       .join(" - ");
//*   },
//*   getEmails() {
//*     const emails = orders.map((order) => order.email);
//*     const uniqueEmails = new Set(emails);
//*     return [...uniqueEmails];
//*   },
//*   getOrdersByEmail(email) {
//*     return orders.filter((order) => order.email === email);
//*   },
//! Change code above this line
//   getOrdersLog() {
//     return this.orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map((order) => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter((order) => order.email === email);
//   },
// };

// console.log(historyService.getOrdersLog()); //               рядок з переліком даних всіх замовлень з властивості orders
// console.log(historyService.getEmails()); //               масив всіх унікальних поштових адрес з властивості orders
// console.log(historyService.getOrdersByEmail("solomon@topmail.net")); //    [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net")); //    [{ email: "artemis@coldmail.net", dish: "Pizza" }]

//! ============================================================================
//?           Object.create()          isPrototypeOf()
//*              Об'єкти можна організувати у ланцюжки так, щоб здійснювався автоматичний пошук властивості в іншому об'єкті, не знайденої в одному об'єкті.
//*                   Сполучною ланкою виступає спеціальна прихована властивість[[Prototype]], яка в консолі браузера відображається як __proto__.
//                       const animal = {
//                         legs: 4,        };
//                     const dog = Object.create(animal);
//                     dog.name = "Mango";
//                       console.log(dog); // { name: 'Mango', __proto__: animal }
//                       console.log(animal.isPrototypeOf(dog)); // true
//*                  Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj.
//*                  Об'єкт, на який вказує посилання в __proto__ називається прототипом. У наc об'єкт animal - це прототип для об'єкта dog.
//* Task 4           Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog і чи повертає true або false.
//                     console.log(dog.hasOwnProperty("name")); // true
//                     console.log(dog.name); // 'Mango'
//                       console.log(dog.hasOwnProperty("legs")); // false
//                       console.log(dog.legs); // 4
//*                       Звернення dog.name  - повертає власну властивість name об'єкта dog.
//*                       Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з dog.__ proto__,
//*                        тобто, в об'єкті animal - його прототипі.
//*                     Прототип - це резервне сховище властивостей і методів об'єкта, що автоматично використовується під час їх пошуку.
//*                     Об'єкт, який виступає прототипом, може також мати свій прототип, наступний - свій, і т. д.
//*                       Пошук властивості виконується до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті, якщо не знаходить, то звертається до властивості __proto__,
//*                        тобто переходить за посиланням до об'єкта-прототипу, а потім - до прототипу прототипу. Якщо інтерпретатор дійде до кінця ланцюжка і не знайде властивості з таким ім'ям, то поверне undefined.
//! ============================================================================

//* Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.
//*      Змінні  'parent'  та  'child'  - це об'єкти
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// //! Change code below this line
// const child = Object.create(parent);
// //! Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname")); //    true
// console.log(parent.hasOwnProperty("heritage")); //   true
// console.log(child.hasOwnProperty("name")); // true
// console.log(child.name); // "Jason"
// console.log(child.hasOwnProperty("age")); // true
// console.log(child.age); // 27
// console.log(child.hasOwnProperty("surname")); // false
// console.log(child.surname); // "Moore"
// console.log(child.hasOwnProperty("heritage")); // false
// console.log(child.heritage); // "Irish"
// console.log(parent.isPrototypeOf(child)); // true

//! ============================================================================
//?           Object.create()          isPrototypeOf()
//* Task 5        ЛАНЦЮЖОК ПРОТОТИПІВ
//! ============================================================================

//* Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.
//* Змінні    ancestor   parent  child   - це об'єкти
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
//! Change code below this line
// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
//! Change code above this line

//* const parent = {};
//* parent.name = "Stacey";
//* parent.surname = "Moore";
//* parent.age = 54;

//* const child = {};
//* child.name = "Jason";
//* child.age = 27;

// console.log(ancestor.isPrototypeOf(parent)); // true
// console.log(parent.isPrototypeOf(child)); // true
// console.log(ancestor.hasOwnProperty("surname")); // true
// console.log(ancestor.surname); //           "Dawson"
// console.log(parent.hasOwnProperty("surname")); // true
// console.log(parent.surname); //             "Moore"
// console.log(child.hasOwnProperty("surname")); // false
// console.log(child.surname); //              "Moore"
// console.log(ancestor.hasOwnProperty("heritage")); // true
// console.log(ancestor.heritage); //          "Irish"
// console.log(parent.hasOwnProperty("heritage")); // false
// console.log(parent.heritage); //            "Irish"
// console.log(child.hasOwnProperty("heritage")); // false
// console.log(child.heritage); //             "Irish"

//! ============================================================================
//?            Оголошення класу        class _Name {}
//*                   Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей,
//*                   але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми.
//*                   З цією метою використовують класи - спеціальний синтаксис оголошення ф-ції для створення об'єктів.
//*                     Оголошення класу починається з ключового слова 'class', після якого стоїть ім'я класу і фігурні дужки - його тіло.
//* Task 6            Класи прийнято називати з великої літери, а у назві відображати тип об'єкта (іменник), що створюється.
//                     class User {
//                       //! Тіло класу           }
//                         const mango = new User();
//                         console.log(mango); // {}
//                      const poly = new User();
//                      console.log(poly); // {}
//*                    Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.
//! ============================================================================

//* Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.
//*        Оголошений клас Car
// class Car {}
// console.log(new Car()); // - порожній об'єкт

//! ============================================================================
//?             constructor()          new         this.
//*                     Для ініціалізації екземпляра в класі є метод constructor. Якщо він неоголошений, створюється конструктор за замовчуванням - порожня ф-ція, яка не змінює екземпляр.
//                            class User {
//                              //! Синтаксис оголошення методу класу
//                              constructor(name, email) {
//                                //! Ініціалізація властивостей екземпляра
//                                this.name = name;
// Task 7                           this.email = email;          }       }
//                             const mango = new User("Mango", "mango@mail.com");
//                             console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }
//                          const poly = new User("Poly", "poly@mail.com");
//                          console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
//*                    Виклик класу з оператором 'new' призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта.
//*                      this всередині конструктора буде посилатися на новий об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
//*                    Властивості name та email називаються публічними властивостями, тому що вони будуть власними властивостями об'єкта-екземпляра
//*                      і до них можна буде отримати доступ, звернувшись через крапку.
//! ============================================================================

//* Додай класу Car метод 'constructor', який приймає три параметри:
//*         brand - марка автомобіля.
//*         model - модель автомобіля.
//*         price - ціна автомобіля.
//* Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// Клас Car має метод constructor

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// console.log(new Car("Audi", "Q3", 36000)); //   утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// console.log(new Car("BMW", "X5", 58900)); //                      { brand: "BMW", model: "X5", price: 58900 }
// console.log(new Car("Nissan", "Murano", 31700)); //               { brand: "Nissan", model: "Murano", price: 31700 }

//! ============================================================================
//?      constructor({})
//*         Клас може приймати велику к-сть вхідних даних для властивостей майбутнього об'єкта.
//*                   Якщо параметрів багато(більше 2 - х), то застосовують патерн «Об'єкт параметрів».
//*                  Ідея цього патерну у тому, щоб передавати як параметр 1 об'єкт з логічно іменованими властивостями. Значення властивостей такого об'єкта замінять набір аргументів.
//                      class User {
//                        //! Деструктуризуємо об'єкт
//                        constructor({ name, email }) {
//                          this.name = name;
//                          this.email = email;      }         }
// Task 8               const mango = new User({
//                        name: "Mango",
//                        email: "mango@mail.com",
//                      });
//                      console.log(mango); // { name: "Mango", email: "mango@mail.com" }
//                          const poly = new User({
//                            name: "Poly",
//                            email: "poly@mail.com",
//                          });
//                          console.log(poly); // { name: "Poly", email: "poly@mail.com" }
//! ============================================================================
//* Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price.
//* Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.
//*     Клас Car має метод constructor
// class Car {
//   //! Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   //! Change code above this line
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); //      об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 })); //      об'єкт { brand: "BMW", model: "X5", price: 58900 }
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); //      об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

//! ============================================================================
//*            Для роботи з властивостями майбутнього екземпляра використовуються методи класу. Методи - це просто ф-ції, але з однією відмінністю -
//*                      вони доступні екземпляру класу.
//                          class User {
//                            constructor({ name, email }) {
//                              this.name = name;
//                              this.email = email;      }
//! Task 9                     // Метод getEmail
//                            getEmail() {
//                              return this.email;         }
//
//!                            // Метод changeEmail
//                            changeEmail(newEmail) {
//                              this.email = newEmail;         }       }
//! ============================================================================

//* Додай класу Car два методи.
//*    getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
//* changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.
// В класі Car оголошений метод getPrice
// Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// В класі Car оголошений метод changePrice
// Метод changePrice змінює значення властивості price екземпляра класу, який його викликає

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//! Change code below this line
// getPrice() {
//   return this.price;
// }
// changePrice(newPrice) {
//   this.price = newPrice;
// }
//! Change code above this line
// }

//! ============================================================================
//?           class _Name {}       this.       push()       indexOf        splice()
//* Task 10          СКЛАД
//! ============================================================================

//* Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки один аргумент - початковий масив товарів,
//*   який записується у властивість items об'єкта, що створюється.
//* Оголоси наступні методи класу:
//*    getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
//*    addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
//*    removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
//* Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Нічого там не змінюй.
// Оголошений клас Storage
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
//* Метод getItems повертає значення властивості items екземпляра класу, який його викликає
//* Метод addItem змінює властивість items екземпляра класу, який його викликає
//* Метод removeItem змінює властивість items екземпляра класу, який його викликає
//* В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
//* Об'єкт storage містить властивість items

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const index = this.items.indexOf(itemToRemove);
//     if (index !== -1) this.items.splice(index, 1); //! при вказанні індексу -1 вважає останнім елементом масиву
//   }
// }
// //! Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//! ============================================================================
//?           class _Name {}       this.       this.value = str + this.value + str;
//* Task 11          КОНСТРУКТОР РЯДКІВ
//! ============================================================================

//* Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.
//* Оголоси наступні методи класу:
//*       getValue() - повертає поточне значення властивості value.
//*       padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
//*       padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
//*       padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
//* Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
//* Оголошений клас StringBuilder
//* В класі StringBuilder оголошений метод getValue
//* Метод getValue повертає значення властивості value екземпляра класу, який його викликає
//* В класі StringBuilder оголошений метод padEnd
//* Метод padEnd змінює властивість value екземпляра класу, який його викликає
//* В класі StringBuilder оголошений метод padStart
//* Метод padStart змінює властивість value екземпляра класу, який його викликає
//* В класі StringBuilder оголошений метод padBoth
//* Метод padBoth змінює властивість value екземпляра класу, який його викликає
//* В результаті виклику new StringBuilder(".") значення змінної builder - це об'єкт
//* Об'єкт builder містить властивість value
//* Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
//* Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
//* Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
//* Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = this.value + str;
//   }
//   padStart(str) {
//     this.value = str + this.value;
//   }
//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }
// //! Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//! ============================================================================
//*                  Інкапсуляція — це концепція, що дозволяє приховати те, як влаштований клас. Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу -
//*                     набору публічних властивостей і методів класу. Решта методів і властивостей (не публічних) повинні бути недоступні.
//*                     В класах інкапсуляція реалізується приватними властивостями, доступ до яких можна отримати тільки всередині класу.
//*                          Припустимо, що пошта користувача повинна бути недоступною для прямої зміни зовні, тобто - приватною. Додаючи до імені властивості символ #,
//*                     ми робимо її приватною.Оголошення приватної властивості до ініціалізації в конструкторі - обов'язкове.
//                          class User {
//                            //! Необов'язкове оголошення публічних властивостей
//                            name;
//                            //! Обов'язкове оголошення приватних властивостей
//                            #email;
// Task 12                 constructor({ name, email }) {
//                           this.name = name;
//                           this.#email = email;      }
//                                 getEmail() {
//                                   return this.#email;     }
//                         changeEmail(newEmail) {
//                           this.#email = newEmail;      }       }
//                          const mango = new User({
//                            name: "Mango",
//                            email: "mango@mail.com",       });
//                       mango.changeEmail("mango@supermail.com");
//                       console.log(mango.getEmail()); // mango@supermail.com
//                       console.log(mango.#email); // Виникне помилка, це приватна властивість
//*                  Методи класу також можуть бути приватними, тобто доступні тільки у тілі класу. Для цього, перед їхнім ім'ям необхідно поставити символ #.
//! ============================================================================

//* Виконай рефакторинг класу Car так, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.
//*       getBrand() - повертає значення приватної властивості brand.
//*       changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

//*       Властивість brand в класі Car оголошена приватною
//*       Конструктор класу приймає об'єкт з властивостями brand, model і price
//*       В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт { model: "Q3", price: 36000 }
//*       В результаті виклику new Car({ brand: "bmw", model: "X5", price: 58900 }) утвориться об'єкт { model: "X5", price: 58900 }
//*       В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт { model: "Murano", price: 31700 }
//*       В екземпляра відсутня публічна властивість brand
//*       Метод getBrand() повертає значення приватної властивості brand.
//*       Метод changeBrand("Honda") змінює значення приватної властивості brand на "Honda"

// class Car {
//   //! Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   //! Change code above this line
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));

// const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(car1); // Output: { model: "Q3", price: 36000 }

// const car2 = new Car({ brand: "bmw", model: "X5", price: 58900 });
// console.log(car2); // Output: { model: "X5", price: 58900 }

// const car3 = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// console.log(car3); // Output: { model: "Murano", price: 31700 }

// console.log(car1.brand); // Output: undefined
// console.log(car1.getBrand()); // Output: "Audi"

// car1.changeBrand("Honda");
// console.log(car1.getBrand()); // Output: "Honda"

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
