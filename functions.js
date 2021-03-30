// (function(msg) {
//   console.log(msg);
//   function sayHello(firstName = "Default", lastName = "Default") {
//     console.log(firstName, lastName);
//     console.log("Hello world");
//     return `Hello ${firstName} ${lastName}`;
//   }

// let res = sayHello("name", "surname");
// let res2 = sayHello("name2", "surname2") + "!";
// let res3 = sayHello();
// console.log(res3);

// let x = 10;

// function foo(x) {
//   x = 20;                Так делать нельзя, переопределяется внешняя переменная
//   console.log(x);
//   return x;
// }

// foo();

// console.log(x);

// const user = {
//   name: "name",
//   age: 30
// };

// function getObj(obj) {
//   obj.name = "Den";       Так делать нельзя, в функции передаются копии объекта (глубокие копии через JSON)
// }

// getObj(user);
// console.log(user);

//   const square = function(x) {
//     return x * x;         Переменная - функция не всплывает
// })("Hello world");

// Задачки

// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

// function multiply() {
//   let res = 1;
//   if (!arguments.length) return 0;
//   for (let index = 0; index < arguments.length; index++) {
//     if (!(arguments[index] && !isNaN(arguments[index]))) {
//       return console.log("error or mult by 0");
//     }
//     res *= arguments[index];
//   }
//   return res;
// }
// console.log(multiply(0));

// function multiply() {
//   let res = 1;
//   if (!arguments.length) return 0;
//   for (let argument of arguments) {
//     if (!argument || isNaN(argument)) {
//       return console.log("error or mult by 0");
//     }
//     res *= argument;
//   }
//   return res;
// }
// console.log(multiply(1, "aweawe, 3, 4, 5"));

// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

// function reverse_string(some_string = "") {
//   if (some_string) {
//     let res = "";
//     for (let index = some_string.length; index >= 1; index--) {
//       res += some_string[index - 1];
//     }
//     return res;
//   }
//   return console.log("no string");
// }
// console.log(reverse_string("w34324"));

// function reverse_string(some_string = "") {
//   if (some_string) {
//     return some_string.split("").reverse().join("");
//   }
//   return console.log("no string");
// }
// console.log(reverse_string("w34324"));

// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
function get_unicode(some_string = "") {
  if (some_string) {
    some_string = (some_string += "").split("");
    return some_string
      .map((letter) => letter.charCodeAt(), some_string)
      .join(" ");
  }
  return console.log("no string");
}

console.log(get_unicode("asdsadsad"));

// Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
