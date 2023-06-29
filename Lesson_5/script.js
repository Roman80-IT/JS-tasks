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
};
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
//* Task 6
//! ============================================================================

//! ============================================================================
//* Task 7
//! ============================================================================

//! ============================================================================
//* Task 8
//! ============================================================================

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
