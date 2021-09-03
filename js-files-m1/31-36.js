/* ---31--- Индексация элементов строки
Строка — это индексированный набор из нуля или более символов, заключенных в одинарные, двойные или косые кавычки.

Индексация элементов строки начинается с нуля. Например, в строке 'JavaScript' буква 'J' стоит на позиции с индексом 0, а 't' идёт под индексом 9. При этом длина строки 'JavaScript' равна 10, то есть индекс последнего элемента всегда на единицу меньше чем её длина.

Для доступа к значению элемента строки используется синтаксис квадратных скобок строка[индекс].

const productName = "Repair droid";
console.log(productName[0]); // "R"
console.log(productName[5]); // "r"
console.log(productName[11]); // "d"
console.log(productName[productName.length - 1]); // "d"
Содержимое строки нельзя изменить, только прочитать. То есть нельзя взять какой-то символ и заменить его, как только строка создана — она такая навсегда. Можно лишь создать целиком новую строку и присвоить в переменную вместо старой.

Задание
Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

courseTopicLength - длина строки.
firstElement - первый символ строки.
lastElement - последний символ строки.
Тесты
Объявлена переменная courseTopic
Значение переменной courseTopic это строка "JavaScript essentials"
Объявлена переменная courseTopicLength
Значение переменной courseTopicLength это число 21
Объявлена переменная firstElement
Значение переменной firstElement это строка "J"
Объявлена переменная lastElement
Значение переменной lastElement это строка "s" */

const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

/* ---32--- Метод slice()
Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.

const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"
Задание
Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

string - оригинальная строка
length - количество символов с начала строки для подстроки
Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

Тесты
Объявлена функция getSubstring(string, length)
Вызов функции getSubstring("Hello world", 3) возвращает "Hel"
Вызов функции getSubstring("Hello world", 6) возвращает "Hello"
Вызов функции getSubstring("Hello world", 8) возвращает "Hello wo"
Вызов функции getSubstring("Hello world", 11) возвращает "Hello world"
Вызов функции getSubstring("Hello world", 0) возвращает "" */

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

/* ---33--- Задача: форматирование сообщения
Задание
Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

Дополни код функции так, что если длина строки:

не превышает maxLength, функция возвращает её в исходном виде.
больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
Тесты
Объявлена функция formatMessage(message, maxLength)
Вызов функции formatMessage("Curabitur ligula sapien", 16) возвращает "Curabitur ligula..."
Вызов функции formatMessage("Curabitur ligula sapien", 23) возвращает "Curabitur ligula sapien"
Вызов функции formatMessage("Vestibulum facilisis purus nec", 20) возвращает "Vestibulum facilisis..."
Вызов функции formatMessage("Vestibulum facilisis purus nec", 30) возвращает "Vestibulum facilisis purus nec"
Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) возвращает "Nunc sed turpis..."
Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) возвращает "Nunc sed turpis a felis in nunc fringilla" */

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
if (message.length <= maxLength)
{
 result = message
}
  
 else {
 result = message.slice(0, maxLength) + "..."
 }
  /// Change code above this line
  return result;
}


/* ---34--- Методы toLowerCase() и toUpperCase()
Бывают ситуации когда все символы в строке необходимо преобразовать в один регистр, верхний или нижний. Например, при поиске по ключевому слову, когда пользователь вводит строку 'saMsUng', а сравнить её надо со строкой 'samsung' или 'SAMSUNG'.

console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false
Чтобы не требовать абсолютно точный ввод можно сделать «нормализацию» введённой пользователем строки, то есть преобразовать все её символы в верхний или нижний регистр. Методы строки toLowerCase() и toUpperCase() вернут новую строку в соответствующем регистре, не изменяя оригинальную.

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true
Задание
Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

Тесты
Объявлена функция normalizeInput(input)
Вызов функции normalizeInput("Hello world") возвращает "hello world"
Вызов функции normalizeInput("This ISN'T SpaM") возвращает "this isn't spam"
Вызов функции normalizeInput("Big SALE") возвращает "big sale" */

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

/* ---35--- Метод includes()
Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

const productName = "Repair droid";

console.log(productName.includes("a")); // true
console.log(productName.includes("A")); // false
console.log(productName.includes("driod")); // true
console.log(productName.includes("Driod")); // false
console.log(productName.includes("Repair")); // true
console.log(productName.includes("repair")); // false
Задание
Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
name - имя для проверки вхождения в полное имя.
Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

Тесты
Объявлена функция checkForName(fullname, name).
Вызов функции checkForName("Egor Kolbasov", "Egor") возвращает true
Вызов функции checkForName("Egor Kolbasov", "egor") возвращает false
Вызов функции checkForName("Egor Kolbasov", "egOr") возвращает false
Вызов функции checkForName("Egor Kolbasov", "Zhenya") возвращает false
Вызов функции checkForName("Vadim Nekrasov", "Vadim") возвращает true
Вызов функции checkForName("Vadim Nekrasov", "vadim") возвращает false
Вызов функции checkForName("Vadim Nekrasov", "Dima") возвращает false */

function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}

/* ---36--- Задача: проверка спама
Задание
Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
Если в строке нет запрещенных слов, функция возвращает буль false.
Тесты
Объявлена функция checkForSpam(message).
Вызов функции checkForSpam("Latest technology news") возвращает false
Вызов функции checkForSpam("JavaScript weekly newsletter")возвращает false
Вызов функции checkForSpam("Get best sale offers now!") возвращает true
Вызов функции checkForSpam("Amazing SalE, only tonight!") возвращает true
Вызов функции checkForSpam("Trust me, this is not a spam message") возвращает true
Вызов функции checkForSpam("Get rid of sPaM emails. Our book in on sale!") возвращает true
Вызов функции checkForSpam("[SPAM] How to earn fast money?") возвращает true */

function checkForSpam(message) {
  let result;
  // Change code below this line
    let newMessage = message.toLowerCase();
  
result = newMessage.includes("spam") || newMessage.includes("sale");
                                       
  // Change code above this line
  return result;
}
