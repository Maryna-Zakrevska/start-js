/* ---11--- Задача: математические операторы 2.0
Задание
Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

orderedQuantity - количество единиц товара в заказе;
pricePerItem - цена одной единицы товара.
Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

Тесты
Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem)
Вызов calculateTotalPrice(5, 100) возвращает 500
Вызов calculateTotalPrice(8, 60) возвращает 480
Вызов calculateTotalPrice('3, 400) возвращает 1200
Вызов calculateTotalPrice(1, 3500) возвращает 3500
Вызов calculateTotalPrice(12, 70) возвращает 840
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение */

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
};

/* ---12---Задача: заказ продукта 2.0
Задание
Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

orderedQuantity - количество дроидов в заказе
pricePerDroid - цена одного дроида
deliveryFee - стоимость доставки
Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь о цене доставки при вычислениях общей стоимости.

Тесты
Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
Вызов makeOrderMessage(2, 100, 50) возвращает "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
Вызов makeOrderMessage(4, 300, 100) возвращает "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
Вызов makeOrderMessage(10, 70, 200) возвращает "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price." */

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line

const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`

  // Change code above this line
  return message;
}

/* ---13--- Операторы сравнения >, >=, < и <=
Используются для сравнения двух значений. Результатом своего выполнения возвращают буль - true или false, то есть «да» или «нет».

> - больше
< - меньше
>= - больше или равно
<= - меньше или равно
const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false
Задание
Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

Тесты
Объявлена функция isAdult(age)
В выражении проверки используется оператор >=
Вызов isAdult(20) возвращает true
Вызов isAdult(14) возвращает false
Вызов isAdult(8) возвращает false
Вызов isAdult(37) возвращает true */

function isAdult(age) {
  // Change code below this line
  const passed = age >=18;

  // Change code above this line
  return passed;
}

/* ---14--- Операторы сравнения === и !==
«Нестрогие» операторы == и != выполняют преобразование типов сравниваемых значений, что может привести к ошибкам, особенно у начинающих.

// ❌ Плохо, выполняется приведение типов
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false
Поэтому для проверки равенства или неравенства двух значений используются операторы === (строгое равенство) и !== (строгое неравенство), которые не выполняют приведение типов операндов.

// ✅ Хорошо, приведение типов не выполняется
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true
Задание
Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.

Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

Тесты
Объявлена функция isValidPassword(password)
В выражении проверки паролей использован оператор ===
Вызов isValidPassword("mangodab3st") возвращает false
Вызов isValidPassword("kiwirul3z") возвращает false
Вызов isValidPassword("jqueryismyjam") возвращает true */

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password;

  // Change code above this line
  return isMatch;
}

/* ---15--- Инструкция if...else
Ветвления используются для выполнения различного кода в зависимсти от условия. Принцип работы простой - результат выражения в условии блока if приводится к булю true или false.

if (условие) {
  // тело if
} else {
  // тело else
}
Если условие приводится к true, то выполняется код в фигурных скобках тела if, а блок else игнорируется.

let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100
Если условие приводится к false, код блока if будет пропущен, и выполнится код в фигурных скобках после блока else.

let cost;
const subscription = "free";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0
Задание
Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
В противном случае должен выполняться блок else и записывается строка "You are a minor".
Тесты
Объявлена функция checkAge(age).
В выражении проверки возраста использован оператор >=
Вызов checkAge(20) возвращает "You are an adult"
Вызов checkAge(8) возвращает "You are a minor"
Вызов checkAge(14) возвращает "You are a minor"
Вызов checkAge(38) возвращает "You are an adult" */

function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

