//              node Lesson_6/script

//!------------------------------------------------------------------------------------------------
//?  Один елемент
//!------------------------------------------------------------------------------------------------

//* отримуємо доступ до елемента HTML:
//?   querySelector    - повертає перший HTML-елемент, який знайде
// const title = document.querySelector(".js-title"); //* - тут до класу, - ще можна до тегу(селектор) ('h1') - але так не роблять бо їх може бути багато, - по id ('#test') можливо, але не зручно
//* js-title   - класи для JS
//! Якщо звернутися до неіснуючого класу - поверне 'null'
// console.log(title); // - виводить HTML-елемент
// console.dir(title); // - виводить об'єкт (та властивості)

//!------------------------------------------------------------------------------------------------
//* HTML-елементи є 2-х типів - input & text (тип для комунікацій (інпути, форми, радіокнопки) та текстовий тип);
//*      вміст текстового ел. через 'textContent':
// console.dir(title.textContent);

//*      перевизначаємо: (обов'язково в лапках)
// title.textContent = "Hello JS";

//!------------------------------------------------------------------------------------------------
//? classList

//? властивість classList (в консолі браузера)- вся інфа про класи вибраного HTML-елемента
//*    можна добавляти класи або видаляти (заходячи з JS)  - використовується для зміни кольору меню, після кліка користувача, перевірка валідації інпута - наприклад ввод пароля і інпут стає червоного/зеленого кольору

// title.classList.add("title-color");     //?   метод 'add' - додає клас
// title.classList.remove("title-color");  //?   метод 'remove' - видаляє клас
// title.classList.toggle("title-color");  //?   метод 'toggle' - (типу перемикача додає якщо нема, або видаляє якщо нема)
// title.classList.toggle("title-color");

//!================================ Атрибути ========================================
//! Інлайнливо можна добавити якийсь стиль, але так не роблять:   через (reflow) і (repaint) (перерисування елементів на сторінці при кожній зміні елемента переписується DOM)
// title.style.fontSize = "50px";
// title.style.color = "green";

//!------------------------------------------------------------------------------------------------
//? dataset  - data-атрибут  (напр. data-id, data-goods)  // значення виводиться без слова 'data'  - зберігаються дата-атрибути
// console.dir(title.dataset.goods);
//*   id - для знаходження HTML-елемента (в CSS)
//*   data-id - для передачі якоїсь інформації

//* Системні атрибути - 'hidden', 'id' - в них вже є зарезервовані свої властивості, а в data-атрибутутах потрібно присвоювати (для передачі інформації)

// title.hidden = false; //* змінюємо с-мні атрибути
// title.hidden = true;

//!------------------------------------------------------------------------------------------------
//?  Методи для роботи з атрибутами
//?  getAttribute - отримання атрибуту:         //* цей метод не такий зручний як 'dataset'
// console.dir(title.getAttribute('hidden'));      //* повертається в консоль 'пустеньким' - така особливість 'hidden'
// console.dir(title.getAttribute('data-goods'));  //* обовязково вказуємо приставку 'дата' (крім методу 'dataset')

//? Встановлення атрибуту:
//* можна додати як властивість:
// title.hidden = false;      //? так спрацює
//? можна додати за допомогою методу 'setAttribute' (його параметри - 'String'):
// title.setAttribute('hidden', 'false')  //! але так hidden, disable не спрацює, краще видалити

//? title.removeAttribute('hidden')              //* видалення

//!------------------------------------------------------------------------------------------------
//?  Списки
//!------------------------------------------------------------------------------------------------

// const list = document.querySelector(".js-list");
// console.dir(list); //* виведений об'єкт містить різні властивості та методи:
//*                         childNodes - список li-шок, містить ентери (відображає переноси) та пробіли
//*                         children - список без лишніх символів:
//?                                console.dir(list.children);
// console.log([...list.children]);        //* 'spread оператор '[...]' - такий доступ до li-шок через 'ul' кращий ніж окремо звертатися до дітей
//* Працюємо зі спільним батьком - на 2 рівні вкладеності, а на 3-й вже буде важкий код

//!================================ додаємо список елементів в DOM ========================================
//? 1-й спосіб за доп. метода 'createElement' та 'append': (мінус - ненаглядно, багато писанини)
// const li = document.createElement("li");
// li.textContent = list.children.length + 1;
//!----------------------------------------------------------------
//* розширена форма:
// li.classList.add("title-color");
// li.dataset.id = "12234";
// const div = document.createElement('div');
// const h2 = document.createElement('h2')
// h2.textContent='Hello'
// li.append(div)    // в 'li' додає 'div'  - працює за аналогією 'push'
// div.append(h2)
//!----------------------------------------------------------------
// list.append(li)
// console.log(li);

//? 2-й спосіб: метод шаблонних рядків  (де в ${} - підставляємо значення змінної)

// const li = `<li class="title-color" data-id='12234'>${list.children.length + 1}
// <div>
// <h2>Hello</h2>
// </div>
// </li>`;

// list.insertAdjacentHTML("beforeend", li); //* це щоб додати HTML-подібну розмітку в DOM

//? .insertAdjacentHTML ("position" (положення), HTML-код)
//* Є п'ять можливих значень для параметру position:
//*      "beforebegin": Вставка перед елементом, який має бути модифікований.
//*      "afterbegin": Вставка в початок внутрішнього HTML-вмісту елемента, який має бути модифікований.
//*      "beforeend": Вставка в кінець внутрішнього HTML-вмісту елемента, який має бути модифікований.
//*      "afterend": Вставка після елемента, який має бути модифікований.
//*      "replace": Заміна елемента, який має бути модифікований, переданим HTML-кодом.

//!------------------------------------------------------------------------------------------------
//?      Статичний/динамічний масив  ("жива"/"нежива" колекція)

//*  getElementsByTagName - метод JS, який використовується для отримання колекції елементів на веб-сторінці за їх тегом
//*  getElementsByClassName: отримання колекції елементів за їх класом
//*  getElementById: отримання одного елемента за його ідентифікатором
//*  querySelector: отримання першого елемента, що відповідає певному CSS-селектору
//*  querySelectorAll: отримання всіх елементів, що відповідають певному CSS-селектору

//*     Статична частіше використовується, а динамічна напр. для бескінечної прокрутки (інфініті скрол - коли прокрутив вниз і підгружаються наступні картинки
//*     - коли доскролюєш до останньої лі - шки - кидається httpt - запит і підїзжає ще порція картинок - в цей час останній HTML-елемент вже змінився)
//!------------------------------------------------------------------------------------------------

// const listStatic = document.querySelectorAll("li"); //?  доступний метод 'forEach'
// const listDynamics = document.getElementsByTagName("li"); //? доступна HTML-колекція, щоб перебрати потрібно застосувати спред ('spread оператор '[...]')

// const list = document.querySelector(".js-list");

//!-------------------------------------
//* додадаємо нові елементи:
// const li = document.createElement("li");
// li.textContent = list.children.length + 1;
// list.append(li);
// const li2 = document.createElement("li");
// li2.textContent = list.children.length + 1;
// list.append(li2);
//!-------------------------------------

// console.log("listStatic", listStatic); //* querySelectorAll після того як добавили якийсь елемент, вже не покаже змін - забирає на момент отримання
// console.log("listDynamics", listDynamics); //* getElement.. - завжди повертає актуальні дані
// console.log("list ul", list);

//!------------------------------------------------------------------------------------------------
//?  Задача  Створити розмітку з картками авто
//!------------------------------------------------------------------------------------------------
// ?дата-атрибут даємо на спільний батьківський контейнер - тут в нас на лі-шці (data-id) (щоб по кліку можна було зчитати)

// const cars = [
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
//   {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 4,
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const container = document.querySelector(".js-container"); //* перед цим сворили розмітку в index.html
//!------------------------------------------------------------------------------------------------
//! НЕвірний спосіб: - додавання картки в DOM в серидині циклу - reflow !!!
// cars.forEach(({ id = "none", model, type, price, img }) => {
//   const markup = `<li data-id="${id}">
//     <img src="${img}" alt="${model}" class="img">
//     <h2>Марка - ${model}</h2>
//     <h3>Модель - ${type}</h3>
//     <p>Ціна - ${price}</p>
// </li>`;
//   container.insertAdjacentHTML("beforeend", markup); //! розміщуємо кожну картку в кінець списку - перезапис DOM!!!
// });
//? Дебаг сторінки в лекції Рисіча на 1:33:00
//!------------------------------------------------------------------------------------------------
//! Вірний спосіб:
// const markup = cars
//   .map(
//* id в нас один, то іншим підставимо "none", а якщо приходить, то буде його значення

//     ({ id = "none", model, type, price, img }) => `<li data-id="${id}">
//     <img src="${img}" alt="${model}" class="img">
//     <h2>Марка - ${model}</h2>
//     <h3>Модель - ${type}</h3>
//     <p>Ціна - ${price}</p>
// </li>`
//   )
//   .join(""); //*       insertAdjacentHTML потребує String

// container.insertAdjacentHTML("beforeend", markup);
// console.dir(markup);
//!------------------------------------------------------------------------------------------------

//!------------------------------------------------------------------------------------------------
//?     Видалення елементів
//?  .remove() - тільки окремі елементи (через релоуд DOM). Тоді коли є якась умова
//?  innerHTML = "" - щоб все очистити - означає, що: Вміст тегу 'ua' - пустота
//?  innerHTML - використовується тепер тільки для видалення (раніше ще використовували для внесення змін)
//!------------------------------------------------------------------------------------------------

// const containerAfter = document.querySelector(".js-container");
// [...containerAfter.children].forEach((item) => {
//   if (item.dataset.id !== "none") {
//     item.remove();
//   }
// });
//!------------------------------------------------------------------------------------------------

// console.log(result);
// containerAfter.innerHTML = ''
//!------------------------------------------------------------------------------------------------

// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

//===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

//===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//     console.log(dish.dataset.id);
//   });  У конспекті "data-атрибути" в прикладі чому ".dishes менше li"(".dishes > li"), чому не дорівнює або просто ".dishes" без "li"?

//!------------------------------------------------------------------------------------------------
//* Приклад використання вкладеності елементів в html розмітці:
//* вибираються лі-шки в класі '.dishes'

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish);
// });

// const list = document.querySelector('.js-list')
// console.dir(list.firstChild); //!Невірно - може вибрати перенос рядка в html-розмітці
// console.dir(list.firstElementChild); //? Вірно
