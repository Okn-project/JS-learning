// function highOrder(value, callback) {
//   const arrFromStr = value.split(' ');
//   console.log(arrFromStr);
// }

// function myCallback(char) {}

// highOrder('name surname');

function question(job) {
  const jobsDictionary = {
    developer: 'Что такое JS?',
    teacher: 'Какой предмет вы преподаете?',
  };

  return function(name) {
    return jobsDictionary[job] + ' ' + name;
  };
}

const developerQustion = question('developer');
console.log(developerQustion);
console.log(developerQustion('name'));

// Задачи 

function high_func(list, handler){
let res = list.forEach(element => handler(element)
);
return `new value: ${res}`
}

function handler_1(element){
let res += element
return res
}





// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки






// 2. Написать аналог метода every. Создайте функцию every, 
// она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) 
// вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback 
// (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 
 




