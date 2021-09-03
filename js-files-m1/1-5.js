/* ---1---Объявление переменных
Переменные используются для хранения данных и состоят из идентификатора (имени) и области в памяти, где хранится их значение. Переменную можно представить как коробку с надписью (именем), в которой что-то лежит (значение).

<ключевое слово> <имя переменной> = <значение>
Объявление переменной начинается с ключевого слова const. Такая переменная должна быть сразу инициализирована значением, после чего его нельзя переопределить.

Внимание
Создание переменной без ключевого слова const приведёт к ошибке.

const age = 20;
const username = "Mango";
const socialProfileTag = "@gluck";
const totalWorkerSalary = 4052;
В JavaScript имя перенной записывается в camelCase-нотации. Первое слово пишется строчными буквами, а каждое последующее начинается с заглавной. Имена чувствительны к регистру, то есть переменные user, usEr и User различны.

Задание
Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку. При объявлении присвой переменным следующие характеристики товара:

название - строка "Droid"
цена за штуку - число 2000
Тесты
Объявлена переменная productName
Значение переменной productName это строка "Droid"
Объявлена переменная pricePerItem
Значение переменной pricePerItem это число 2000 */

// Change code below this line
const productName = "Droid";
const pricePerItem = 2000;

// console.log(productName);
// 'Droid'

// console.log(pricePerItem);
// 2000

/* ---2---Переопределение значения переменной
Для того, чтобы объявить переменную, которой в будущем можно будет присвоить новое значение, используется ключевое слово let. Создание переменной без ключевого слова let или const приведёт к ошибке.

let age = 5;
age = 10;

let username = "Mango";
username = "Poly";
Попытка обратиться к переменной по имени до её объявления вызовет ошибку.

Например, нельзя пытаться прочитать или изменить значение переменой до ее объявления:

// ❌ Неправильно, будет ошибка
age = 15; // ReferenceError: Cannot access 'age' before initialization
console.log(age); // ReferenceError: age is not defined

// Объявление переменной age
let age = 20;

// ✅ Правильно, обращаемся после объявления
age = 25;
console.log(age); // 25
Задание
Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

Тесты
Переменная pricePerItem объявлена с помощью let
При объявлении переменной pricePerItem присвоено значение - число 2000
Переменной pricePerItem присвоено новое значение, больше чем предыдущее на 1500
Переменная productName объявлена с помощью let
При объявлении переменной productName присвоено значение - строка "Droid"
Переменной productName присвоено новое значение - строка "Repair droid" */

let productName = "Droid";
let pricePerItem = 2000;

productName = "Repair droid";
pricePerItem = pricePerItem + 1500;

// Change code below this line


/* ---3---Типы примитивов (числа, строки, були)
В JavaScript переменная не ассоциируется с каким-либо типом данных, тип есть у её значения. То есть переменная может хранить значения разных типов.

Number - целые числа и числа с плавающей запятой (точкой).
String - строки, последовательность из нуля или более символов. Строка начинается и заканчивается одиночной ' или двойными кавычками ".
Boolean - логический тип данных, флаги состояния. Всего два значения: true и false. Например, на вопрос включен ли свет в комнате можно ответить да (true) или нет (false).
// Числа
const age = 20;
const salary = 3710.84;

// Строки
const name = "Mango";
const description = "JavaSript essentials";

// Були
const isModalOpen = true;
const isLoggedIn = false;
Задание
Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.

topSpeed - число 160.
distance - число 617.54.
login - строка "mango935".
isOnline - буль true.
isAdmin - буль false.
Тесты
Объявлена переменная topSpeed
Значение переменной topSpeed это число 160
Объявлена переменная distance
Значение переменной distance это число 617.54
Объявлена переменная login
Значение переменной login это строка "mango935"
Объявлена переменная isOnline
Значение переменной isOnline это буль true
Объявлена переменная isAdmin
Значение переменной isAdmin это буль false */

// Change code below this line
const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

/* ---4---Математические операторы
Назначение, функционал и приоритет (порядок) операций ничем не отличаются от школьного курса алгебры. Операторы возвращают значение как результат выражения.

const x = 10;
const y = 5;

// Сложение
console.log(x + y); // 15

// Вычитание
console.log(x - y); // 5

// Умножение
console.log(x * y); // 50

// Деление
console.log(x / y); // 2
Полезно
Важно запомнить правильное именование составляющих алгебраического выражения: +, -, * и / называются операторами, а то на чём они применяются (числа) - операнды.

Задание
Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

Тесты
Объявлена переменная pricePerItem
Значение переменной pricePerItem это число 3500
Объявлена переменная orderedQuantity
Значение переменной orderedQuantity это число 4
Объявлена переменная totalPrice
Значение переменной totalPrice это число 14000
Использован оператор * */

const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line

const totalPrice = pricePerItem * orderedQuantity;

/* ---5---Шаблонные строки
Шаблонные строки это альтернатива конкатенации с более удобным синтаксисом. Шаблонная строка заключена в обратные (косые) кавычки вместо двойных или одинарных и может содержать местозаполнители, которые обозначаются знаком доллара и фигурными скобками - ${выражение}.

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Добро пожаловать ${guestName}, вы поселены в номер ${roomNumber}`;
Задание
Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. Используй синтаксис шаблонных строк.

Тесты
Объявлена переменная productName
Значение переменной productName это строка "Droid"
Объявлена переменная pricePerItem
Значение переменной price это число 3500
Объявлена переменная message
Значение переменной message это строка "You picked Droid, price per item is 3500 credits"
 */

const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line

const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
