/* ---16--- Задача: склад товаров
Задание
Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

available - общее количество товаров на складе
ordered - единиц товара в заказе
Используя ветвления дополни код функции так, что:

Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
В противном случае записывается строка "Order is processed, our manager will contact you.".
Тесты
Объявлена функция checkStorage(available, ordered).
Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."
Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."
Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."
Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!" */

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (available < ordered) {
message = "Not enough goods in stock!"}
  else {
 message = "Order is processed, our manager will contact you."}
  // Change code above this line
  return message;
}


/* ---17--- Комбинированный оператор присвоения
Комбинированные операторы это более краткий способ присвоить переменной новое значение основываясь на её предыдущем значении.

Будем увеличивать значение переменной age на единицу от предыдущего, имитируя обновление возраста после дня рождения пользователя.

let age = 25;
// Классическая запись
age = age + 1;
console.log(age); // 26
Сначала выполняется правая часть выражения. Вместо age подставляется 25, выполняется операция сложения и в переменную age записывается 26.

Выполним рефакторинг операции обновления возраста, используя комбинированный оператор присвоения с добавлением.

let age = 25;
// Просто более краткая запись, работает также
age += 1;
console.log(age); // 26
Задание
Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

Тесты
Значение переменной a равно 7
Использован оператор +=
Значение переменной b равно 6
Использован оператор -=
Значение переменной c равно 45
Использован оператор *=
Значение переменной d равно 2
Использован оператор /= */

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;


/* ---18---Задача: проверка баланса
Задание
Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

pricePerDroid - цена одного дроида
orderedQuantity - кол-во заказанных дроидов
customerCredits - сумма средств на счету клиента
Дополни её следующим функционалом:

Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
Добавь проверку сможет ли клиент оплатить заказ:
если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".
Тесты
Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
Вызов makeTransaction(3000, 5, 23000) возвращает "You ordered 5 droids, you have 8000 credits left"
Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"
Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"
Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"
Вызов makeTransaction(500, 10, 5000) возвращает "You ordered 10 droids, you have 0 credits left" */

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits)
  {
    message = "Insufficient funds!"
  }
  else 
  {
   message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
  }
  // Change code above this line
  return message;
}


/* ---19--- Блок else...if
Конструкция if...else может проверить и среагировать на выполнение или невыполнение только одного условия.

let cost;
const subscription = "pro";

if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 100
Блок else...if позволяет добавить после else еще один оператор if с условием. В конце цепочки может быть классический блок else, который выполнится только в случае, когда ни одно из условий не приведётся к true.

let cost;
const subscription = "premium";

if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log(`Invalid subscription type - ${subscription}`);
}

console.log(cost); // 500
При первом же удовлетворяющем условии проверки прекратятся и выполнится только тело соответствующего блока if. Поэтому подобную запись следует читать как: «ищу первое выполнение условия, игнорирую всё остальное».

Задание
Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".
Тесты
Объявлена функция checkPassword(password)
Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
Вызов checkPassword(null) возвращает "Canceled by user!"
Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
Вызов checkPassword("jqueryismyjam") возвращает "Welcome!" */

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

/* ---20--- Задача: склад товаров 2.0
Задание
Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

available - доступное количество товаров на складе
ordered - единиц товара в заказе
Используя ветвления дополни код функции так, что:

Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".
Тесты
Объявлена функция checkStorage(available, ordered)
Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"
Вызов checkStorage(70, 0)возвращает "There are no products in the order!"
Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"
Вызов checkStorage(150, 0) возвращает "There are no products in the order!" */

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered === 0)
{
message = "There are no products in the order!"
}
  
else if (ordered > available)
{
message = "Your order is too large, there are not enough items in stock!"
}
  
else 
{
message = "The order is accepted, our manager will contact you"
}
  // Change code above this line
  return message;
}
