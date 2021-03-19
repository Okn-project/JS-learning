//F - stings methods
// Тема - строки
let string = "some test string";

//  длина строки    -> длина строки
console.log(string.length);
//  перевод в малый регистр  -> дефолт строка в малом регистре
console.log(string.toLowerCase());
//  перевод в большой регистр  -> дефолт строка в большом регистре
console.log(string.toUpperCase());
//  поиск индекса переданного аргумента в строке  -> индекс аргумента в строке или -1 при отсутствии
console.log(string.indexOf("ds"));
//  получение подстроки по количеству  -> срез с первого аргумента + {второй аргумент-1} символов в строке или ничего при слишком больших индексах
console.log(string.substr(2, 3));
//  получение подстроки  по индексам с отрицательными -> срез с первого аргумента до второго аргумента не включительно
console.log(string.slice(2, -1));
//  получение подстроки  индексам без отрицательных -> срез с первого аргумента до второго аргумента не включительно. Поддерживает отрицательные числа
console.log(string.substring(0, 2));
//  очистка пробелов   -> убирает пробелы в начале и конце строки
console.log(string.trim());
//  содержит ли строка   -> булевое. Есть ли в строке {аргумент}
console.log(string.includes("some"));
// F строки
let name = "name";
let age = "age";
console.log(`person {name} is {age}`);

// Задачки
//Получить первую и последнюю буквы строки
console.log(string[0], string[string.length - 1]);
//Сделать первую и последнюю буквы в верхнем регистре
console.log(
  string[0].toUpperCase() +
    string.slice(1, -1) +
    string[string.length - 1].toUpperCase()
);
// Найти положение слова ‘string’ в строке
console.log(string.indexOf("string"));
// Найти положение второго пробела
console.log(string.indexOf(" ", string.indexOf(" ") + 1));
// Получить строку с 5-го символа длиной 4 буквы
console.log(string.substr(5, 4));
// Получить новую строку из исходной путем удаления последних 6-и символов
let new_string = string.slice(0, -6);
console.log(new_string);
// Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
 [a, b]=   [20, 16]
console.log(a.toString()+b);