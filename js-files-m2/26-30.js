/* ---26--- Цикл for...of
Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.

for (const variable of iterable) {
  // тело цикла
}
variable — переменная, которая будет хранить значение элемента на каждой итерации
iterable — коллекция, которая имеет перечислимые элементы, например массив
const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}
Задание
Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

Тесты
Объявлена функция calculateTotalPrice(order)
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции calculateTotalPrice([]) возвращает 0
Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму */

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (const itemPrice of order) {
    total += itemPrice;
  }

  // Change code above this line
  return total;
}


/* ---27---Зачада: фильтрация массива чисел 2.0
Задание
Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

Тесты
Объявлена функция filterArray(numbers, value)
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
Функция calculateTotalPrice() использует цикл for..of */

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const item of numbers) {
    const number = item;

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

/* ---28---Оператор %
Вместо того, чтобы возвращать результат деления, операция по модулю (%) возвращает целочисленный остаток от деления двух чисел - делимого и делителя.

5 % 1 = 0;
// 5, разделенное на 1, равно 5, а остаток - 0

5 % 2 = 1;
//  5, разделенное на 2, равно 2, а остаток - 1

5 % 3 = 2;
//  5, разделенное на 3, равно 1, а остаток - 2

5 % 4 = 1;
//  5, разделенное на 4, равно 1, а остаток - 1

5 % 5 = 0;
//  5, разделенное на 5, равно 1, а остаток - 0
Задание
Дополни выражения остатка от деления так, чтобы код проходил тесты.

Тесты
Объявлена переменная a
Значение переменной a это число 0
Объявлена переменная b
Значение переменной b это число 1
Объявлена переменная c
Значение переменной c это число 3
Объявлена переменная d
Значение переменной d это число 5
Объявлена переменная e
Значение переменной e это число 2 */

// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

/* ---29---Задача: чётные числа
Задание
Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

Тесты
Объявлена функция getEvenNumbers(start, end)
Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
Вызов функции getEvenNumbers(8, 8) возвращает [8]
Вызов функции getEvenNumbers(7, 7) возвращает []
Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив */

function getEvenNumbers(start, end) {
   // Change code below this line
let numbers = [];
  
  for (let i = start; i <= end; i += 1)
  {
    if (i % 2 === 0)
     {
  numbers.push(i)
     }
  }
  
  return numbers;

    // Change code above this line
}
  
/* ---30--- Оператор break
Прервать выполнение цикла можно в любой момент. Для этого существует оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.

В примере ищем число 3. Как только выполнится условие if, цикл прекратит своё выполнение (будет прерван).

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Нашли число 3, прерываем выполнение цикла");
    break;
  }
}

console.log("Лог после цикла");
Задание
Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

Тесты
Объявлена переменная start со значением 6
Объявлена переменная end со значением 27
Объявлена переменная number без инициализации
Итоговое значение переменной number равно 10
В цикле for используется break для выхода до завершения всех итераций цикла */

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

/* ---32--- Задача: функция includes()
Задание
Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

Тесты
Объявлена функция includes(array, value)
Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
Вызов includes() для случайного массива со случайным value возвращает верный boolean
В функции includes используется for, return, но не метод массива includes
 */

function includes(array, value) {
  // Change code below this line

for (const item of array)
{
    if (item === value) {
        return true;
    }
}
   return false;


// Change code above this line
}
