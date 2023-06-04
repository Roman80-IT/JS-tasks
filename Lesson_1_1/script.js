// Створіть змінну str і дайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка,
//виведіть на екран символ 'a', символ 'b', символ 'e'.

// const str = "abcde";
// alert(str[0]);
// alert(str[1]);
// alert(str[str.length - 1]);

//! =================================================

// Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --.
//Кількість рядків коду не повинна змінитися. Код для переробки:
// let num = 1;
// num += 12; // num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;

//! =================================================

// $ node script.js
// 1, length;?

//! =================================================

// Напишіть інструкцию, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.
// const str = "string not starting with capital";
// // slice() - копіює все
// const result = str[0].toUpperCase() + str.slice(1);
// console.log(result);

//! =================================================

/*
 * Написати фразу за допомогою конкатенації та шаблонних рядків
 * "Hello, my name is [name], I'm [age] years old and I like [hobby]", де квадратних дужках - змінні вставлені в рядок
 */

// const name = "Dan";
// const age = 35;
// const hobby = "swimming";
// const message = `Hello, my name is ${name}, I'm ${age} years old and I like ${hobby}`;
// console.log(message);
// const message2 =
//   "Hello, my name is " +
//   name +
//   ", I'm " +
//   age +
//   " years old and I like " +
//   hobby;
// console.log(message2);

//! =================================================

// Ви просите користувача ввести суму його зарплати. Потім розраховуєте:

// Добавку у вигляді премії у сумі 15% від зарплати.
// Податки у сумі 10% від суми всіх нарахувань (зарплата + премія).
// Витрату в магазині в сумі 190.
// Розділяєте суму, що залишилася, між користувачем і його "дружиною"/"чоловіком".

// Виводьте скільки залишилося в результаті всіх операцій грошей у користувача.
// let salary = Number(prompt("Вкажіть розмір зарплати:"));
// // const salary = +prompt("Вкажіть розмір зарплати:"); інший варіант перевести в число

// // console.log(typeof salary);
// console.log(salary);
// // salary *= 1.15;
// salary = Match.floor((salary *= 1.15));
// alert(`Ваша зарплата + премія складає ${salary}`);
// salary *= 0.9;
// alert(`Після сплати податків залишилося ${salary}`);
// salary -= 190;
// alert(`Після відвідування магазину у вас залишилося ${salary}`);
// salary /= 2;
// alert(`поділилися з дружиною ${salary}`);
//! =================================================

// Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
// for, while та do...while.
// Підказка: у результаті має вийти 55.

// let total = 0;

//! == var 1
// for (let i = 1; i <= 10; i += 1) {
//   total += i;
// }

//! == var 2
// let i = 1;
// while (i <= 10) {
//   total += i;
//   i += 1;
// }

//! == var 3

// let i = 0;
// do {
//   total += i;
//   i += 1;
// } while (i <= 10);
// console.log(total);

//! =================================================

//Напишіть функцію change_register(str), яка приймає як аргумент рядок і замінює регістр кожного символу на протилежний.

// const str = "КоЖнИй МиСлИвЕцЬ бАжАє ЗнАтИ";

// function change_register(str) {
//   let result;

//   for (let i = 0; i < str.length; i += 1) {
//     console.log(str[i]);
//     if (str[i] === str[i].toLowerCase()) {
//     } else {
//       result += str[i].toLowerCase();
//     }
//   }
//   return result;
// }

// console.log(change_register(str));

const str = "КоЖнИй МиСлИвЕцЬ бАжАє ЗнАтИ";

function change_register(str) {
  let result = "";

  for (let i = 0; i < str.length; i += 1) {
    // console.log(str[i]);

    if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}
console.log(change_register(str));
