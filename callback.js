// function highOrder(value, callback) {
//   const arrFromStr = value.split(' ');
//   console.log(arrFromStr);
// }

// function myCallback(char) {}

// highOrder('name surname');

// function question(job) {
//   const jobsDictionary = {
//     developer: "Что такое JS?",
//     teacher: "Какой предмет вы преподаете?",
//   };

//   return function (name) {
//     return jobsDictionary[job] + " " + name;
//   };
// }

// const developerQustion = question("developer");
// console.log(developerQustion);
// console.log(developerQustion("name"));

// Задачи

// 1. Создать две функции:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

// function high_func(list, handler) {
//   list = list.map((element) => (element = handler(element)));
//   return `New value: ${list.join("")}`;
// }
// function handler_1(element) {
//   return element[0].toUpperCase() + element.slice(1);
// }
// function handler_2(element) {
//   return element * 10 + ", ";
// }
// function handler_3(element) {
//   return `${element.name} is ${element.age}, `;
// }

// function handler_4(element) {
//   element = element.split("").reverse().join("");
//   return `${element}, `;
// }
// console.log(high_func(["my", "name", "is", "Trinity"], handler_1));
// console.log(high_func([10, 20, 30], handler_2));
// console.log(
//   high_func(
//     [
//       { age: 45, name: "Jhon" },
//       { age: 20, name: "Aaron" },
//     ],
//     handler_3
//   )
// );
// console.log(high_func(["abc", "123"], handler_4));

// 2. Написать аналог метода every. Создайте функцию every,
// она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив)
// вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback
// (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

// function my_every(list, handler) {
//   if (!Array.isArray(list) || typeof handler !== "function") {
//     console.log("no list or function given");
//   }
//   let res;
//   for (let index = 0; index < list.length; index++) {
//     res = handler(list[index], index, list);
//     if (!res) return res;
//   }
//   return res;
// }

// function handler(element, index, list) {
//   return element > 5;
// }
// console.log(my_every([12, 14, 29, 22, 26], handler));
console.log(navigator);
