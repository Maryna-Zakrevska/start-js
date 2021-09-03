/* ---6---Задача: заказ продукта
Задание
Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:

pricePerDroid - цена одного дроида, значение 800
orderedQuantity - количество дроидов в заказе, значение 6
deliveryFee - стоимость доставки, значение 50
totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки
message - сообщение о состоянии заказа в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."
Тесты
Объявлена переменная orderedQuantity
Значение переменной orderedQuantity это число 6
Объявлена переменная pricePerDroid
Значение переменной pricePerDroid это число 800
Объявлена переменная deliveryFee
Значение переменной deliveryFee это число 50
Объявлена переменная totalPrice
Значение переменной totalPrice это число 4850
Объявлена переменная message
Значение переменной message это строка "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price." */

// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

/* ---7---Объявление и вызов функции
Функция - это подпрограмма, независимая часть кода, предназначенная для многократного выполнения конкретной задачи с разными начальными значениями.

Функцию можно представить как чёрный ящик, она получает что-то на входе (данные), и возвращает что-то на выходе (результат выполнения кода внутри неё).

// 1. Объявление функции multiply
function multiply() {
  // Тело функции
  console.log("multiply function invocation");
}

// 2. Вызовы функции multiply
multiply(); // multiply function invocation
multiply(); // multiply function invocation
multiply(); // multiply function invocation
Объявление функции начинается с ключевого слова function, за которым идёт её имя - глагол отвечающий на вопрос «Что сделать?» и пара круглых скобок. Тело функции заключено в фигурные скобки {} и содержит инструкции, которые необходимо выполнить при её вызове. Затем, когда необходимо, функция вызывается с помощью имени и пары круглых скобок.

Задание
Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". После объявления вызови функцию sayHi.

Тесты
Ожидается объявление функции
Функции присвоено имя sayHi
В теле функции sayHi есть console.log("Hello, this is my first function!")
После объявления есть вызов функции sayHi */

// Change code below this line
function sayHi() 
{
console.log("Hello, this is my first function!")
}

sayHi();

/* ---8---Параметры и аргументы
В круглых скобках после имени функции идут параметры - перечисление данных, которые функция ожидает при вызове.

Параметры - это локальные переменные доступные только в теле функции. Они разделяются запятыми. Параметров может быть несколько или вообще их может не быть, тогда записываются просто пустые круглые скобки.

При вызове функции, в круглых скобках можно передать аргументы - значения для объявленных параметров функции.

// 1. Объявление параметров x, y, z
function multiply(x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
}

// 2. Передача аргументов
multiply(2, 3, 5); // Результат умножения равен 30
multiply(4, 8, 12); // Результат умножения равен 384
multiply(17, 6, 25); // Результат умножения равен 2550
Порядок передачи аргументов должен соответствует порядку объявленых параметров: значение первого аргумента будет присвоено первому параметру, второго аргумента второму параметру и т. д.

Задание
Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

Тесты
Объявлена функция add(a, b, c)
Вызов add(15, 27, 10) выводит в консоль "Addition result equals 52"
Вызов add(10, 20, 30) выводит в консоль "Addition result equals 60"
Вызов add(5, 10, 15) выводит в консоль "Addition result equals 30" */

// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

/* ---9---Возврат значения
Оператор return используется для передачи значения из тела функции во внешний код. Когда интерпретатор встречает return, он сразу же выходит из функции (прекращает её выполнение), и возвращает указанное значение в то место кода, где функция была вызвана.

function multiply(x, y, z) {
  console.log("Код до return выполняется как обычно");

  // Возвращаем результат выражения умножения
  return x * y * z;

  console.log("Этот лог никогда не выполнится, он стоит после return");
}

// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550
Оператор return без явно указанного значения возвращает специальное значение undefined. При отсутствии return в теле функции, она все равно вернёт undefined.

Задание
Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

Тесты
Объявлена функция add(a, b, c)
В функции add есть оператор return
Вызов add(15, 27, 10) возвращает 52
Вызов add(10, 20, 30) возвращает 60
Вызов add(5, 10, 15) возвращает 30
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение */

function add(a, b, c) {
  // Change code below this line

return a + b + c;

  // Change code above this line
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

/* ---10---Задача: шаблонные строки 2.0
Задание
Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

name - название товара
price - цена товара
Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits", где <product name> и <product price> это значения параметров name и price. Используй синтаксис шаблонных строк.

Внимание
Обрати внимание на то, что в коде нет вызовов функции makeMessage. С этого задания и дальше мы сами будем вызывать твои функции и проверять то, как они работают. Результат наших проверок ты увидишь в блоке Результаты под редактором кода.

Тесты
Объявлена функция makeMessage(name, price)
Вызов makeMessage('Radar', 6150) возвращает "You picked Radar, price per item is 6150 credits"
Вызов makeMessage('Scanner', 3500) возвращает "You picked Scanner, price per item is 3500 credits"
Вызов makeMessage('Reactor', 8000) возвращает "You picked Reactor, price per item is 8000 credits"
Вызов makeMessage('Engine', 4070) возвращает "You picked Engine, price per item is 4070 credits" */

function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};

