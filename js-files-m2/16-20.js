/* ---16--- Задача: композиция массивов
Задание
Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

Тесты
Объявлена функция makeArray(firstArray, secondArray, maxLength)
Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив */

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
const newArray = firstArray.concat(secondArray);
return totalArray = newArray.slice(0, maxLength)

    // Change code above this line
}
  
/* ---17---Цикл for
Циклы используются для многократного повторения кода. Объявление цикла for состоит из трёх выражений.

for (Инициализация; Условие; Пост - выражение) {
  // Тело цикла
}
Инициализация - выполняется один раз перед началом цикла. Используется для создания переменной-счётчика и указания её начального значения.
Условие - выражение, оцениваемое перед каждой итерацией (повторением) цикла. Тело цикла выполняется только тогда, когда выражение приводится к true. Цикл завершается, если значение будет false.
Пост-выражение - выполняется в конце каждого повторения цикла, перед проверкой условия. Используется для обновления переменной-счётчика.
Тело - набор инструкций для выполнения на каждом повторении. Выполняется, если выражение условия приводится к true.
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
В примере объявляется переменная i, инициализируется значением 0 и цикл выполняется (его тело) до тех пор, пока i <= 20, то есть условие приводится к true. После каждой итерации счётчик увеличивается на 5.

Задание
Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.

Тесты
Объявлена переменная start
Значение переменной start это число 3
Объявлена переменная end
Значение переменной end это число 7
Объявлена переменная i - счётчик цикла
Начальное значение переменной i равно 3
Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
На каждой итерации значение переменной i увеличивается на единицу
Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7 */

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}

/* ---18--- Задача: сумма чисел (цикл for)
Задание
Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

Тесты
Объявлена функция calculateTotal(number)
Вызов функции calculateTotal(1) возвращает 1
Вызов функции calculateTotal(3) возвращает 6
Вызов функции calculateTotal(7) возвращает 28
Вызов функции calculateTotal(18) возвращает 171
Вызов функции calculateTotal(24) возвращает 300
Вызов функции calculateTotal() со случайным числом возвращает правильное значение
 */

function calculateTotal(number) {
 // Change code below this line

  let sum = 0;
   
 for (let i = 1; i <= number; i += 1) {
   
sum += i;
 
 }
   
 return sum;

  // Change code above this line
}

/* ---19---Итерация по массиву
Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.

Задание
Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

Тесты
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
Объявлена переменная i - счётчик цикла
Начальное значение переменной i равно 0
Условие цикла приводится к true до тех пор, пока i меньше 4
На каждой итерации значение переменной i увеличивается на единицу
В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива
В теле цикла for используется вывод в консоль переменной fruit */

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

/* ---20--- Задача: подсчёт суммы покупки
Задание
Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

Тесты
Объявлена функция calculateTotalPrice(order)
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение */

/* ---20--- Задача: подсчёт суммы покупки
Задание
Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

Тесты
Объявлена функция calculateTotalPrice(order)
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение */

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (i = 0; i < order.length; i += 1) {
  total += order[i]}
  // Change code above this line
  return total;
}
