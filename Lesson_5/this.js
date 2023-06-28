//            node Lesson_5/this        - запуск через термінал ≡

//* коли порівнюєте об'єкти або функції за допомогою ===, ви порівнюєте посилання на об'єкти, а не їхні зовнішній вигляд або структуру:
// console.log("[] === []: ", [] === []);  //  [] === []:  false
// console.log("{} === {}: ", {} === {});   //   {} === {}:  false
// console.log(
//   "function() {} === function() {}: ",      //   function() {} === function() {}:  false
//   function () {} === function () {}
// );

/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * Как метод объекта. В контексте объекта.
 */

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//   },
// };

// user.showTag();
