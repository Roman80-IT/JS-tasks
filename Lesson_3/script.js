//         node Lesson_3/script           -  запуск через термінал ≡
//         console.trace();

//! =============================================
//? Ф-ції
//! =============================================

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const item of order) {
//     total += item;
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //  138

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
//      { mango: 100, poly: 150, alfred: 80 }

//! ============================================================================
//? Task 1        Оголошення  Об'єкту
//! ============================================================================

//* Присвой змінній 'apartment' об'єкт, який описує квартиру з наступними характеристиками:
//*      imgUrl - фотографія = "https://via.placeholder.com/640x480";
//*      descr - опис = "Spacious apartment in the city center";
//*      rating - рейтинг = 4;
//*      price - ціна = 2153;
//*      tags - метаінформація - масив ["premium", "promoted", "top"].

//? const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//? };

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
//?   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//?   },
// };

// console.log(apartment);

//! ============================================================================
//?       book.title          об'єкт.ключ_властивості
//*             Перший спосіб отримати доступ до властивості об'єкта - «через крапку» - це синтаксис 'об'єкт.ключ_властивості'
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
//? const aptRating = apartment.rating;
//? const aptDescr = apartment.descr;
//? const aptPrice = apartment.price;
//? const aptTags = apartment.tags;
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//! ============================================================================
//?          «через крапку»  вказує наступну вкладеність  -     user.location.country
//?       user.hobbies[0]        apartment.tags[apartment.tags.length - 1]
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
//? const ownerName = apartment.owner.name;
//? const ownerPhone = apartment.owner.phone;
//? const ownerEmail = apartment.owner.email;
//? const numberOfTags = apartment.tags.length;
//! const firstTag = apartment.tags[0];
//! const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

//! ============================================================================
//?        cинтаксис «квадратних дужок»:         об'єкт["ключ_властивості"]
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
//? const aptRating = apartment["rating"];
//? const aptDescr = apartment["descr"];
//? const aptPrice = apartment["price"];
//? const aptTags = apartment["tags"];
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//! ============================================================================
//?    зміна властивостей об'єкта         ["owner"].name      apartment["tags"].push("trusted")
//?          «через крапку»      «квадратних дужок»  об'єкт["ключ_властивості"]
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
//*          ціну у властивості 'price' на 5000;
//*          рейтинг квартири у властивості 'rating' - на 4.7;
//*          ім'я власника у вкладеній властивості 'name' - на "Henry Sibola";
//*          масив тегів у властивості 'tags', додавши в кінець - рядок "trusted".
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
//?          ---- ВАРІАНТ «через крапку» ----
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
//?          ---- ВАРІАНТ об'єкт["ключ_властивості"] ----
// apartment["price"] = 5000;
// apartment["rating"] = 4.7;
//! apartment["owner"].name = "Henry Sibola";
//! apartment["tags"].push("trusted");

// console.log(apartment);

//! ==============================================================
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
//! ==============================================================

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
// const location = Object.create(apartment); //*  Метод Object.create() створює новий об'єкт, використовуючи існуючий об'єкт як прототип
// location.country = "Jamaica";
// location.city = "Kingston";
//! apartment.location = [(country = "Jamaica"), (city = "Kingston")]; // створить масив, але не обєкт!
// console.log(apartment);

//! ==============================================================
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
//! ==============================================================

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

//! ==============================================================
//?        Синтаксис обчислюваних властивостей (computed properties)
//*            Бувають ситуації, коли під час оголошення об'єкта потрібно додати властивість з ім'ям, яке ми заздалегідь не знаємо,
//*             тому що воно зберігається як значення змінної або як результат виконання функції.
//*             Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.
//*                  const propName = "name";
//*                  const user = {
//*                    age: 25, };
//? Task 9             user[propName] = "Генрі Сибола";
//*                  console.log(user.name); // "Генрі Сибола"
//?                (computed properties) допомагає уникнути зайвого коду (спростити його).
//?            Значенням обчислюваної властивості може бути будь-який валідний вираз.
//*                   const propName = "name";
//*                   const user = {
//*                     age: 25,
//?                     [propName]: "Генрі Сибола",   // Ім'я цієї властивості буде взято зі значення змінної propName        };
//*                   console.log(user.name); // "Генрі Сибола"
//! ==============================================================

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

//! ==============================================================
//?         for (const key in object) {
//*                 об'єкт - це не ітерабельна сутність - його не можна перебрати циклами 'for' або 'for...of' на відміну від масиву або рядка,
//*                    Для перебирання об'єктів використовується спеціальний цикл 'for...in', який перебирає ключі об'єкта 'object'.
//*                    for (key in object) {
//                      інструкції
//*                    }
//?                    Змінна key доступна тільки в тілі циклу. На кожній ітерації в неї буде записано значення ключа(ім'я) властивості.
//*                    Для отримання значення властивості ключа (ім'я) - синтаксис квадратних дужок [].
//* Task 10            const book = {
//*                      title: "The Last Kingdom",
//*                      author: "Bernard Cornwell",
//*                      genres: ["historical prose", "adventure"],
//*                      rating: 8.38,
//*                    };
//?                    for (const key in book) {
//                       console.log(key);                    //*  Ключ
//                       console.log(book[key]);          }   //*  Значення властивості з таким ключем
//! ==============================================================

//* Перебери об'єкт 'apartment', використовуючи цикл 'for...in',
//*  запиши в масив 'keys' всі його ключі, а в масив 'values' всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
//? for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//! ==============================================================
//?       Object.create(animal)            hasOwnProperty(key)      властивість клуча: object[key]
//?        Концепція власних і невласних властивостей об'єкта і правильне використання циклу for...in.
//*                      const animal = {
//*                        legs: 4,
//*                      };                                         console.log(dog); // {name: 'Mango'}
//*                      const dog = Object.create(animal);         console.log(dog.name); // 'Mango'
//*                      dog.name = "Mango";                        console.log(dog.legs); // 4
//?                 Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal.
//*                 dog.legs - отримаємо значення властивості legs, хоча вона відсутня в об'єкті dog - це невласна властивість з об'єкта animal.
//*                 Оператор in (в циклі 'for...in'), не розрізняє власні та невласні властивості об'єкта.
//*                 Ця особливість заважає, оскільки ми завжди хочемо перебрати тільки власні властивості.
//?                 метод hasOwnProperty(key) - перевіряє чи є в об'єкті власна властивість - повертає 'true' або 'false'
//                      ❌ Повертає true для всіх властивостей
//                      console.log("name" in dog); // true
//                      console.log("legs" in dog); // true
//! Task 11             ✅ Повертає true тільки для власних властивостей
//                      console.log(dog.hasOwnProperty("name")); // true
//                      console.log(dog.hasOwnProperty("legs")); // false
//*                  Тому під час перебору циклом 'for...in' необхідно на кожній ітерації додати перевірку на власну властивість.
//*                  Навіть якщо впевнені у тому, що об'єкт не містить невласні властивості,- це захистить від можливих помилок в майбутньому.
//                      const book = {
//                        title: "The Last Kingdom",
//                        author: "Bernard Cornwell",
//                        genres: ["historical prose", "adventure"],
//                        rating: 8.38,          };
//?                      for (const key in book) {
//?                        if (book.hasOwnProperty(key)) {            //      Якщо це власна властивість - виконуємо тіло if
//?                          console.log(key);
//?                          console.log(book[key]);
//?                        }
//                      Якщо це невласна властивість - нічого не робимо         //?      }
//! ==============================================================

//* Виконай рефакторинг рішення попереднього завдання, додавши в цикл 'for...in' перевірку на власну властивість.
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;
// for (const key in apartment) {
//?   if (apartment.hasOwnProperty(key)) {
//?     keys.push(key);
//?     values.push(apartment[key]);
//   }
// }
// console.log(keys);
// console.log(values);

//! ==============================================================
//?           for...in
//* Task 12         ПІДРАХУНОК ВЛАСТИВОСТЕЙ
//?
//! ==============================================================

//* Напиши ф-цію countProps(object), яка рахує і повертає к-сть власних властивостей об'єкта в параметрі object.
//* Використовуй змінну propCount для зберігання к-сті властивостей об'єкта.
//* Ф-ція підраховує тільки власні властивості об'єкта

// function countProps(object) {
//   let propCount = 0;
//   //! Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount++;
//     }
//   }
//   //! Change code above this line
//   return propCount;
// }
// console.log(countProps({})); //  0
// console.log(countProps({ name: "Mango", age: 2 })); //  2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //  3

//! =============================================================
//?           Object.keys(obj)                   'for...of'
//*               повертає масив ключів власних властивостей об'єкта.
//*                   Якщо в об'єкті немає властивостей, метод поверне порожній масив.
//*                        const book = {
//*                          title: "The Last Kingdom",
//*                          author: "Bernard Cornwell",
//*                          genres: ["historical prose", "adventure"],
//*                          rating: 8.38,
//*                        };
//*                        const keys = Object.keys(book);
//*                        console.log(keys); // ['title', 'author', 'genres', 'rating']
//? Task 13         Скомбінувавши результат Object.keys()   +   цикл 'for...of'   перебираємо власні властивості об'єкта,
//?                 не вдаючись до використання архаїчного циклу 'for...in' з перевірками приналежності властивостей.
//*                    const book = {
//*                      author: "Bernard Cornwell",
//*                      genres: ["historical prose", "adventure"],
//*                      rating: 8.38,
//*                    };
//*                    const keys = Object.keys(book);
//*                    for (const key of keys) {*
//*                      console.log(key);*                 //  Ключ
//*                      console.log(book[key]);            //  Значення властивості
//*                    }
//! ==============================================================

//*   Перебери об'єкт 'apartment', використовуючи метод Object.keys() і цикл for...of.
//*   Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.
//*      Значення змінної values отримане за допомогою циклу for...of.
//*      Значення змінної keys отримане за допомогою методу Object.keys().
//* Значення змінної keys - це масив ["descr", "rating", "price"].
//* Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
//    //! Change code below this line
//? const keys = Object.keys(apartment);
//? for (const key of keys) {
//?   values.push(apartment[key]);
//    //!  console.log(key);
// }
// console.log(keys); //      ["descr", "rating", "price"]
// console.log(values); //    ["Spacious apartment in the city center", 4, 2153]

//! ==============================================================
//?         Object.keys()              for...of
//* Task 14          ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0
//! ==============================================================

//* Виконай рефакторинг ф-ції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.
//*       Ф-ція підраховує тільки власні властивості об'єкта
//*       Ф-ція використовує метод Object.keys() і, можливо, цикл for...of
//? архаїчний цикл       for...in
//*              function countProps(object) {
//*                let propCount = 0;
//*                for (const key in object) {
//*                  if (object.hasOwnProperty(key)) {
//*                    propCount += 1;
//*                  }
//*                }
//*                return propCount;
//*              }

// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

//? Визначення довжини масиву (к-сті ключів)
//* ----- Довгий запис -----
// function countProps(object) {
//   let propCount = 0; //     'let' - тому що змінемо далі
//   const keys = Object.keys(object);
//   propCount = keys.length;
//   return propCount;
// }
//* ----- ОСНОВНИЙ короткий ЗАПИС, без перевірки на власні властивості об'єкта -----
// function countProps(object) {
//   return Object.keys(object).length;
// }

//* ----- Не ОСНОВНИЙ ЗАПИС з перевіркою -----
// function countProps(object) {
//   const keys = Object.keys(object);
//   let propCount = 0;
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }

//! ==============================================================
//?          Object.values(obj)           Object.keys(obj)
//*          метод повертає масив значень його власних властивостей. Якщо в об'єкті відсутні властивості - поверне порожній масив.
//*             метод Object.keys(obj) повертає масив ключів власних властивостей об'єкта
//*                  const book = {
//*                    title: "The Last Kingdom",
//*                    author: "Bernard Cornwell",
//* Task 15            rating: 8.38,
//*                  };
//                const keys = Object.keys(book);
//                console.log(keys); // ["title", "author", "genres", "rating"]
//                   const values = Object.values(book);
//                   console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]
//*           Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.
//! ==============================================================

//* Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
//* а у змінну values - масив всіх значень його властивостей.Використовуй методи Object.keys() і Object.values().
//*      Для отримання масиву ключів об'єкта apartment використовується Object.keys()
//*      Для отримання масиву значень об'єкта apartment використовується Object.values()
// keys - це масив ["descr", "rating", "price"]
// values - це масив ["Spacious apartment in the city center", 4, 2153]

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

//! ==============================================================
//?        Object.values()         for...of       Сума:  totalSalary += salary
//* Task 16        ВИТРАТИ НА ЗАРПЛАТУ
//! ==============================================================

//* ф-ція countTotalSalary(salaries) приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата.
//* повинна розрахувати загальну суму зарплат співробітників (змінна totalSalary) і повернути її.
//*      змінна totalSalary - загальна сума зарплати.
//* Ф-ція враховує тільки власні властивості об'єкта
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const salaryValues = Object.values(salaries);
//   for (const salary of salaryValues) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

//! =================================================================
//?          for...of          «через крапку»
//?           маніпуляція масивом однотипних об'єктів
//*              всі об'єкти в масиві гарантовано матимуть однаковий набір властивостей, але з різними значеннями.
//*                 const books = [
//*                   {
//*                     title: "The Last Kingdom",
//*                     author: "Bernard Cornwell",
//*                     rating: 8.38,
//*                   },
//*                   {
//*                     title: "Beside Still Waters",
//*                     author: "Robert Sheckley",
//*                     rating: 8.51,
//*                   },
//*                   {
//*                     title: "The Dream of a Ridiculous Man",
//* Task 17             author: "Fyodor Dostoevsky",
//*                     rating: 7.75,
//*                   },
//*                 ];
//?           for...of - для перебирання масиву
//?           синтаксис «через крапку» - отримуємо значення властивостей кожного об'єкта
//?           (в кожному об'єкті набір властивостей та їх імена будуть однакові - відрізняються тільки значення)
//*                for (const book of books) {
//*                  // Об'єкт книги
//*                  console.log(book);
//*                  // Назва
//*                  console.log(book.title);
//*                  // Автор
//*                  console.log(book.author);
//*                  // Рейтинг
//*                  console.log(book.rating);
//*                }
//! ================================================================

//* Перебери масив об'єктів colors, використовуючи цикл for...of.
//* Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

//! =======================================================
//? Task 18          ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ
//! =======================================================

//* ф-ція getProductPrice(productName) приймає один параметр productName - назва продукту.
//* Ф-ція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price).
//* Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar")); // 1300
// console.log(getProductPrice("Grip")); // 1200
// console.log(getProductPrice("Scanner")); // 2700
// console.log(getProductPrice("Droid")); // 400
// console.log(getProductPrice("Engine")); // null

//! ====================================================================
//?        об'єкт["ключ_властивості"] (cинтаксис «квадратних дужок»)       for...of
//?                  map()                    reduce()
//* Task 19        КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ
//*
//! ===================================================================

//* ф-ція getAllPropValues(propName) приймає один параметр propName - ім'я (ключ) властивості.
//* Ф-ція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//* Якщо в об'єктах відсутні властивості з таким ім'ям, ф-ція повинна повернути порожній масив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// //*  ----- Використання циклу for...of: -----
// function getAllPropValues(propName) {
//   const propValues = [];
//   for (const value of products) {
//!  ПЕРЕВІРКА  інакше будуть додаватись всі значення властивостей, навіть якщо вони є undefined або відсутні.
//     if (value[propName]) {
//       propValues.push(value[propName]);
//     }
//   }
//   return propValues;
// }

// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // []

//* ----- Використання циклу for: -----
// function getAllPropValues(propName) {
//   var values = [];
//   for (var i = 0; i < products.length; i++) {
//     if (products[i][propName]) {
//       values.push(products[i][propName]);
//     }
//   }
//   return values;
// }

//* Використання методу map():
// function getAllPropValues(propName) {
//   return products
//     .map(function (product) {
//       return product[propName];
//     })
//     .filter(function (value) {
//       return value !== undefined;
//     });
// }

//* Використання методу reduce():
// function getAllPropValues(propName) {
//   return products.reduce(function (values, product) {
//     if (product[propName]) {
//       values.push(product[propName]);
//     }
//     return values;
//   }, []);
// }

//! =============================================
//* Task 20         ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ
//! =============================================

// ф-ція calculateTotalPrice(productName) приймає один параметр productName - назва товару.
// Ф-ція повинна повернути загальну вартість(ціна * к-сть) товару з таким ім'ям з масиву products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName)
//       totalPrice = product.price * product.quantity;
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice("Blaster")); //  0
// console.log(calculateTotalPrice("Radar")); //  5200
// console.log(calculateTotalPrice("Droid")); //  2800
// console.log(calculateTotalPrice("Grip")); //  10800
// console.log(calculateTotalPrice("Scanner")); //  8100

//! =============================================
//?          Деструктуризація             const { title, author, public, rating, coverImage } = book
//*      Складні дані завжди представлені об'єктом. Багаторазові звернення до властивостей об'єкта візуально забруднюють код.
//                     const book = {
//                       title: "The Last Kingdom",
//                       author: "Bernard Cornwell",
//                       genres: ["historical prose", "adventure"],
//                       public: true,
//                       rating: 8.38,
//                     };
//                          const accessType = book.public ? "публічному" : "закритому";
//                          const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;
//?               Деструктуризація дозволяє «розпакувати» значення властивостей об'єкта у локальні змінні.
//* Task 21           Це робить код в місці їх використання менш «шумним».
//                     const book = {
//                       title: "The Last Kingdom",
//                       author: "Bernard Cornwell",
//                       genres: ["historical prose", "adventure"],
//                       public: true,
//                       rating: 8.38,
//                     };
//?                     Деструктуризуємо
//?                           const { title, author, public, rating, coverImage } = book;
//                           console.log(coverImage); // undefined
//                           const accessType = public ? "публічному" : "закритому";
//                           const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
//?                     Деструктуризація завжди знаходиться у лівій частині операції присвоєння.
//*                     Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта.
//*                     Якщо ім'я змінної та ім'я властивості збігаються, то відбувається присвоювання - в іншому випадку їй буде присвоєно undefined.
//*                     Порядок оголошення змінних у фігурних дужках не важливий.
//! =============================================

//* Надійшов триденний прогноз макс. т-тур і ми рахуємо середню температуру за три дні (meanTemperature).
//* Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.
//*       Оголошена змінні yesterday today tomorrow за допомогою деструктуризації
//*       Використовується синтаксис деструктуризації об'єкта highTemperatures

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;
//* const yesterday = highTemperatures.yesterday;
//* const today = highTemperatures.today;
//* const tomorrow = highTemperatures.tomorrow;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);  // 29

//! ===================================================
//?      Деструктуризація  - задати змінним значення за замовчуванням
//*                 З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей,
//*                 можна задати змінним значення за замовчуванням, які будуть присвоєні, коли в об'єкті відсутня властивість з таким ім'ям.
//*                     const book = {
//*                       title: "The Last Kingdom",
//*                       author: "Bernard Cornwell",
//*                     };
//                  Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
//? Task 22             const {
//?                       title,
//?                       coverImage = "https://via.placeholder.com/640/480",
//?                       author,
//?                     } = book;
//*                     console.log(title); // "The Last Kingdom"
//*                     console.log(author); // "Bernard Cornwell"
//*                     console.log(coverImage); // "https://via.placeholder.com/640/480"
//! ==================================================

//*  У прогнозі макс. т-тур - необов'язкова властивість icon - іконка погоди.
//*     Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures.
//*     Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
//*     Використовується деструктуризація об'єкта

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
//* const yesterday = highTemperatures.yesterday;
//* const today = highTemperatures.today;
//* const tomorrow = highTemperatures.tomorrow;
//* const icon = highTemperatures.icon;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature); // 29

//! =============================================
//*            Під час деструктуризації можна змінити ім'я змінної, в яку розпаковується значення властивості.
//*             Спочатку пишемо ім'я властивості, з якої отримуємо значення - після чого - двокрапка : та ім'я змінної,
//*             в яку необхідно помістити значення цієї властивості.
//*                       const firstBook = {
//                         title: "Останнє королівство",
//                         coverImage:
//                           "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//                       };
//                      const {
//                         title: firstTitle,
//?                         coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// Task 23                       } = firstBook;
//                       console.log(firstTitle); // Останнє королівство
//                       console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
//*                       const secondBook = {
//                         title: "Сон смішної людини",
//                       };
//                       const {
//                         title: secondTitle,
//?                         coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
//                       } = secondBook;
//                       console.log(secondTitle); // Сон смішної людини
//                       console.log(secondCoverImage); // https://via.placeholder.com/640/480
//*                       Такий запис читається як «Створити змінну firstTitle, в яку помістити значення властивості title з об'єкта firstBook» тощо.
//! =============================================

//* Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей об'єкта highTemperatures.
//*   значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
//*   Значення змінної highIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
//! Change code below this line
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
//* const highYesterday = highTemperatures.yesterday;
//* const highToday = highTemperatures.today;
//* const highTomorrow = highTemperatures.tomorrow;
//* const highIcon = highTemperatures.icon;
//! Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature); // 29
// console.log(highIcon); //
// console.log(highTemperatures); //

//! =============================================
//?          for...of
//*      Під час перебирання масиву об'єктів циклом for...of відбуваються багаторазові звернення до властивостей об'єкта.
//                   const books = [
//                     {
//                       title: "The Last Kingdom",
//                       author: "Bernard Cornwell",
//                       rating: 8.38,
//                     },
//                     {
//                       title: "Beside Still Waters",
//                       author: "Robert Sheckley",
//                       rating: 8.51,
//                     },
//                   ];
//                   for (const book of books) {
//                     console.log(book.title);
//* Task 24            console.log(book.author);
//                     console.log(book.rating);
//                   }
//*                   щоб скоротити к-сть повторень, можна деструктуризувати властивості об'єкта у локальні змінні в тілі циклу.
//                   for (const book of books) {
//                     const { title, author, rating } = book;
//                     console.log(title);
//                     console.log(author);
//                     console.log(rating);
//                   }
//*                   Якщо об'єкт містить небагато властивостей, деструктуризація можна виконати безпосередньо в місці оголошення змінної book.
//                   for (const { title, author, rating } of books) {
//                     console.log(title);
//                     console.log(author);
//                     console.log(rating);
//                   }
//! =============================================

//* Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.
//*        colors - це масив
//*        Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
//*        Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
//*        В циклі for...of використовується деструктуризація об'єкта
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
//! Change code below this line
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//! =============================================
//*         Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах.
//                     const user = {
//                       name: "Jacques Gluke",
//                       tag: "jgluke",
//                       stats: {
//                         followers: 5603,
//                         views: 4827,
//                         likes: 1308,
//                       },
//* Task 25            };
//                     const {
//                       name,
//                       tag,
//?                       stats: { followers, views: userViews, likes: userLikes = 0 },
//                     } = user;
//*                     console.log(name); // Jacques Gluke
//*                     console.log(tag); // jgluke
//*                     console.log(followers); // 5603
//*                     console.log(userViews); // 4827
//*                     console.log(userLikes); // 1308
//! =============================================

//* Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast. Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
//*       forecast - це об'єкт
//*       highToday - це число 32
//*       lowToday - це число 28
//*       todayIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
//*       highTomorrow - це число 31
//*       lowTomorrow - це число 27
//*       tomorrowIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//* Використовується синтаксис деструктуризації об'єкта highTemperatures

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
//! Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;
//* const highToday = forecast.today.high;
//* const lowToday = forecast.today.low;
//* const todayIcon = forecast.today.icon;
//* const highTomorrow = forecast.tomorrow.high;
//* const lowTomorrow = forecast.tomorrow.low;
//* const tomorrowIcon = forecast.tomorrow.icon;
// console.log(forecast);

//! ===============================================================
//?         Патерн «Об'єкт налаштувань»
//*          Якщо ф-ція приймає > 3-ох аргументів, легко заплутатися в послідовності і що передавати.
//                     function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
//*                  // Робимо щось з параметрами
//                      console.log(title);
//                      console.log(numberOfPages);    }
//*                    ❌ Що таке 736? 10283? true?:
//                Виклик:                 doStuffWithBook("Останнє королівство", 736, 10283, 8.38, true);
//?                 Патерн «Об'єкт налаштувань» вирішує це - замінює набір параметрів всього одним - об'єктом з іменованими властивостями.
//                Переписуємо ф-цію:      function doStuffWithBook(book) {
//*                  // якісь дії з властивостями об'єкта
//                    console.log(book.title);
//                    console.log(book.numberOfPages);   }
//*               Тоді під час її виклику передаємо 1 об'єкт з необхідними властивостями.
//* Task 26            ✅ Все зрозуміло:
//                Виклик:                 doStuffWithBook({
//                      title: "Останнє королівство",
//                      numberOfPages: 736,
//                      downloads: 10283,
//                      rating: 8.38,
//                      public: true,        });
//?                +  Ще можна деструктуризувати об'єкт в параметрі book -      в тілі ф-ції:
//                    function doStuffWithBook(book) {
//?                     const { title, numberOfPages, downloads, rating, public } = book;
//                      console.log(title);
//                      console.log(numberOfPages);       }
//?                   Або в сигнатурі (підписі), різниці немає.
//                    function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
//                      console.log(title);
//                      console.log(numberOfPages);      }
//! =============================================================

//*  Ф-ція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
//*  Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.
//*  Оголошена функція calculateMeanTemperature(forecast)
//*        В тілі ф-ції використовується деструктуризація об'єкта
//*        В тілі ф-ції оголошена змінна todayHigh за допомогою деструктуризації
//*        В тілі ф-ції оголошена змінна todayLow за допомогою деструктуризації
//*        В тілі ф-ції оголошена змінна tomorrowLow за допомогою деструктуризації
//*        В тілі ф-ції оголошена змінна tomorrowHigh за допомогою деструктуризації

//! Change code below this line
//* function calculateMeanTemperature(forecast) {
//*   const todayLow = forecast.today.low;
//*   const todayHigh = forecast.today.high;
//*   const tomorrowLow = forecast.tomorrow.low;
//*   const tomorrowHigh = forecast.tomorrow.high;
//?  ------ ВАРІАНТ 1 ------
// function calculateMeanTemperature({
//   today: { low: todayLow, high: todayHigh },
//   tomorrow: { low: tomorrowLow, high: tomorrowHigh },
// }) {
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//?  ------ ВАРІАНТ 2 ------
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//! Change code above this line
// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// ); // 28.5
// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   })
// ); // 37

//! ===============================================================
//?           Синтаксис ... (spread)
//?                дозволяє розподілити колекцію елементів (масив, рядок або об'єкт) в місце, в якому очікується набір окремих значень.
//*             Звичайно, існують деякі обмеження, наприклад, не можна розподілити масив в об'єкт і навпаки.
//*             Можна навести аналогію з ящиком яблук. Поставивши ящик на підлогу, не виймаючи з нього яблука, отримаємо аналог масиву значень.
//*                  Якщо висипати яблука з ящика на підлогу, відбудеться розподіл - набір окремих значень.
//*                  Відмінність лише одна - в JS розподіл не змінює оригінальну колекцію, тобто створюється копія кожного елемента.
//*                   Після розподілу залишиться і ящик повний яблук, і копія кожного яблука на підлозі.
//*                  Наприклад, метод Math.max (аргументи) шукає і повертає найбільший з аргументів (чисел), тобто очікує не масив значень,
//* Task 27                 а довільну к-сть аргументів.
//               const temps = [14, -4, 25, 8, 11];
//               console.log(temps);    // В консолі буде масив
//*             // ❌ Так не спрацює, тому що передаємо цілий масив
//               console.log(Math.max(temps)); // NaN
//*             // В консолі буде набір окремих чисел
//               console.log(...temps);
//*             // ✅ Розподілимо колекцію елементів у якості окремих аргументів
//               console.log(Math.max(...temps)); // 25
//*             Тобто запис Math.max (... [14, -4, 25, 8, 11]), після інтерпретації перетворюється у Math.max (14, -4, 25, 8, 11)
//*             - синтаксис ... повертає розпакований масив, тобто розподіляє його елементи у якості окремих аргументів.
//! ===============================================================

//* У змінній scores зберігається масив результатів тестування. Використовуючи розподіл і методи Math.max() і Math.min(),
//*  доповни код, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.
//*  Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
//*  Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore); // 93
// console.log(worstScore); // 17
// console.log(...scores); // 17

//! ===============================================================
//?         Операція '.spread'  (операція розподілу)      - аналог    slice() і concat()
//*                 дозволяє створити копію масиву або «склеїти» довільну к-сть масивів в 1 новий.
//*                    Раніше для цього використовували методи slice() і concat() - операція розподілу дозволяє зробити те саме у коротшій формі.
//                          const temps = [14, -4, 25, 8, 11];
//*                     // Це точна, але незалежна копія масиву temps
//?                         const copyOfTemps = [...temps];
//                          console.log(copyOfTemps); // [14, -4, 25, 8, 11]
//*                   В наведеному вище прикладі у нас є ящик яблук temps і ми хочемо створити його точну копію.
//* Task 28             Беремо порожній ящик і пересипаємо в нього яблука з вихідного ящика temps - розподіляємо його в іншу колекцію.
//*                     За такої умови, ящик temps не зміниться, в ньому все ще будуть яблука, а в новому ящику - їх точні копії.

//*                   Наступний приклад - зсипаємо яблука з 2-ох ящиків в 1
//*                     Оригінальні ящики(масиви) не зміняться, а в новому будуть копії усіх їх яблук(елементів).
//*                     Порядок розподілу важливий - він впливає на порядок елементів у новій колекції.
//                       const lastWeekTemps = [14, 25, 11];
//                       const currentWeekTemps = [23, 17, 18];
//                       const allTemps = [...lastWeekTemps, ...currentWeekTemps];
//                       console.log(allTemps); // [14, 25, 11, 23, 17, 18]
//! ===============================================================

//* У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп.
//*  Використовуючи розподіл, доповни код:
//*       У змінній allScores - зберігається масив від 1-ої до 3-ої групи.
//*       bestScore - найвищий загальний бал.
//*       worstScore - найнижчий загальний бал.
//* Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву
//* Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
//* Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
//! Change code below this line
//* const allScores = [];
//* const bestScore = allScores;
//* const worstScore = allScores;
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores); // [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// console.log(bestScore); // 97
// console.log(worstScore); // 14

//! ===============================================================
//?          Порядок і перезапис однакових значень при розподілі
//*               Операція spread дозволяє розподілити властивості довільної к-сті об'єктів в один новий.
//                  const first = { propA: 5, propB: 10 };
//                  const second = { propC: 15 };
//                  const third = { ...first, ...second };
//                  console.log(third); //       { propA: 5, propB: 10, propC: 15 }
//*               Порядок розподілу має значення.Імена властивостей об'єкта - унікальні,
//*               тому властивості об'єкта, що розподіляється, можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.
//              const first = { propA: 5, propB: 10, propC: 50 };
//              const second = { propC: 15, propD: 20 };
//                   const third = { ...first, ...second };
// Task 29           console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }
//              const fourth = { ...second, ...first };
//              console.log(fourth); // { propC: 50, propD: 20, propA: 5, propB: 10 }
//*                в одному ящику не може бути 2-ох яблук з однаковими наліпками - пересипаючи 2-ий ящик, усі яблука, позначки яких будуть збігатися - замінять існуючі.
//*                Під час розподілу можна додавати властивості у довільне місце.
//*                - пам'ятай про унікальність імені властивості і, що її значення може бути перезаписане.
//              const first = { propA: 5, propB: 10, propC: 50 };
//              const second = { propC: 15 };
//                  const third = { propB: 20, ...first, ...second };
//                  console.log(third); // { propA: 5, propB: 10, propC: 15 }
//              const fourth = { ...first, ...second, propB: 20 };
//              console.log(fourth); // { propA: 5, propB: 20, propC: 15 }
//                  const fifth = { ...first, propB: 20, ...second };
//                  console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
//! ===============================================================

//* В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings.
//*      Під час створення тесту, налаштування можна перевизначити, вони зберігаються у змінній overrideSettings.
//* Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені налаштування.
//*      Доповни код, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.
//*        змінна defaultSettings - це об'єкт
//*        змінна overrideSettings - це об'єкт
//*        змінна finalSettings - це об'єкт
//*  Для присвоєння значення змінній finalSettings використовується синтаксис ...
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// //! Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings.theme); //  "light"
// console.log(finalSettings.public); //  "false"
// console.log(finalSettings.withPassword); //  "true"
// console.log(finalSettings.minNumberOfQuestions); //  10
// console.log(finalSettings.timePerQuestion); //  30

//! ===============================================================
//* Task 30          КАРТКИ ЗАВДАНЬ
//! ===============================================================

//*  ф-ція makeTask(data) - приймає параметр 'data' - об'єкт з наступними властивостями.
//*          category - категорія
//*          priority - пріоритет
//*          text - текст
//*          completed
//*  Ф-ція створює і повернути новий об'єкт завдання, не змінюючи напряму параметр 'data'
//*         В параметрі data гарантовано буде тільки властивість text,
//*      а інші - category і priority, можуть бути відсутніми.
//*   Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.
//*  Оголошена ф-ція makeTask(data)
// console.log(makeTask({})); //      { category: "General", priority: "Normal", completed: false }
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// ); //   { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" })); //    { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" })); // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: "Buy bread" })); // { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   //! Change code below this line
//   return { category, priority, ...data, completed };
//! Change code above this line
// }

//! ===============================================================
//?      Операція ... (rest)
//*             дозволяє зібрати групу незалежних елементів у нову колекцію.
//*               Синтаксично - це близнюк операції розподілу, але відрізнити їх просто:
//*                - розподіл - коли ... знаходиться у правій частині операції присвоювання,
//*                - збирання - коли ... знаходиться в її лівій частині.
//*            по аналогії з яблуками - якщо на підлозі лежать яблука і є порожній ящик,- то 'rest' дозволить «зібрати» яблука в ящик.
//*            Водночас, оригінальні яблука залишаться на підлозі, а в ящику буде копія кожного яблука.
//*            Одна зі сфер застосування операції rest - це створення ф-цій, які можуть приймати будь-яку к-сть аргументів.
//*               //  Як оголосити параметри ф-ції, щоб можна було передати будь-яку к-сть аргументів?
//*                       function multiply() {
//* Task 31       // ...
//*                }
//*                multiply(1, 2);
//*                multiply(1, 2, 3);
//*                multiply(1, 2, 3, 4);
//*              Якщо прибрати увесь «синтаксичний шум» і подивитися на аргументи і параметри ф-ції, то аргументи знаходяться у правій частині операції присвоювання,
//*              а параметри - у лівій, тому що значення аргументів присвоюються оголошеним параметрам. Отже, можна «зібрати» всі аргументи функції в один параметр, використовуючи операцію rest.
//?                  function multiply(...args) {
//                     console.log(args); // масив усіх аргументів
//                   }
//                    multiply(1, 2);
//                    multiply(1, 2, 3);
//                    multiply(1, 2, 3, 4);
//*              Ім'я параметра може бути довільним. Найчастіше його називають args, restArgs або otherArgs - скорочено від arguments.
//! ===============================================================

//* Використовуючи операцію rest, доповни код ф-ції add(), щоб вона приймала будь-яку к-сть аргументів, рахувала і повертала їх суму.
//*      ф-ція add використовує параметр args
//? Для збирання аргументів у змінну args, у підписі ф-ції використовується синтаксис ... (оператор rest)
// console.log(add(15, 27)); //  42
// console.log(add(12, 4, 11, 48)); //  75
// console.log(add(32, 6, 13, 19, 8)); //  78
// console.log(add(74, 11, 62, 46, 12, 36)); //  241

//?   ---- ВАРІАНТ for...of ----
//* У всіх цих варіантах  оператор '(rest) ...args' збирає всі аргументи у масив 'args'.
//* Потім (залежно від способу) проходимо через елементи масиву args і додаємо їх до змінної sum (сума).
// function add(...args) {
//   let sum = 0;
//   for (const i of args) {
//     sum += i;
//   }
//   return sum;
// }

//?   ---- ВАРІАНТ цикл for ----
// function add(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }

//?   ---- ВАРІАНТ reduce() ----
//*  ...args збирає всі передані аргументи в масив args.
//*  Потім метод reduce() використовується для обчислення суми елементів цього масиву, починаючи зі значення 0
// function add(...args) {
//   return args.reduce((sum, current) => sum + current, 0);
// }

//?   ---- ВАРІАНТ reduce(): метод Array.prototype.reduce() без початкового значення ----
// function add(...args) {
//   return args.reduce((sum, num) => sum + num);
// }

//?   ---- ВАРІАНТ метод Array.prototype.forEach() ----
// function add(...args) {
//   let sum = 0;
//   args.forEach((num) => {
//     sum += num;
//   });
//   return sum;
// }

//?   ---- ВАРІАНТ Використання рекурсії ----
// function add(...args) {
//   if (args.length === 0) {
//     return 0;
//   } else {
//     const [first, ...rest] = args;
//     return first + add(...rest);
//   }
// }

//! ===============================================================
//*           Операція ... (rest) також дозволяє зібрати в масив тільки ту частину аргументів, яка необхідна, оголосивши параметри до «збирання».
//              function multiply(firstNumber, secondNumber, ...otherArgs) {
//                  console.log(firstNumber); //   Значення 1-го аргументу
//                  console.log(secondNumber); //  Значення 2-го аргументу
// Task 32          console.log(otherArgs); //     Масив інших аргументів         }
//               multiply(1, 2); //        1  2  [ ]
//               multiply(1, 2, 3); //     1  2  [ 3 ]
//               multiply(1, 2, 3, 4); //  1  2  [ 3, 4 ]
//*                аргументи, для яких будуть оголошені параметри,- передадуть їм свої значення,
//*                інші аргументи будуть поміщені в масив.
//?                Операція rest збирає решту усіх аргументів, а тому повинна бути останньою у підписі функції, інакше виникне помилка.
//! ===============================================================

//*   Ф-ція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло ф-ції addOverNum(),
//*   Потрібно щоб вона рахувала суму тільки тих аргументів, які > за задане число (перший параметр ф-ції)
// console.log(addOverNum(50, 15, 27)); //    0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //    71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //    51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //    218

//! Change code below this line
//* function addOverNum(...args) {
//*   let total = 0;
//*   for (const arg of args) {
//*     total += arg;
//*   }
//*   return total;
//! Change code above this line
// function addOverNum(value, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > value) {
//       total += arg;
//     }
//   }
//   return total;
// }

//! ===============================================================
//?         includes()     filter()     reduce()    {лінійна складність (O(n))}        Цикл в циклі  {складність (O(n^2))}
//* Task 33        МАСИВ ЗБІГІВ
//! ===============================================================

//* Ф-ція findMatches() приймає довільну к-сть аргументів. Перший аргумент - масив чисел, а решта аргументів - просто числа.
//* Доповни код ф-ції, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.
//* Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //  [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //  [17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); //  [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); //  []
//! Change code below this line
//* function findMatches() {
//*   const matches = []; // Don't change this line
//! Change code above this line

//?   ---- ВАРІАНТ includes() ----
// function findMatches(massif, ...args) {
//   const matches = [];
//   for (let i = 0; i < args.length; i++) {
//     if (massif.includes(args[i])) {
//       matches.push(args[i]);
//     }
//   }
//   return matches;
// }

//?   ---- ВАРІАНТ filter() та includes() ----
//* args.filter(...) створює новий масив, який буде містити елементи, які проходять умову.
//* (num) => massif.includes(num) - Це стрілочна функція, передана у метод filter(), яка приймає поточний елемент num з 'args'.
//*    перевіряє, чи міститься 'num' у масиві 'massif', використовуючи метод 'includes()'.
// function findMatches(massif, ...args) {
//   return args.filter((num) => massif.includes(num));
// }

//?   ---- ВАРІАНТ reduce() та includes() ----
//? args.filter(...) - викликає метод filter() на масиві args.
//* метод reduce() - поступово створює новий масив  'matches', перебираючи елементи 'args' та перевіряючи їх присутність у масиві 'massif'.
//*       args.reduce(...) - викликаємо метод 'reduce()' на масиві 'massif' - приймає 2 аргументи:
//*            функцію-акумулятор і початкове значення (тут пустий масив[]).
//?      (matches, num) => { ... } - функція-акумулятор, яка виконується для кожного елемента 'num' з 'args'.
//*            перевіряє, чи міститься 'num' у масиві 'massif', використовуючи метод includes(). Якщо так, то він додає num до масиву matches.
// function findMatches(massif, ...args) {
//   return args.reduce((matches, num) => {
//     if (massif.includes(num)) {
//       matches.push(num);
//     }
//     return matches;
//   }, []);
// }

//?   ---- ВАРІАНТ Цикл в циклі ----
//* має лінійну складність (O(n^2))
// function findMatches(massif, ...args) {
//   const matches = [];
//   const items = [...args];
//   for (const i of items) {
//     for (const j of massif) {
//       if (j === i) {
//         matches.push(j);
//       }
//     }
//   }
//   return matches;
// }

//! ===============================================================
//*                 раніше розглядали об'єкти тільки як сховища взаємопов'язаних даних - інформація про книгу тощо.
//*                   Об'єкти-сховища, зазвичай, знаходяться в масиві таких самих об'єктів, який є колекцією однотипних елементів.
//*                   Об'єкти можуть зберігати не тільки дані, але і ф-ції для роботи з цими даними - методи.
//*                   Якщо значення властивості - це ф-ція, така властивість називається методом об'єкта.
//*                  ✅ Логічно і синтаксично згруповані сутності
//                      const bookShelf = {
//                      books: ["Останнє королівство", "Страж снів"],
//*                   Це метод об'єкта
//                      getBooks() {
//                      console.log("Цей метод буде повертати всі книги - властивість books");     },
//* Task 34           Це метод об'єкта
//                      addBook(bookName) {
//                      console.log("Цей метод буде додавати нову книгу у властивість books");     },    };
//*                    Виклики методів
//                      bookShelf.getBooks();
//                      bookShelf.addBook("Нова книга");
//*                   Такі об'єкти можна назвати «моделями». Вони пов'язують дані і методи для роботи з цими даними.
//*                   Наприклад, можна було оголосити змінну books і 2 ф-ції getBooks() і addBook(bookName),
//*                   але тоді це були б три незалежні сутності без явного синтаксичного, і зі слабким логічним зв'язком.
//*                   ❌ Слабкопозв'язані, незалежні сутності
//                      const books = [];
//                      function getBooks() {}
//                      function addBook() {}
//! ===============================================================

//* Додай об'єкту bookShelf ще 2 методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).
//*      Метод removeBook(bookName) видаляє книгу за назвою // "Deleting book <назва книги>",
//*          де <назва книги> - це значення параметра bookName.
//*      Метод updateBook(oldName, newName) оновлює назву книги на нову.
//*      Повертає рядок "Updating book <стара назва> to <нова назва>", де < стара назва > і < нова назва > - це значення параметрів oldName і newName відповідно.
//*  Значення змінної bookShelf - об'єкт
//*  Значення властивості bookShelf.getBooks - метод об'єкта
//*  Значення властивості bookShelf.addBook - метод об'єкта
//*  Значення властивості bookShelf.removeBook - метод об'єкта
//*  Значення властивості bookShelf.updateBook - метод об'єкта

// const bookShelf = {
//! Change code below this line
//*   books: ["The last kingdom", "The guardian of dreams"],
//*   getBooks() {
//*     return "Returning all books";
//*   },
//*   addBook(bookName) {
//*     return `Adding book ${bookName}`;
//*   },
//! Change code above this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

// console.log(bookShelf.getBooks()); //                "Returning all books"
// console.log(bookShelf.addBook("Haze")); //           "Adding book Haze"
// console.log(bookShelf.removeBook("Red sunset")); //     "Deleting book Red sunset"
// console.log(bookShelf.updateBook("Sands of dune", "Dune")); //     "Updating book Sands of dune to Dune"

//! ===============================================================
//?     this
//?          indexOf()        splice()
//*            Методи використовуються для роботи з властивостями об'єкта, їх зміни.
//*              Для доступу до об'єкта в методі використовується не ім'я змінної (наприклад bookShelf), а ключове слово this - контекст.
//*              Значенням this буде об'єкт перед «крапкою», тобто об'єкт, який викликав цей метод, у нашому випадку - це посилання на об'єкт bookShelf.
//                   const bookShelf = {
//                     books: ["Останнє королівство"],
//                     getBooks() {
//                       console.log(this);      },     };
//*              Перед крапкою знаходиться об'єкт 'bookShelf',
//*              тому, викликаючи метод, 'this' буде зберігати посилання на нього.
//                     bookShelf.getBooks(); // {books: ["Останнє королівство"], getBooks: f}
//*             Для того щоб отримати доступ до властивостей об'єкта в методах, ми звертаємось до нього через this і далі, стандартно - «через крапку» до властивостей.
//                    const bookShelf = {
//                      books: ["Останнє королівство"],
// Task 35              getBooks() {
//                        return this.books;      },
//                      addBook(bookName) {
//                        this.books.push(bookName);      },
//                      removeBook(bookName) {
//                        const bookIndex = this.books.indexOf(bookName);
//                        this.books.splice(bookIndex, 1);      },    };
//                    console.log(bookShelf.getBooks()); // ["Останнє королівство"]
//                    bookShelf.addBook("Імла");
//                    bookShelf.addBook("Страж снів");
//                    console.log(bookShelf.getBooks()); // ["Останнє королівство", "Імла", "Страж снів"]
//                    bookShelf.removeBook("Імла");
//                    console.log(bookShelf.getBooks()); // ["Останнє королівство", "Страж снів"]
//*               Логічно було б використовувати ім'я об'єкта у зверненні до властивостей,
//*               адже ми не змінюємо його. Але ім'я об'єкта - річ ненадійна,
//*               методи одного об'єкта можна копіювати в інший (з іншим ім'ям),
//*               а ще часто під час створення об'єкта, ми наперед зовсім не знаємо імені.
//*                 Використання this гарантує, що метод працює саме з тим об'єктом, який його викликав.
//! ===============================================================

//* Доповни метод updateBook(oldName, newName), щоб він змінював назву книги з oldName на newName у властивості books.
//*    Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.
//*    Значення змінної bookShelf - це об'єкт
//*    Значення властивості bookShelf.updateBook - це метод об'єкта

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//* отримуєте undefined в останньому виклику console.log(bookShelf.updateBook());, оскільки ви не передаєте жодних аргументів у метод updateBook().
//* У методі updateBook(oldName, newName), якщо ви не передаєте значення oldName і newName при виклику, то oldName і newName стануть undefined.
//* Метод indexOf() в такому випадку поверне - 1, оскільки - 1 означає, що елемент не знайдений у масиві. Після цього викликається метод splice(),
//* який намагається замінити елемент на позиції - 1, що призводить до неправильної заміни і може спричинити непередбачувану поведінку.

//* Щоб уникнути цієї проблеми, ви можете перевірити, чи передані аргументи oldName і newName, і повернути масив books без змін,
//*  якщо аргументи не були передані:
//* Тепер, якщо аргументи oldName і newName не будуть передані, метод поверне початковий масив books без будь-яких змін.
//     if (!oldName || !newName) {
//       return this.books;
//     }

//     const position = this.books.indexOf(oldName);
//     this.books.splice(position, 1, newName);
//     return this.books;
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf.updateBook()); // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf.updateBook()); // ["Dune", "Haze", "The guardian of dreams"]

//! ===============================================================
//? Task 36          КРАМНИЦЯ ЗІЛЛЯ «У СТАРОЇ ЖАБИ»
//! ===============================================================

//* До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю -
//*      додавання, видалення, пошуку та оновлення зілля.
//*      Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.
//*   Значення змінної atTheOldToad - це об'єкт
//*   Значення властивості atTheOldToad.potions - це масив []

// const atTheOldToad = {
//   potions: [],
// };
//* // atTheOldToad.potions = []; // Додавання властивості potions з порожнім масивом
// console.log(atTheOldToad.potions);

//! ===============================================================
//* Task 37           ОТРИМУЄМО ВСЕ ЗІЛЛЯ
//! ===============================================================

//*  Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.
//*      Змінна atTheOldToad - це об'єкт
//*      Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
//*      Значення властивості atTheOldToad.getPotions - це метод об'єкта
//*      Виклик методу atTheOldToad.getPotions() повертає ["Speed potion", "Dragon breath", "Stone skin"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   //! Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   //! Change code above this line
// };
// console.log(atTheOldToad.getPotions());

//! ===============================================================
//?          this          push()
//* Task 38      ДОДАЄМО НОВЕ ЗІЛЛЯ
//! ===============================================================

//* Доповни метод addPotion(potionName), щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.
//*   Значення змінної atTheOldToad - це об'єкт
//*   Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
//*   Значення властивості atTheOldToad.addPotion - це метод об'єкта
//*   Після першого виклику методу atTheOldToad.addPotion("Invisibility"), у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
//*   Після другого виклику методу atTheOldToad.addPotion("Power potion"), у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//!     // Change code below this line
//     this.potions.push(potionName);
//     return this.potions;
//!     // Change code above this line
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

//! ===============================================================
// ?            indexOf()        splice()
//* Task 39          ВИДАЛЯЄМО ЗІЛЛЯ
//! ===============================================================

//* Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.
//*   Змінна atTheOldToad - це об'єкт
//*   Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
//*   Значення властивості atTheOldToad.removePotion - це метод об'єкта
//*   Після 1-го виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде масив ["Speed potion", Stone skin"]
//*   Після 2-го виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions буде масив ["Stone skin"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     //! Change code below this line
//     const position = this.potions.indexOf(potionName);
//     if (position !== -1) {
//       this.potions.splice(position, 1);
//     }
//     return this.potions;
//     //! Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath")); // ["Speed potion", Stone skin"]
// console.log(atTheOldToad.removePotion("Speed potion")); // ["Stone skin"]

//! ===============================================================
//* Task 40           ОНОВЛЮЄМО ЗІЛЛЯ
//! ===============================================================

//* Доповни метод updatePotionName(oldName, newName), щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.
//*     Значення змінної atTheOldToad - це об'єкт
//*     Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
//*     Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
//*     Після 1-го виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]
//*     Після 2-го виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"), у властивості potions буде масив ["Speed potion", "Polymorth", "Invisibility"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     //! Change code below this line
//     const position = this.potions.indexOf(oldName);
//     //? Якщо елемент не знайдено, indexOf повертає -1.
//     if (position !== -1) {
//       this.potions.splice(position, 1, newName);
//     }
//     return this.potions;
//     //! Change code above this line
//   },
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); //  ["Speed potion", "Polymorth", "Stone skin"]
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility")); //  ["Speed potion", "Polymorth", "Invisibility"]

//! ===============================================================
//* Task 41         РОЗШИРЮЄМО ІНВЕНТАР
//! ===============================================================
//* Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими х-ками.
//*  Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.
//*       {
//*         name: "Dragon breath",
//*         price: 700
//*       }
//*   Виконай рефакторинг методів об'єкта atTheOldToad, щоб вони працювали не з масивом рядків, а з масивом об'єктів.
//*       getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
//*       addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
//*       removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
//*       updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.
//*  Значення змінної atTheOldToad - це об'єкт
//*  Значення властивості    atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

//*                          atTheOldToad.addPotion - це метод об'єкта.
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в масиві potions останнім елементом буде цей об'єкт
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в масиві potions останнім елементом буде цей об'єкт

// Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), масив potions не змінюється
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не змінюється
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), повертає рядок "Error! Potion Dragon breath is already in your inventory!"
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), повертає рядок "Error! Potion Stone skin is already in your inventory!"
//*                          atTheOldToad.removePotion - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
//*                          atTheOldToad.updatePotionName - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const i of this.potions)
      if (i.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }

    this.potions.push(newPotion);
  },

  //?        ---- ВАРІАНТ findIndex() , => ----
  removePotion(potionName) {
    const index = this.potions.findIndex(
      (potion) => potion.name === potionName
    );

    if (index !== -1) {
      this.potions.splice(index, 1);
    } else {
      return `Potion ${potionName} is not in inventory!`;
    }
  },

  // *     if (potionIndex === -1) {
  // *       return `Potion ${potionName} is not in inventory!`;
  // *     }
  //*     this.potions.splice(potionIndex, 1);      },

  //?        ---- ВАРІАНТ for без повідомлення----
  // removePotion(potionName) {
  //   for (let j = 0; j < this.potions.length; j++) {
  //     if (this.potions[j].name === potionName) {
  //       this.potions.splice(j, 1);
  //       return;
  //     }
  //   }
  // },
  // };

  //?         ---- ВАРІАНТ for ----
  // removePotion(potionName) {
  //   let index = -1;

  //   for (let i = 0; i < this.potions.length; i++) {
  //     if (this.potions[i].name === potionName) {
  //       index = i;
  //       break;
  //     }
  //   }

  //   if (index !== -1) {
  //     this.potions.splice(index, 1);
  //   } else {
  //     return `Potion ${potionName} is not in inventory!`;
  //   }
  // }

  updatePotionName(oldName, newName) {
    //*     const potionIndex = this.potions.indexOf(oldName);
    const potionIndex = this.potions.findIndex(
      (potion) => potion.name === oldName
    );

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions[potionIndex].name = newName;
    //* this.potions.splice(potionIndex, 1, newName);
  },

  // removePotion(potionName) {
  //   const index = this.potions.findIndex(
  //     (potion) => potion.name === potionName
  //   );

  //   if (index !== -1) {
  //     this.potions.splice(index, 1);
  //   } else {
  //     return `Potion ${potionName} is not in inventory!`;
  //   }
  // },
};
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })); //
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 })); //
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })); //
// console.log(atTheOldToad.removePotion("Dragon breath")); //
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
);
console.log(atTheOldToad.getPotions()); //    [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

//   //! Change code below this line
//*   getPotions() {
//*     return this.potions;     },
//*   addPotion(newPotion) {
//*     if (this.potions.includes(newPotion)) {
//*       return `Error! Potion ${newPotion} is already in your inventory!`;
//*     }
//*     this.potions.push(newPotion);     },

//*   removePotion(potionName) {
//*     const potionIndex = this.potions.indexOf(potionName);
//*     if (potionIndex === -1) {
//*       return `Potion ${potionName} is not in inventory!`;
//*     }
//*     this.potions.splice(potionIndex, 1);      },

//*   updatePotionName(oldName, newName) {
//*     const potionIndex = this.potions.indexOf(oldName);
//*     if (potionIndex === -1) {
//*       return `Potion ${oldName} is not in inventory!`;
//*     }
//*     this.potions.splice(potionIndex, 1, newName);     },
//   //! Change code above this line

//! ===============================================================
//*  масив об'єктів на масив рядків
//! ===============================================================
// const atTheOldToad = {
// potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   potions: [
//     "Speed potion",
//     "Dragon breath",
//     "Stone skin",
//   ],

//! ===============================================================
//* Task
//! ===============================================================

//* Нижче наведений приклад рефакторингу методів об'єкта, щоб вони працювали з масивом об'єктів замість масиву рядків.
//*    є об'єкт, який містить методи для роботи з масивом рядків:

// const myObject = {
//   data: ["apple", "banana", "orange"],

//   // Метод для виводу всіх елементів масиву
//   printData: function () {
//     this.data.forEach(function (i) {
//       console.log(i);
//     });
//   },

//   // Метод для додавання нового елемента в масив
//   addData: function (newItem) {
//     this.data.push(newItem);
//   },
// };

//* Виклик методів
// myObject.printData(); // Виведе: apple banana orange
// myObject.addData("grape");
// myObject.printData(); // Виведе: apple banana orange grape

//*  Тепер рефакторізуємо цей код для роботи з масивом об'єктів замість масиву рядків.
//*   Масив об'єктів буде містити поля name, що відповідають рядкам:

// const myObject = {
//   data: [{ name: "apple" }, { name: "banana" }, { name: "orange" }],

//   // Метод для виводу значень поля "name" всіх об'єктів масиву
//   printData: function () {
//     this.data.forEach(function (item) {
//       console.log(item.name);
//     });
//   },

//   // Метод для додавання нового об'єкта в масив
//   addData: function (newItem) {
//     this.data.push({ name: newItem });
//   },
// };

//* Виклик методів
// myObject.printData(); // Виведе: apple banana orange
// myObject.addData("grape");
// myObject.printData(); // Виведе: apple banana orange grape
