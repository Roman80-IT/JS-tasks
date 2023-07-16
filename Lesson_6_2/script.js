//*Отримаємо кнопку з HTML:

// const button = document.querySelector(".js-click");
// console.log(button); //*        контроль - є
//!---Рисіч--------------------------------------------------------------------------------------------
//?   addEventListener
//?   2 обов'язкові параметри:
//*      - *тип евенту, який ми збираємося слухати
//*      - *колбек функція - але не інлайн-колбек (()=>{}), щоб потім можна було зняти прослуховування
//*          Найпоширеніші типи подій:
//! Події клавіатури:
//*    keydown: спрацьовує, коли користувач натискає клавішу.
//*    keyup: спрацьовує, коли користувач відпускає клавішу.
//*    keypress: спрацьовує, коли користувач натискає клавішу, яка відповідає символу.
//! Події миші:
//*    click: спрацьовує, коли користувач клікає на елемент.
//*    mouseover: спрацьовує, коли курсор миші наводиться на елемент.
//*    mouseout: спрацьовує, коли курсор миші покидає елемент.
//*    mousedown: спрацьовує, коли користувач натискає кнопку миші на елементі.
//*    mouseup: спрацьовує, коли користувач відпускає кнопку миші після натискання на елементі.
//! Події форм:
//*    submit: спрацьовує, коли користувач надсилає форму.
//*    change: спрацьовує, коли значення поля форми змінюється.
//*    input: спрацьовує, коли користувач вводить дані в поле форми.
//*    focus: спрацьовує, коли поле форми отримує фокус.
//*    blur: спрацьовує, коли поле форми втрачає фокус.
//! Інші події:
//*    load: спрацьовує, коли сторінка або медіафайл завантажуються повністю.
//*    scroll: спрацьовує, коли користувач прокручує сторінку.
//*    resize: спрацьовує, коли розмір вікна браузера змінюється.
//*    error: спрацьовує, коли виникає помилка завантаження ресурсу.
//! Є багато інших подій, і ви також можете визначати власні події за допомогою API подій.
//!------------------------------------------------------------------------------------------------

// const container = document.querySelector(".js-container"); //* додаємо div-елемент з HTML
// container.addEventListener("click", onClick); //* додаємо обробника подій, ставимо на HTML-елемент, який потрібно відслідковувати: (хоч на window чи body)
// console.log(container);
// let step = 0;

// function onClick(evt) {
//   //*   створюємо колбек. Завжди буде приходити параметр event (evt) від EventListener
//   //*   event - місце зберігання та що саме відловило подію. Його можна і не оголошувати
//   //? Властивості event - основні:
//   //*   currentTarget(по замовчуванні - 'null') - це той елемент, на який додали прослуховувач (тут - контейнер або кнопка)
//   //*   target
//   step += 5; //* вводимо змінну, тому що:
//   container.style.marginLeft += `5px`; //! проходить конкантинація
//   container.style.marginLeft = `${step}px`; //? це вірний спосіб
//   container.style.marginTop = `${step}px`; //* добавим, щоб елемент зміщувався по діагоналі (по 2-х осях)
//   console.log(evt.currentTarget); //* - з'явиться в консолі HTML-елемент, при кожному кліку по ньому (на який ми його повісили)
// }

//!------------------------------------------------------------------------------------------------
//   *Текст, який відображається по кліку:
//          *(розкриваються ...)
//?     slice()
//!------------------------------------------------------------------------------------------------

const title = document.querySelector(".js-title");

//!  vvv Допомоміжний код vvv ---------------------------------------------------------------------
// const str = title.textContent.slice(0, 13); //* залишаємо 13 символів
// const remainder = title.textContent.slice(13); //* залишок
//! ALTERNATIVE! Видаляємо додаткові пробіли ------------------------------------------------------
// const trimmedText = title.textContent.replace(/\s+/g, " ").trim();
// const str = trimmedText.slice(0, 13);
//?   replace(/\s+/g, ' ') для заміни всіх послідовностей одного або більше пробілів на один пробіл,
//*     використовуючи регулярний вираз / \s + / g.
//?   Потім використовуємо trim(), щоб видалити пробіли з початку і кінця тексту.
//*     Після цього ми можемо безпечно застосувати slice(0, 13) до відформатованого тексту.
//*     Цей підхід дозволить вам вирізати підрядок ігноруючи додаткові пробіли, які можуть бути додані автоформатуванням у редакторі коду.
//!------------------------------------------------------------------------------------------------
// console.log(str);
// console.log(remainder);
//!------------------------------------------------------------------------------------------------
//? Добавляємо ф-цію "клік-подія":
// title.addEventListener("click", onClick); //* ставимо на текст прослуховуючу подію
// function onClick(evt) {
//   console.log(evt); //* бачимо в консолі, що є 'currentTarget':
//   console.log(evt.currentTarget); //* бачимо, хто викликав подію (по чому спрацьовує) - по кліку на h1
// }
//!  ^^^ Допомоміжний код ^^^ ---------------------------------------------------------------------
//!  vvv Допомоміжний код vvv ---------------------------------------------------------------------
//* Якщо обробляємо елемент по якому клікнули, краще використовувати 'target' чи 'currentTarget',
//* а не від зовнішніх змінних ( типу title.textContent.slice(0, 13) )
//* це дасть можливість маштабувати рішення

// title.addEventListener("click", onClick);

// function onClick(evt) {
//   const title = evt.currentTarget;
//   const str = title.textContent.slice(0, 13);
//   const remainder = title.textContent.slice(13); //* залишок
//* переносимо залишок в data-атрибут title:
//   title.setAttribute("data-title", remainder); //? setAttribute() встановлеює значення атрибута 'data-title' елементу 'title' на значення змінної 'remainder'
//* обрізаємо рядочок:
//   title.textContent = str + "...";

// console.log(remainder); //* просто перевірка на початку написання коду
// }
//!  ^^^ Допомоміжний код ^^^ ---------------------------------------------------------------------
//!- Текст, який відображається по кліку (розкриваються ...) --------------------------------------

//* Додаємо змінні довжини рядка:
// const maxLength = 13;
// const totalLength = maxLength + 3; //* враховуючи '...'
// title.addEventListener("click", onClick);

// function onClick(evt) {
//   const title = evt.currentTarget; //*  присвоємо 'title' посилання на елемент, на якому відбулась подія, і використоємо далі в коді для звернення до цього елемента.
//   const str = title.textContent.slice(0, maxLength); //? коли дія ідентична для 'if' та 'else' - то виносимо вище умов
//   //* Додаємо умову - в залежності від довжини рядка:
//   if (title.textContent.length > totalLength) {
//     const remainder = title.textContent.slice(maxLength);
//     title.setAttribute("data-title", remainder);
//     title.textContent = str + "...";
//   } else {
//     const remainder = title.dataset["title"]; //? getAttribute  - альтернативний метод звернення до data-атрибуту
//     title.textContent = str + remainder; //* до обрізаного 'str' додаємо data-атрибут
//     console.log(remainder);
//   }
// }

//!-Рисіч (30:30)--Декілька текстів різної довжини-----------------------------------------------------------------------------------------------
// const arr = [
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus odit mollitia debitis tenetur, ratione, voluptatem facilis fugiat vero dicta illo assumenda et ",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non necessitatibus odit mollitia debitis tenetur, ratione, voluptatem facilis fugiat vero",
// ];
const title = document.querySelector(".js-title");
const title1 = document.querySelector(".js-title1");
const title2 = document.querySelector(".js-title2");
//* віловлюємо клік по одному з елементів:
напряму взятий html-елемент і на нього ставимо 
title.addEventListener("click", onClick);
title1.addEventListener("click", onClick);
title2.addEventListener("click", onClick);

const maxLength = 13;
const totalLength = maxLength + 3; //* враховуючи '...'

function onClick(evt) {
  const title = evt.currentTarget; //*  присвоємо 'title' посилання на елемент, на якому відбулась подія, і використоємо далі в коді для звернення до цього елемента.
  //* таким чином добре маштабувати, немає привязки до якогось конкретного елемента, до якоїсь зовнішньої змінної
  //* працюємо з тим, на що було додано прослуховувача подій
  const str = title.textContent.slice(0, maxLength); //? коли дія ідентична для 'if' та 'else' - то виносимо вище умов
  //* Додаємо умову - в залежності від довжини рядка:
  if (title.textContent.length > totalLength) {
    const remainder = title.textContent.slice(maxLength);
    title.setAttribute("data-title", remainder);
    title.textContent = str + "...";
  } else {
    const remainder = title.dataset["title"];
    title.textContent = str + remainder;
    //? getAttribute  - альтернативний метод звернення до data-атрибуту
    // console.log(title.dataset["title"]);
    // console.log(title.dataset.title);
    //* перевіряємо, чи існує значення remainder у властивості data-title елемента title:
    // if (remainder) {
    //   title.textContent = str + remainder; //* до обрізаного 'str' додаємо data-атрибут
    // }
  }
}
//!------------------------------------------------------------------------------------------------

// const userName = document.querySelector('.js-input');

// userName.addEventListener('change', onInput);
// //userName.addEventListener('input', onInput)

// function onInput(evt){
//     console.dir(evt.currentTarget.value);
// }

// const formEl = document.querySelector(".js-form");
// formEl.addEventListener("submit", onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault();

//   const { userAge, userEmail, userName } = evt.currentTarget.elements;

//   const data = {
//     name: userName.value,
//     email: userEmail.value,
//     age: userAge.value,
//   };

//   console.log(data);
// }

// const container = document.querySelector(".js-container");
// window.addEventListener("keydown", onKey);

// function onKey(evt) {
//   console.log(evt);
//   // if(evt.code === 'Escape' || evt.code === 'Enter'){
//   //     container.classList.toggle('tog')
//   // }

//   if (evt.ctrlKey && (evt.code === "KeyC")) {
//     console.log('try copy');
//     evt.preventDefault()
//     // alert("Копіюєш?");
//     return;
//   }
// }

// Перерва до 22.10
// const cars = [
//   {
//     id: 1,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 33,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 3,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 4,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];
// const list = document.querySelector(".js-list");
// const favoriteList = document.querySelector(".js-favorite-list");
// const form = document.querySelector(".js-search-form");
// form.addEventListener("submit", onSearch);
// list.addEventListener("click", onClick);
// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ id, car, type, price, img }) => `
//   <li data-id="${id}">

//       <img src="${img}" alt="${car}" width="300">
//       <div class="js-favorite">★</div>
//       <h2>${car}</h2>
//       <h3>${type}</h3>
//       <p>${price}</p>
//   </li>`
//     )
//     .join("");
// }
// list.insertAdjacentHTML("beforeend", createMarkup(cars));

// function onSearch(evt) {
//   evt.preventDefault();

//   const form = evt.currentTarget;
//   const { query, select } = form.elements;
//   const selectValue = select.value;
//   const searchCars = cars.filter(
//     (
//       item //car || type
//     ) => item[selectValue].toLowerCase() === query.value.trim().toLowerCase()
//   );
//   list.innerHTML = createMarkup(searchCars);
// }

// function onClick(evt) {
//   if (evt.target.classList.contains("js-favorite")) {
//     evt.target.classList.add("js-favorite-active");

//     const { id } = evt.target.closest("li").dataset;

//     const {car, type} = cars.find(({ id: carId }) => carId === Number(id));
//     addFavorite(`${car} ${type}`)
//   }
// }

// function addFavorite(currentCar) {
//     favoriteList.insertAdjacentHTML('beforeend', `<li>${currentCar}</li>`)
// }
