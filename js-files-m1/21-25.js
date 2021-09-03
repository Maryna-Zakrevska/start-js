/* ---21--- Логическое «И» (оператор &&)
Логические операторы используются для проверки условий с множественными выражениями, например в ветвлениях.

Оператор && приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к false, и правый в остальных случаях.

выражение && выражение
В следующем примере оба условия вернут true, поэтому результатом всего выражения будет true - вернётся значение правого операнда.

const age = 20;
console.log(age > 10 && age < 30); // true && true -> true
Если хотя бы один из операндов будет приведён к false, результатом выражения будет этот операнд.

const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false
То есть логическое «И» запинается на лжи и возвращает то, на чём запнулось или последний операнд.

console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(3 && false); // false
console.log(false && 3); // false
console.log(3 && true); // true
console.log(true && 3); // 3
Полезно
Запомните шесть значений, которые в булевом преобразовании приводятся к `false`: `0`, `NaN`, `null`, `undefined`, пустая строка `""` или `''` и само значение `false`. Абсолютно всё остальное приводится к `true`.

console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Mango"); // false && true -> ''
console.log("Mango" && ""); // true && false -> ''
console.log("Mango" && "Poly"); // true && true -> 'Poly'
console.log("Poly" && "Mango"); // true && true -> 'Mango'
Задание
Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

number - число, вхождение которого проверяется
start - начало числового промежутка
end - конец числового промежутка
Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

Тесты
Объявлена функция isNumberInRange(start, end, number)
В выражении проверки использован оператор &&
Вызов isNumberInRange(10, 30, 17) возвращает true
Вызов isNumberInRange(10, 30, 5) возвращает false
Вызов isNumberInRange(20, 50, 24) возвращает true
Вызов isNumberInRange(20, 50, 76) возвращает false */

function isNumberInRange(start, end, number) {
  const isInRange = number > start && number < end; // Change this line

  return isInRange;
}

/* ---22--- Логическое «ИЛИ» (оператор ||)
Оператор || приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к true, и правый в остальных случаях.

выражение || выражение
В следующем примере условие слева вернёт true, поэтому результатом всего выражения будет true - вернётся значение первого операнда, которое было приведено к true.

const age = 5;
console.log(age < 10 || age > 30); // true || false -> true
Тут результатом тоже будет true, так как хотя бы один из операндов, в этом случае правый, был приведён к true.

const age = 40;
console.log(age < 10 || age > 30); // false || true -> true
А здесь ни одно из условий не выполняется, поэтому получаем false - значение последнего операнда.

const age = 20;
console.log(age < 10 || age > 30); // false || false -> false
То есть логическое «ИЛИ» запинается на правде и возвращает то, на чём запнулось или последний операнд.

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true
Задание
Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.

Тесты
Объявлена функция checkIfCanAccessContent(subType)
В выражении проверки использован оператор ||
Вызов checkIfCanAccessContent("pro") возвращает true
Вызов checkIfCanAccessContent("starter") возвращает false
Вызов checkIfCanAccessContent("vip") возвращает true
Вызов checkIfCanAccessContent("free") возвращает false */

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

  return canAccessContent;
}

/* ---23---Логическое «НЕ» (оператор !)
Все операторы, которые мы рассматривали до этого, были бинарными. Т.е. они содержали два операнда: левый и правый. Логическое «НЕ» - это унарный оператор, выполняющий операцию над одним операндом справа.

!выражение
Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !'Mango' -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !'' -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false
Задание
Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

Она объявляет три параметра, значения которых будут задаваться во время её вызова:

number - число, не вхождение которого проверяется
start - начало числового промежутка
end - конец числового промежутка
Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

Тесты
Объявлена функция isNumberNotInRange(start, end, number)
В выражении использован оператор !
Вызов isNumberNotInRange(10, 30, 17) возвращает false
Вызов isNumberNotInRange(10, 30, 5) возвращает true
Вызов isNumberNotInRange(20, 50, 24) возвращает false
Вызов isNumberNotInRange(20, 50, 76) возвращает true */

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Change this line

  return isNotInRange;
}

/* ---24--- Задача: расчёт скидки
Задание
Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

Используя ветвления и логические операторы, дополни код функции.

Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

Тесты
Объявлена функция getDiscount(totalSpent)
Вызов getDiscount(137000) возвращает 0.1
Вызов getDiscount(46900) возвращает 0.05
Вызов getDiscount(8250) возвращает 0.02
Вызов getDiscount(1300) возвращает 0
Вызов getDiscount(5000) возвращает 0.02
Вызов getDiscount(20000) возвращает 0.05
Вызов getDiscount(50000) возвращает 0.1 */

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent >= 50000)
{
  discount = GOLD_DISCOUNT
}
 else if (totalSpent >= 20000 && totalSpent < 50000)
{
  discount = SILVER_DISCOUNT
}
  else if (totalSpent >= 5000 &&  totalSpent < 20000)
{
   discount = BRONZE_DISCOUNT
}
  else 
  {
  discount = BASE_DISCOUNT
  }
  // Change code above this line
  return discount;
}


/* ---25--- Тернарный оператор
Тернарный оператор используется как более синтаксически краткая замена инструкции if...else, когда одной и той же переменной необходимо присвоить разные значения по условию.

<условие> ? <выражение если условие истинно> : <выражение если условие ложно>
Работает по такой схеме:

Вычисляется условие.
Если условие истинно, то есть приводится к true, вычисляется выражение после ?.
Если условие ложно, то есть приводится к false, вычисляется выражение после :.
Значение вычисленного выражения возвращается как результат работы тернарного оператора.
let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"
Выполним рефакторинг, заменив if...else тернарным оператором.

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"
Внимание
Тернарный оператор должен использоваться в простых операциях присваивания или возврата. Применять его для замены сложных ветвлений — плохая практика (антипаттерн).

Задание
Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

Тесты
Объявлена функция checkStorage(available, ordered).
Использован тернарный оператор.
Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!" */

function checkStorage(available, ordered) {
  let message;
  // Change code below this line

message = ordered > available ? "Not enough goods in stock!" : 
"The order is accepted, our manager will contact you";

  // Change code above this line
  return message;
}


