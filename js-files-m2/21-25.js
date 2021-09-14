/* ---21---Задача: поиск самого длинного слова
Задание
Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

Тесты
Объявлена функция findLongestWord(string)
Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
Вызов функции findLongestWord("Google do a roll") возвращает Google
Вызов функции findLongestWord("May the force be with you") возвращает force
Вызов функции findLongestWord() со случайной строкой возвращает правильное значение */


function findLongestWord(string) {
  // Change code below this line
  
let stringSplit = string.split(" ");
  
  let longestWord = stringSplit[0];
  
  for (let i = 0; i < stringSplit.length; i += 1)
  {
 if (stringSplit[i].length > longestWord.length) 
 {longestWord = stringSplit[i];
 }
  }
  return longestWord;
  
  


  // Change code above this line
}

/* ---22--- Метод push()
Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов.

const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
planets.push("Saturn", "Uranus", "Neptune");

console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
Задание
Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

Тесты
Объявлена функция createArrayOfNumbers(min, max)
Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
В цикле for использовался метод push */

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  
for (let i = min; i <= max; i += 1) {
  numbers.push(i);}
  // Change code above this line
  return numbers;
}

/* ---23--- Задача: фильтрация массива чисел
Задание
Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

Тесты
Объявлена функция filterArray(numbers, value)
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
В цикле for использовался метод push */

function filterArray(numbers, value) {
   // Change code below this line
let newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
newArray.push(numbers[i]);
    }
  }
  return newArray;

  // Change code above this line
}

/* ---24---Метод includes()
Метод includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям, когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).

const planets = ["Earth", "Mars", "Venus"];

console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false
Задание
Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

Дополни код функции так, что если:

фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false.
Тесты
Объявлена функция checkFruit(fruit)
Вызов checkFruit("plum") возвращает true
Вызов checkFruit("mandarin") возвращает false
Вызов checkFruit("pear") возвращает true
Вызов checkFruit("Pear") возвращает false
Вызов checkFruit("apple") возвращает true
Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean
В функции использовался метод includes */

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

/* ---25--- Задача: общие элементы
Задание
Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

Тесты
Объявлена функция getCommonElements(array1, array2)
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
В цикле for использовались методы includes и push */

function getCommonElements(array1, array2) {
  // Change code below this line
  let newArray = [];
  
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) 
newArray.push(array1[i]);
    }
  
  return newArray;

  // Change code above this line
}


