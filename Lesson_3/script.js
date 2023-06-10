//         node Lesson_3/script           -  запуск через термінал ≡

//! =============================================
//? Об'єкти
//! =============================================

//* описують і групують х-ки об'єктів - користувача, книги, продукту магазину, чого завгодно.
//* Об'єкти ще називають словниками - вони містять терміни (властивості) та їх визначення (значення).
//         const book = {
//           title: "The Last Kingdom",
//           author: "Bernard Cornwell",
//           genres: ["historical prose", "adventure"],
//           public: true,
//           rating: 8.38,
//         };
//* Для оголошення використовуються фігурні дужки {} - літерал об'єкта.
//? При створенні об'єкта можна додати властивості, кожна з яких описується парами 'ключ:значення'.
//* Ключ ще називають ім'ям властивості і це завжди рядок.
//* Значенням властивості можуть бути любі типи: примітиви, масиви, об'єкти, булі, ф-ції.
//* Властивості розділяються комою.

//! ============================================================================
//* Task 1        Оголошення  Об'єкту
//! ============================================================================

//* Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:
//*      imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
//*      descr - опис, значення "Spacious apartment in the city center";
//*      rating - рейтинг, значення 4;
//*      price - ціна, значення 2153;
//*      tags - метаінформація, масив ["premium", "promoted", "top"].

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// console.log(apartment);

//! ============================================================================
//*              Значенням властивості може бути інший об'єкт (для зберігання вкладених і згрупованих даних):
//*                В майбутньому це можна буде використовувати для пошуку користувачів за країною, містом, min або max к-стю послідовників.
//?                       const user = {
//*                         name: "Jacques Gluke",
//*                         tag: "jgluke",
//?                         location: {            місце розташування (окремо країна і місто)
//*                           country: "Jamaica",
//* Task 2                    city: "Ocho Rios",
//*                         },
//?                         stats: {               в статистиці користувача соц. мережі (к-сть послідовників, переглядів і лайків)
//*                           followers: 5603,
//*                           views: 4827,
//*                           likes: 1308,
//*                         },
//*                       };
//! ============================================================================

//* Доповни об'єкт квартири властивістю 'owner', значенням якого - об'єкт з інформацією про власника. Додай йому властивості:
//*      name - ім'я власника, значення "Henry";
//*      phone - телефон, значення "982-126-1588";
//*      email - пошта, значення "henry.carter@aptmail.com".
//*    В об'єкта змінної 'apartment' є властивості imgUrl, descr, rating, price і tags (зі значеннями)
//*    В об'єкті apartment присутня властивість 'owner'

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// console.log(apartment);

//! ============================================================================
//?       book.title          об'єкт.ключ_властивості
//*             Перший спосіб отримати доступ до властивості об'єкта - «через крапку» - це синтаксис об'єкт.ключ_властивості.
//*               підходить коли ми заздалегідь знаємо ім'я (ключ) властивості.
//*             На місце звернення буде повернуте значення властивості з таким ім'ям.
//*             Якщо властивість з таким ім'ям відсутня  -  повернеться 'undefined'.
//*                  const book = {
//*                    title: "The Last Kingdom",
//*                    author: "Bernard Cornwell",
//* Task 3             genres: ["historical prose", "adventure"],
//*                    public: true,
//*                    rating: 8.38,
//*                  };
//*                       const bookTitle = book.title;
//?                       console.log(bookTitle); // "The Last Kingdom"
//*                     const bookGenres = book.genres;
//?                     console.log(bookGenres); // ["historical prose", "adventure"]
//*                       const bookPrice = book.price;
//?                       console.log(bookPrice); // undefined
//! ============================================================================

//* Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта 'apartment'.
//*    aptRating - рейтинг;
//*    aptDescr - опис;
//*    aptPrice - ціна;
//*    aptTags - теги.
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//! ============================================================================
//?         «через крапку»    -      user.location.country:   -   «крапка» вказує наступну вкладеніст  -  apartment.tags[apartment.tags.length - 1]
//*               const user = {
//*                 name: "Jacques Gluke",
//*                 tag: "jgluke",
//*                 location: {
//?                   country: "Jamaica",          доступ до країни користувача
//*                   city: "Ocho Rios",
//*                 },
//*                 hobbies: ["swiming", "music", "sci-fi"],
//* Task 4        };
//*                   const location = user.location;
//*                   console.log(location); // Об'єкт location
//*                   const country = user.location.country;
//*                   console.log(country); // "Jamaica"
//?           user.hobbies - звернення до масиву.
//?           Далі - доступ до його елементів через [i] та використання властивості і методи.
//*              const hobbies = user.hobbies;
//*              console.log(hobbies); // ["swiming", "music", "sci-fi"]
//?                 const firstHobby = user.hobbies[0];
//*                 console.log(firstHobby); // "swiming"
//?              const numberOfHobbies = user.hobbies.length;
//*              console.log(numberOfHobbies); // 3
//! ============================================================================

//* Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта 'apartment'
//*          ownerName - ім'я власника;
//*          ownerPhone - телефон;
//*          ownerEmail - пошта;
//*          numberOfTags - кількість елементів масиву у властивості tags;
//*          firstTag - перший елемент масиву у властивості tags;
//*          lastTag - останній елемент масиву у властивості tags.
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

//! ============================================================================
//?        об'єкт["ключ_властивості"]        Синтаксис «квадратних дужок»
//*               Другий спосіб отримати доступ до властивості об'єкта  -  Схоже на звернення до елемента масиву
//*            з відмінністю в тому, що в дужках зазначається не індекс елемента, а ім'я властивості як рядок.
//*            використовується значно рідше - коли ім'я властивості заздалегідь невідоме або воно зберігається у змінній (як значення параметра ф-ції, наприклад).
//*               На місце звернення буде повернуто значення властивості з таким ім'ям.
//*               Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.
//*                 const book = {
//*                   title: "The Last Kingdom",
//*                   author: "Bernard Cornwell",
//* Task 5            genres: ["historical prose", "adventure"],
//*                   public: true,
//*                   rating: 8.38,
//*                 };
//?                 const bookTitle = book["title"];
//*                 console.log(bookTitle); // "The Last Kingdom"
//?                 const bookGenres = book["genres"];
//*                 console.log(bookGenres); // ["historical prose", "adventure"]
//?                 const propKey = "author";
//?                 const bookAuthor = book[propKey];
//?                 console.log(bookAuthor); // "Bernard Cornwell"
//! ============================================================================

//*  Доповни код, присвоївши змінним вирази звернення до властивостей об'єкта 'apartment', використовуючи синтаксис «квадратних дужок».
//*           aptRating - рейтинг;
//*           aptDescr - опис;
//*           aptPrice - ціна;
//*           aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//! ============================================================================
//?    зміна властивостей об'єкта
//*              Для цього необхідно звернутися до них за ім'ям («через крапку») і присвоїти нове значення:
//*                  const book = {
//*                    title: "The Last Kingdom",
//*                    author: "Bernard Cornwell",
//*                    genres: ["historical prose", "adventure"],
//*                    public: true,
//* Task 6             rating: 8.38,
//*                  };
//*                  book.rating = 9;
//*                  book.public = false;
//*                  book.genres.push("drama");
//*                    console.log(book.rating); // 9
//*                    console.log(book.public); // false
//*                    console.log(book.genres); // ["historical prose", "adventure", "drama"]
//! ============================================================================

//*  Доповни код, оновивши значення властивостей об'єкта 'apartment':
//*          ціну у властивості price на 5000;
//*          рейтинг квартири у властивості rating на 4.7;
//*          ім'я власника у вкладеній властивості name на "Henry Sibola";
//*          масив тегів у властивості tags, додавши в кінець рядок "trusted".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);

//! =============================================
//?         Операція додавання нової властивості
//*             нічим не відрізняється від зміни значення вже існуючої властивості.
//*             Якщо під час запису значення за ім'ям, така властивість відсутня в об'єкті,- вона буде створена.
//*                 const book = {
//*                   title: "The Last Kingdom",
//*                   author: "Bernard Cornwell",
//*                   genres: ["historical prose", "adventure"],
//* Task 7            public: true,
//*                   rating: 8.38,
//*                 };
//*                 book.pageCount = 836;
//*                 book.originalLanguage = "en";
//*                 book.translations = ["ua", "ru"];
//*                 console.log(book);
//! =============================================

//*  Додай об'єкту apartment кілька нових властивостей:
//*         area - площа в квадратних метрах, число 60;
//*         rooms - кількість кімнат, число 3;
//*         location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
//*             country - країна, рядок "Jamaica";
//*             city - місто, рядок "Kingston".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
//? ----- ВАРІАНТ «через крапку» -----
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };
//? ----- ВАРІАНТ об'єкт["ключ_властивості"] -----
// apartment["location"] = {
//   country: "Jamaica",
//   city: "Kingston",
// };
//! ----- некоректний ВАРІАНТ об'єкт Object.create(apartment) -----
// const location = Object.create(apartment); // Метод Object.create() створює новий об'єкт, використовуючи існуючий об'єкт як прототип
// location.country = "Jamaica";
// location.city = "Kingston";
//! apartment.location = [(country = "Jamaica"), (city = "Kingston")]; // створить масив, але не обєкт!
// console.log(apartment);

//! =============================================
//?          якщо властивість має таке ж ім'я як у змінної (або параметра ф-ції)
//*             громіздкий синтаксис:  (дублювання ім'я властивості та ім'я змінної)
//*                 const name = "Генрі Сибола";
//*                 const age = 25;
//*                 const user = {
//*                   name: name,
//*                   age: age,
//*                 };
//*                 console.log(user.name); // "Генрі Сибола"
//* Task 8          console.log(user.age); // 25
//?          Синтаксис коротких властивостей (shorthand properties) - використовує ім'я змінної як ім'я властивості, а її значення як значення властивості.
//*                    const name = "Генрі Сибола";
//*                    const age = 25;
//*                    const user = {
//*                      name,
//*                      age,
//*                    };
//*                    console.log(user.name); // "Генрі Сибола"
//*                    console.log(user.age); // 25
//*          під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.
//! =============================================

//* Доповни код оголошення об'єкта, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами.
//* Обов'язково використовуй синтаксис коротких властивостей.
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];
// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(product);

//! =============================================
//?        Синтаксис обчислюваних властивостей (computed properties)
//*            Бувають ситуації, коли під час оголошення об'єкта потрібно додати властивість з ім'ям, яке ми заздалегідь не знаємо,
//*             тому що воно зберігається як значення змінної або як результат виконання функції.
//*             Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.
//*                  const propName = "name";
//*                  const user = {
//*                    age: 25, };
//* Task 9             user[propName] = "Генрі Сибола";
//*                  console.log(user.name); // "Генрі Сибола"
//*                (computed properties) допомагає уникнути зайвого коду (спростити його).
//*            Значенням обчислюваної властивості може бути будь-який валідний вираз.
//*                   const propName = "name";
//*                   const user = {
//*                     age: 25,
//*                     [propName]: "Генрі Сибола",   // Ім'я цієї властивості буде взято зі значення змінної propName };
//*                   console.log(user.name); // "Генрі Сибола"
//! =============================================

//*   Доповни код оголошення об'єкта credentials - щоб в результаті у нього були дві властивості:
//*         email і password, імена яких - у змінних emailInputName і passwordInputName.
//*   email = "henry.carter@aptmail.com",
//*   password = "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };
// console.log(credentials);

//! =============================================
//?         for (const key in book) {
//*                 На відміну від масиву або рядка, об'єкт - це не ітерабельна сутність - його не можна перебрати циклами for або for...of.
//*                    Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.
//*                    for (key in object) {
//                      інструкції
//*                    }
//?                    Змінна key доступна тільки в тілі циклу. На кожній ітерації в неї буде записано значення ключа(ім'я) властивості.
//*                    Для отримання значення властивості ключа (ім'я) - синтаксис квадратних дужок [].
//*                    const book = {
//* Task 10              title: "The Last Kingdom",
//*                      author: "Bernard Cornwell",
//*                      genres: ["historical prose", "adventure"],
//*                      rating: 8.38,
//*                    };
//?                    for (const key in book) {
//                       Ключ
//?                      console.log(key);
//                       Значення властивості з таким ключем
//?                      console.log(book[key]);
//*                    }
//! =============================================

//* Перебери об'єкт 'apartment', використовуючи цикл for...in,
//* і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//! =============================================
//* Task 11   Концепція власних і невласних властивостей об'єкта і правильне використання циклу for...in.
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";
console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4
//* Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal.
//* Тому можна отримати значення властивості legs, звернувшись до неї як dog.legs, хоча вона відсутня в об'єкті dog - це невласна властивість з об'єкта animal.

//* Оператор in, який використовується в циклі for...in, не розрізняє власні та невласні властивості об'єкта.
//*  Ця особливість заважає, оскільки ми завжди хочемо перебрати тільки власні властивості.Для того щоб дізнатися, чи є в об'єкті власна властивість, чи немає, використовується метод hasOwnProperty(key), який повертає true або false.

// ❌ Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false
// //* Тому під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість. Навіть якщо зараз ми впевнені у тому, що об'єкт не містить невласні властивості, це захистить від можливих помилок в майбутньому.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }
//! =============================================

//! =============================================
//* Task 12
//! =============================================

//! =============================================
//* Task 13
//! =============================================

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
