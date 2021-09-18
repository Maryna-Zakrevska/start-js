/* ---26--- Паттерн «Объект настроек»
Если функция принимает более двух-трёх аргументов, очень просто запутаться в какой последовательности что передавать. В результате получается очень неочевидный код в месте её вызова.

function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
  // Делаем что-то с параметрами
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// ❌ Что такое 736? Что такое 10283? Что такое true?
doStuffWithBook("Последнее королевство", 736, 10283, 8.38, true);
Паттерн «Объект настроек» помогает решить эту проблему, заменяя набор параметров всего одним - объектом с именованными свойствами.

function doStuffWithBook(book) {
  // Делаем что-то со свойствами объекта
  console.log(book.title);
  console.log(book.numberOfPages);
  // И так далее
}
Тогда во время её вызова передаём один объект с необходимыми свойствами.

// ✅ Всё понятно
doStuffWithBook({
  title: "Последнее королевство",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  public: true,
});
Ещё один плюс в том, что можно деструктуризировать объект в параметре book.

// Это можно сделать в теле функции.
function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, public } = book;
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// Или в сигнатуре (подписи), разницы нет.
function doStuffWithBook({ title, numberOfPages, downloads, rating, public }) {
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}
Задание
Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

Тесты
Объявлена функция calculateMeanTemperature(forecast)
В теле функции используется деструктуризация объекта
В теле функции объявлена переменная todayHigh с помощью деструктуризации
В теле функции объявлена переменная todayLow с помощью деструктуризации
В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации
Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5
Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37 */

// Change code below this line
function calculateMeanTemperature(forecast) {
  const {
    today: {
    low: todayLow,
    high: todayHigh,
  },
      tomorrow: {
        low: tomorrowLow,
    high: tomorrowHigh,
      }
} = forecast;
  



  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


/* ---27---Операция spread при передаче аргументов
Синтаксис ... (spread) позволяет распылить коллекцию элементов (массив, строку или объект) в место, где ожидается набор отдельных значений. Конечно есть некоторые ограничения, например нельзя распылить массив в объект и наоборот.

Можно привести аналогию с ящиком яблок. Поставив ящик на пол не вынимая из него яблоки, получим аналог массива значений. Если высыпать яблоки из ящика на пол, произойдёт распыление - набор отдельных значений.

Отличие всего одно - в JavaScript распыление не изменяет оригинальную коллекцию, то есть делается копия каждого элемента. После распыления останется и ящик полный яблок, и копия каждого яблока на полу.

Например, метод Math.max(аргументы) ищет и возвращает самый большой из аргументов (чисел), то есть ожидает не массив значений, а произвольное количество аргументов.

const temps = [14, -4, 25, 8, 11];

// В консоли будет массив
console.log(temps);
// ❌ Так не сработает, потому что передаём целый массив
console.log(Math.max(temps)); // NaN

// В консоли будет набор отдельных чисел
console.log(...temps);
// ✅ Распылим коллекцию элементов как отдельные аргументы
console.log(Math.max(...temps)); // 25
То есть запись Math.max(...[14, -4, 25, 8, 11]), после интерпретации превращается в Math.max(14, -4, 25, 8, 11) - синтаксис ... возвращает распакованный массив, то есть распыляет его элементы как отдельные аргументы.

Задание
В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

Тесты
Объявлена переменная scores
Значение переменной scores это массив [89, 64, 42, 17, 93, 51, 26]
Объявлена переменная bestScore
Значение переменной bestScore это число 93
Объявлена переменная worstScore
Значение переменной worstScore это число 17
Для передачи аргументов методу Math.max() используется синтаксис ... на массиве scores
Для передачи аргументов методу Math.min() используется синтаксис ... на массиве scores */


const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);


/* ---28--- Операция spread при создании нового массива
Операция spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый. Раньше для этого использовали методы slice() и concat(), но операция распыления позволяет сделать тоже самое в более краткой форме.

const temps = [14, -4, 25, 8, 11];

// Это точная, но независимая копия массива temps
const copyOfTemps = [...temps];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]
В примере выше у нас есть ящик яблок temps и мы хотим сделать его точную копию. Берём пустой ящик и пересыпаем в него яблоки из исходного ящика temps - распыляем его в другую коллекцию. При этом ящик temps не изменится, в нём все ещё будут яблоки, а в новом ящике - их точные копии.

В следующем примере мы ссыпаем яблоки из двух ящиков в один новый. Оригинальные ящики (массивы) не изменятся, а в новом будут копии всех их яблок (элементов). Порядок распыления важен - он влияет на порядок элементов в новой коллекции.

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]
Задание
В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

В переменной allScores хранился массив всех результатов от первой до третьей группы.
В переменной bestScore был самый высокий общий балл.
В переменной worstScore был самый низкий общий балл.
Тесты
Объявлена переменная firstGroupScores
Значение переменной firstGroupScores это массив [64, 42, 93]
Объявлена переменная secondGroupScores
Значение переменной secondGroupScores это массив [89, 14, 51, 26]
Объявлена переменная thirdGroupScores
Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81]
Объявлена переменная allScores.
Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
Объявлена переменная bestScore
Значение переменной bestScore это число 97
Объявлена переменная worstScore
Значение переменной worstScore это число 14
При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива
Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores
Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores */

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);


/* ---29---Операция spread при создании нового объекта
Операция spread позволяет распылить свойства произвольного количества объектов в один новый.

const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }
Порядок распыления имеет значение. Имена свойств объекта уникальные, поэтому свойства распыляемого объекта могут перезаписать значение уже существующего свойства, если их имена совпадают.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

const fourth = { ...second, ...first };
console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
Если бы яблоки в ящике имели наклейки с метками, то в одном ящике не может быть двух яблок с одинаковыми метками. Поэтому при пересыпании второго ящика, все яблоки, метки которых совпадут с теми что уже есть в новом, заменят те что уже есть.

Во время распыления можно добавлять свойства в произвольное место. Главное помнить про уникальность имени свойства и о том, что его значение может быть перезаписано.

const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

const fifth = { ...first, propB: 20, ...second };
console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
Задание
В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

Тесты
Объявлена переменная defaultSettings
Значение переменной defaultSettings это объект
Объявлена переменная overrideSettings
Значение переменной overrideSettings это объект
Объявлена переменная finalSettings
Значение переменной finalSettings это объект
Значение свойства finalSettings.theme равно "light"
Значение свойства finalSettings.public равно "false"
Значение свойства finalSettings.withPassword равно "true"
Значение свойства finalSettings.minNumberOfQuestions равно 10
Значение свойства finalSettings.timePerQuestion равно 30
При присваивании значения переменной finalSettings используется синтаксис ... */

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};

/* ---30--- Задача. Карточки задач
Задание
Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

text - текст задачи.
category - категория задачи.
priority - приоритет задачи.
Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

Тесты
Объявлена функция makeTask(data)
Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }
Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
Вызов makeTask({ text: "Buy bread" }) возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false } */

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line

  const copyData = {completed, category, priority, ...data};
  
  return copyData;
    
  // Change code above this line
}


