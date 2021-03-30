//F - stings methods
// Тема - строки
//let string = "some test string";

// //  длина строки    -> длина строки
// console.log(string.length);
// //  перевод в малый регистр  -> дефолт строка в малом регистре
// console.log(string.toLowerCase());
// //  перевод в большой регистр  -> дефолт строка в большом регистре
// console.log(string.toUpperCase());
// //  поиск индекса переданного аргумента в строке  -> индекс аргумента в строке или -1 при отсутствии
// console.log(string.indexOf("ds"));
// //  получение подстроки по количеству  -> срез с первого аргумента + {второй аргумент-1} символов в строке или ничего при слишком больших индексах
// console.log(string.substr(2, 3));
// //  получение подстроки  по индексам с отрицательными -> срез с первого аргумента до второго аргумента не включительно
// console.log(string.slice(2, -1));
// //  получение подстроки  индексам без отрицательных -> срез с первого аргумента до второго аргумента не включительно. Поддерживает отрицательные числа
// console.log(string.substring(0, 2));
// //  очистка пробелов   -> убирает пробелы в начале и конце строки
// console.log(string.trim());
// //  содержит ли строка   -> булевое. Есть ли в строке {аргумент}
// console.log(string.includes("some"));
// // F строки
// let name = "name";
// let age = "age";
// console.log(`person {name} is {age}`);

// // Задачки
// //Получить первую и последнюю буквы строки
// console.log(string[0], string[string.length - 1]);
// //Сделать первую и последнюю буквы в верхнем регистре
// console.log(
//   string[0].toUpperCase() +
//     string.slice(1, -1) +
//     string[string.length - 1].toUpperCase()
// );
// // Найти положение слова ‘string’ в строке
// console.log(string.indexOf("string"));
// // Найти положение второго пробела
// console.log(string.indexOf(" ", string.indexOf(" ") + 1));
// // Получить строку с 5-го символа длиной 4 буквы
// console.log(string.substr(5, 4));
// // Получить новую строку из исходной путем удаления последних 6-и символов
// let new_string = string.slice(0, -6);
// console.log(new_string);
// // Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
//  [a, b]=   [20, 16]
// console.log(a.toString()+b);




// Тема - типы данных и преобразования

//true → 1, false → 0, undefined → NaN, null → 0, “text” → NaN, “” → 0
// “”, null, undefined, NaN → false
// 2016, ‘string’, {}, [] → true
// функция Boolean: Boolean(‘test me’) → true
// оператор !!: !!’string’ → true
// внутри if (Boolean) {}
// null ничему не равен, кроме undefined и себя
// undefined ничему не равен, кроме null и себя



// let value;

// // Number to string
// value = String(10);
// value = String(10+40);
// value = (40).toString();

// // Boolean to string
// value = String(false);
// // Array to string
// value = String([1, 2, 3]);
// // Object to string
//value = String({ name: 'Denis' });

//value = '' + undefined + 30;
//value =  '30' * '5';
// value = false + undefined;

// // String to number
// value = Number('23');
// value = Number(false);
// value = Number(null);
// value = Number('false');
// value = Number([1,2,3]);

// value = parseInt('200px');
// value = parseFloat('200.212px');

// // Boolean
// value = Boolean('hello');
// value = Boolean('');
// value = Boolean(-100);
// value = Boolean(0);
// value = Boolean(undefined);
// value = Boolean(null);
// value = Boolean({});
// value = Boolean([]);

// console.log(value);
// console.log(typeof value);
// console.log('23'>'1');
// console.log( undefined  == false );
// console.log(value);








// тема объекты

// const user = {
//     firstName: 'Denis',
//     age: 30,
//     isAdmin: true,
//     email: 'test@test.com',
//     'user-address': {
//       city: 'Kharkiv'
//     },
//     skills: ['html', 'css', 'js']
//   };
  
//   let value;
// //   let prop = 'skills';
  
// //   value = user.firstName;
// //   value = user['isAdmin'];
// //   value = user['user-address'];
// //   value = user['user-address'].city;
// //   value = user['user-address']['city'];
// //   value = user[prop][0];
  
// //   user.firstName = 'Den';
  
// //   value = user.firstName;
  
//   user.info = 'Some info';
  
//   value = user.info;
  
//   user['user-address'].city = 'Kiev';
//   user['user-address'].country = 'Ukraine';
  
//   console.log(user.plan);
//   user.plan = {};
//   user.plan.basic = 'basic';
  
//   console.log(value);
//   console.log(user);
  

// Задачки

// //1. Создать объект с полем product, равным ‘iphone’
// const my_obj = {product: 'iphone'}
// let price, currency
// // Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// [my_obj.price, my_obj.currency] = [1000, 'dollar', 'tripple']
// console.log(my_obj);
// //Добавить поле details, которое будет содержать объект с полями model и color
// my_obj.details = {model: 'some', color: 'red'}
// console.log(my_obj);