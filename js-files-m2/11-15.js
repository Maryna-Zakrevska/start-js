/* ---11--- Задача: гравировка украшений
Задание
Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

Тесты
Объявлена функция calculateEngravingPrice(message, pricePerWord)
Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80 */

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
  const newString = message.split(" ");
  const calcWords = newString.length;
  const totalPrice = calcWords * pricePerWord;
  
  return totalPrice;

   // Change code above this line
}

/* ---12--- Метод массива join()
Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing'
Задание
Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

Тесты
Объявлена функция makeStringFromArray(array, delimeter)
Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "")) возвращает "Mango"
Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"
 */


function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line

string = array.join(delimeter);

  // Change code above this line
  return string;
}

/* --- 13--- Задача: генератор slug
Задание
Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адесов.

Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

Внимание
Slug это всегда строка в нижнем регистре, слова которой разделены тире.

Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире
Тесты
Объявлена функция slugify(title)
Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
Вызов slugify("English for developer") возвращает "english-for-developer"
Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"

 */

function slugify(title) {
  // Change code below this line

const titleInLowerCase = title.toLowerCase();
  
const slugArrey = titleInLowerCase.split(" ");    
  
  return slug = slugArrey.join("-");

  // Change code above this line
}

/* ---14--- Метод slice()
Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

Если begin и end не указаны, будет создана полная копия исходного массива.
Если не указан end, копирование будет от start и до конца исходного массива.
Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']
Задание
Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов
Тесты
Объявлена переменная fruits
Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
Объявлена переменная firstTwoEls
Значение переменной firstTwoEls это массив ["apple", "plum"]
Объявлена переменная nonExtremeEls
Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
Объявлена переменная lastThreeEls
Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами */

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

/* ---15--- Метод concat()
Метод concat используется для объединения двух или более массивов. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

const firstArray = ["Mercury", "Venus", "Earth"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Uranus", "Neptune"];
const allPlanets = firstArray.concat(secondArray, thirdArray);

console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
Задание
Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

Тесты
Объявлена переменная oldClients
Значение переменной oldClients это массив ["Mango", "Ajax", "Poly", "Kiwi"]
Объявлена переменная newClients
Значение переменной newClients это массив ["Peach", "Houston"]
Объявлена переменная allClients
Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
Переменной allClients присвоен массив после применения метода concat с правильными аргументами */

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line