/* ---16---Задача. Расходы на зарплату
Задание
Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

Тесты
Объявлена функция countTotalSalary(salaries)
Вызов countTotalSalary({}) возвращает 0
Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
Функция учитывает только собственные свойства объекта */

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  
 
  const values = Object.values(salaries);
  
  for (const value of values) {
  totalSalary += value;
}
  
  
  // Change code above this line
  return totalSalary;
}

/* ---17---Массив объектов
В стандартный набор повседневных задач разработчика входит манипуляция массивом однотипных объектов. Это значит что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными значениями.

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];
Для перебора такого массива используется стандартный цикл for...of. Значения свойств каждого объекта можно получить используя синтаксис «через точку», так как в каждом объекте набор свойств и их имена будут одинаковые, отличаются только значения.

for (const book of books) {
  // Объект книги
  console.log(book);
  // Название
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}
Задание
Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

Тесты
Объявлена переменная colors
Значение переменной colors это массив
Объявлена переменная hexColors
Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
Объявлена переменная rgbColors
Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

 */


const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
hexColors.push(color.hex);
rgbColors.push(color.rgb);
  
 
}


/* ---18--- Задача. Поиск объекта по значению свойства
Задание
Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

Тесты
Объявлена функция getProductPrice(productName).
Вызов getProductPrice("Radar") возвращает 1300.
Вызов getProductPrice("Grip") возвращает 1200.
Вызов getProductPrice("Scanner") возвращает 2700.
Вызов getProductPrice("Droid") возвращает 400.
Вызов getProductPrice("Engine") возвращает null.

 */


const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line

for (const product of products) 
{
  if (productName === product.name) 
  {
  return product.price;
  }
  
}
  
 return null;
  
  // Change code above this line
}


/* ---19---Задача. Коллекция значений свойства
Задание
Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

Тесты
Объявлена функция getAllPropValues(propName)
Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
Вызов getAllPropValues("category") возвращает []
 */

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  
  const propNames = [];

  for (const product of products) {
    if (product[propName]) {
      propNames.push(product[propName]);
    }
  }
  return propNames;
  

  // Change code above this line
}


/* ---20--- Задача. Общая стоимость товара
Задание
Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

Тесты
Объявлена функция calculateTotalPrice(productName)
Вызов calculateTotalPrice("Blaster") возвращает 0
Вызов calculateTotalPrice("Radar") возвращает 5200
Вызов calculateTotalPrice("Droid") возвращает 2800
Вызов calculateTotalPrice("Grip") возвращает 10800
Вызов calculateTotalPrice("Scanner") возвращает 8100

 */
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки

for (const product of products) 
{
  if (productName === product.name) 
  {
  return product.price*product.quantity ;
  } 
}
  
 return 0;
  // Пиши код выше этой строки
}




