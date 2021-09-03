/* ---26--- Задача: проверка пароля
Задание
Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

Используя тернарный оператор дополни функцию так, что:

Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
В противном случае, присвой message строку "Access denied, wrong password!".
Тесты
Объявлена функция checkPassword(password)
Использован тернарный оператор
Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!" */

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = ADMIN_PASSWORD === password ? "Access is allowed" : "Access denied, wrong password!"
  // Change code above this line
  return message;
}


/* ---27--- Инструкция switch
В некоторых случаях неудобство чтения сложных ветвлений if...else можно избежать, используя более «плоский» синтаксис инструкции ветвления switch.

Область применения switch ограничена задачами с одним общим вопросом (что сравнивать) и множеством вариантов ответов (с чем сравнивать).

switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;
}
Его синтаксис состоит из блока switch(значение) - что нужно сравнить и множества отдельных случаев case значение: - с чем нужно сравнить. Для сравнения используется оператор строгого равенства ===. То есть нельзя сравнить на больше или меньше, только на равенство.

Значение в блоке switch(значение) - строка или число, которое сравнивается на строгое равенство со всеми значениями в блоках case значение: по порядку, сверху вниз.

Оператор break в завершении каждого блока case необходим, чтобы прервать дальнейшие проверки и сразу перейти к коду за switch в том случае, когда проверка на равенство вернула true.

Задание
Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

Если значение параметра type это строка:

"starter" - цена подписки 0 кредитов.
"professional" - цена подписки 20 кредитов.
"organization" - цена подписки 50 кредитов.
Изначально в теле функции была инструкция if...else, которая выглядела вот так.

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}
После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

Тесты
Объявлена функция getSubscriptionPrice(type)
Вызов getSubscriptionPrice("professional") возвращает число 20
Вызов getSubscriptionPrice("organization") возвращает число 50
Вызов getSubscriptionPrice("starter") возвращает число 0 */

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "starter": // Change this line
      price = 0; // Change this line
      break;

   case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

/* ---28--- Инструкция switch c блоком default
Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке else для инструкции if...else. Для этого после всех блоков case добавляется блок default.

switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;

  default:
    инструкции;
}
Оператор break после блока default не нужен, так как это и так последнее что будет выполнено в switch и управление будет передано коду за ним.

Задание
Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

Если значение параметра password:

равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

Тесты
Объявлена функция checkPassword(password)
Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
Вызов checkPassword(null) возвращает "Canceled by user!"
Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
Вызов checkPassword('"jqueryismyjam") возвращает "Welcome!" */

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password) {
    case null:
     message = "Canceled by user!";
      break;
      
      case ADMIN_PASSWORD:
     message = "Welcome!";
      break ;
      
      default:
     message = "Access denied, wrong password!";
      
  }

  // Change code above this line
  return message;
}


/* ---29--- Задача: доставка товара
Задание
Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

Список стран и стоимость доставки:

China - 100 кредитов
Chile - 250 кредитов
Australia - 170 кредитов
Jamaica - 120 кредитов
Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

Тесты
Объявлена функция getShippingCost(country)
В теле функции использована инструкция switch
Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"
Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country"
 */

function getShippingCost(country) {
  let message;
  // Change code below this line
switch (country) {
    
  case "China":
    message = `Shipping to ${country} will cost 100 credits`;
    break;
    
  case "Chile":
    message = `Shipping to ${country} will cost 250 credits`;
    break;
      
   case "Australia":
    message = `Shipping to ${country} will cost 170 credits`;
    break;
      
   case "Jamaica":
    message = `Shipping to ${country} will cost 120 credits`;
    break;
      
  default:
    message = "Sorry, there is no delivery to your country";

}
  // Change code above this line
  return message;
}

/* ---30--- Длина строки
Для того чтобы узнать длину строки, то есть количество её символов, у строк есть встроенное свойство length, значение которого можно получить обратившить к нему через точку после имени переменной или строкового литерала.

const productName = "Repair droid";

// Если в переменной хранится строка
console.log(productName.length); // 12

// Если строковый литерал
console.log("Repair droid".length); // 12
Задание
Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

Тесты
Объявлена функция getNameLength(name)
Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long" */

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

