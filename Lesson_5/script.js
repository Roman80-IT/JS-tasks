//            node Lesson_5/script        - запуск через термінал ≡

//! ============================================================================
//?           this
//* Task 1          Всередині ф-цій можна використовувати зарезервоване ключове слово 'this'
//*               Під час виконання ф-ції, в this записується посилання на об'єкт, в контексті якого вона була викликана.
//*                Таким чином, в тілі ф-ції ми можемо отримати доступ до властивостей і методів цього об'єкта.
// const bookShelf = {
//   authors: ["Bernard Cornwell", "Robert Sheckley"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };
// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
// bookShelf.addAuthor("Tanith Lee");
// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
//*                Методи getAuthors і addAuthor - це ф-ції (методи об'єкта), які викликаються в контексті об'єкта bookShelf.
//*                Під час їх виконання в this записується посилання на об'єкт bookShelf і ми можемо звернутися до його властивостей і методів.
//! ============================================================================

//* Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.
//*    Метод checkPizza об'єкта pizzaPalace використовує this.
//*    Метод order об'єкта pizzaPalace використовує this
//*    Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
//*    Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
//*    Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
//*    Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"

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
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

//! ============================================================================
//* Task 2
//! ============================================================================

//! ============================================================================
//* Task 3
//! ============================================================================

//! ============================================================================
//* Task 4
//! ============================================================================

//! ============================================================================
//* Task 5
//! ============================================================================

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
