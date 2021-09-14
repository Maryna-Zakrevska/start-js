/* ---6---Переопределение значения элемента
В отличии от строк, элементы массива можно изменять обратившись к ним по индексу и присвоив другое значение.

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;
numbers[2] = 14;
console.log(numbers); // [7, 2, 14, 4, 5];
Задание
Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

Тесты
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "peach", "pear", "banana"] */

const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1] = "peach";
fruits[3] = "banana";

/* ---7--- Длина массива
Длина массива, то есть число его элементов, хранится в свойстве length. Это динамическая величина, которая изменяется автоматически при добавлении или удалении элементов.

const planets = ["Earth", "Mars", "Venus"];
console.log(planets.length); // 3
Задание
Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

Тесты
Объявлена переменная fruitsArrayLength
Значение переменной fruitsArrayLength это число 4 */

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;

/* ---8---Индекс последнего элемента
Чаще всего, мы заранее в коде не знаем какая будет длина массива. Для того, чтобы получить значение последнего элемента применяется следующий подход - длина массива всегда на единицу больше, чем индекс последнего элемента. Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
planets[lastElementIndex]; // "Venus"
Задание
Объяви две переменные:

Имя переменной	Ожидаемое значение
lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
lastElement	Значение последнего элемента массива
Тесты
Объявлена переменная lastElementIndex
Значение переменной lastElementIndex это число 3
Объявлена переменная lastElement
Значение переменной lastElement это строка "banana" */

const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

/* ---9---Задача: Крайние элементы массива
Задание
Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

Тесты
Объявлена функция getExtremeElements(array)
Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]*/

function getExtremeElements(array) {
  // Change code below this line

  
  return [array[0], array[array.length - 1]];
  

  // Change code above this line
}


/* ---10---Метод строк split()
Метод split(delimeter) позволяет превратить строку в массив, «разбив» его по разделителю delimeter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
console.log(message.split(" ")); // ["JavaScript", "essentials"]
Задание
Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

Тесты
Объявлена функция splitMessage(message, delimeter)
Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"] */

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);

  // Change code above this line
  return words;
}
