/* ---6---Объявление класса
Синтаксис литерала объекта позволяет создать один объект. Но часто нужно создать много однотипных объектов с одинаковым набором свойств, но разными значениями и методами для взаимодействия со ними. Всё это нужно сделать динамичекски, во время выполнения программы. Для этого используют классы - специальный синтаксис объявления функции для создания объектов.

Объявление класса начинается с ключевого слова class, после которого идёт имя класса и фигурные скобки - его тело. Классы принято называть с большой буквы, а в самом названии отражать тип создаваемого объекта (существительное).

class User {
  // Тело класса
}

const mango = new User();
console.log(mango); // {}

const poly = new User();
console.log(poly); // {}
Результат вызова new User() это объект, который называется экземпляр класса, потому что содержит данные и поведение, описываемые классом.

Задание
Используя ключевое слово class объяви класс Car с пустым телом.

Тесты
Объявлен класс Car
Результат вызова new Car() это пустой объект */

class Car {}


/* ---7---Конструктор класса
Для инициализации экземпляра в классе есть метод constructor. Если он не объявлен, создаётся конструктор по умолчанию - пустая функция, которая не изменяет экземпляр.

class User {
  // Синтаксис объявления метода класса
  constructor(name, email) {
    // Инициализация свойств экземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User("Poly", "poly@mail.com");
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
Вызов класса с оператором new приводит к созданию нового объекта и вызову конструктора в контексте этого объекта. То есть this внутри конструктора будет ссылаться на новосозданный объект. Это позволяет добавлять каждому объекту свойства с одинаковыми именами, но разными значениями.

Свойства name и email называются публичные свойства, потому что они будут собственными свойствами объекта-экземпляра и к ним можно будет получить доступ обратившись через точку.

Задание
Добавь классу Car метод constructor который принимает три параметра:

brand - марка автомобиля.
model - модель автомобиля.
price - цена автомобиля.
Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

Тесты
Объявлен класс Car
У класса Car есть метод constructor
В результате вызова new Car("Audi", "Q3", 36000) получится объект { brand: "Audi", model: "Q3", price: 36000 }
В результате вызова new Car("BMW", "X5", 58900) получится объект { brand: "BMW", model: "X5", price: 58900 }
В результате вызова new Car("Nissan","Murano", 31700) получится объект { brand: "Nissan", model: "Murano", price: 31700 } */


class Car {
  // Change code below this line

constructor(brand,model,price) {
this.brand = brand;
this.model = model;
this.price = price;}

  // Change code above this line
}


/* ---8---Объект параметров
Класс может принимать большое количество входных данных для свойств будущего объекта. Если параметров много (больше 2-х), то обычно применяют паттерн «Объект параметров». Идея этого паттерна в том, чтобы передавать в качестве параметра один объект с логично именованными свойствами. Значения свойств такого объекта заменят набор аргументов.

class User {
  // Деструктуризируем объект
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Mango", email: "mango@mail.com" }

const poly = new User({
  name: "Poly",
  email: "poly@mail.com",
});
console.log(poly); // { name: "Poly", email: "poly@mail.com" }
Задание
Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.

Тесты
Объявлен класс Car
У класса Car есть метод constructor
В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { brand: "Audi", model: "Q3", price: 36000 }
В результате вызова new Car({ brand: "BMW", model: "X5", price: 58900 }) получится объект { brand: "BMW", model: "X5", price: 58900 }
В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { brand: "Nissan", model: "Murano", price: 31700 } */


class Car {
  // Change code below this line
  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}


/* ---9---Методы класса
Для работы со свойствами будущего экземпляра используются методы класса. Методы - это просто функции, но с одним отличием, они доступны экземпляру класса.

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
Задание
Добавь классу Car два метода.

getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
Тесты
В классе Car объявлен метод getPrice
Метод getPrice возвращает значение свойства price экземпляра класса который его вызывает
В классе Car объявлен метод changePrice
Метод changePrice изменяет значение свойства price экземпляра класса который его вызывает */

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
getPrice() {
  return this.price};
  
  
changePrice(newPrice) {
  this.price = newPrice};


  // Change code above this line
}


/* ---10---Задача: склад
Задание
Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

Объяви следующие методы класса:

getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

Тесты
Объявлен класс Storage
В классе Storage объявлен метод getItems
В классе Storage объявлен метод addItem
В классе Storage объявлен метод removeItem
Метод getItems возвращает значение свойства items экземпляра класса который его вызывает
Метод addItem изменяет свойство items экземпляра класса который его вызывает
Метод removeItem изменяет свойство items экземпляра класса который его вызывает
В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
У объекта storage есть свойство items
Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив ["Nanitoids", "Antigravitator", "Droid"] */


