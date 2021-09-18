/* ---21--- Деструктуризация объектов
Сложные данные всегда представлены объектом. Множественные обращения к свойствам объекта визуально загрязняют код.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const accessType = book.public ? "публичном" : "закрытом";
const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступе.`;
Деструктуризация позволяет «распаковать» значения свойств объекта в локальные переменные. Это делает код в месте их использования менее «шумным».

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

// Деструктуризируем
const { title, author, public, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = public ? "публичном" : "закрытом";
const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
Деструктуризация всегда находится в левой части операции присвоения. Переменным внутри фигурных скобок присваиваются значения свойств объекта. Если имя переменной и имя свойства совпадают, то происходит присваивание, в противном случае ей будет присвоено undefined. Порядок объявления переменных в фигурных скобках не важен.

Задание
Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

Тесты
Объявлена переменная highTemperatures
Значение переменной highTemperatures это объект
Объявлена переменная yesterday с помощью деструктуризации
Значение переменной yesterday это число 28
Объявлена переменная today с помощью деструктуризации
Значение переменной today это число 26
Объявлена переменная tomorrow с помощью деструктуризации
Значение переменной tomorrow это число 33
Объявлена переменная meanTemperature
Значение переменной meanTemperature это число 29
Используется синтаксис деструктуризации объекта highTemperatures */

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow} = highTemperatures;



// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


/* ---22---Значения по умолчанию
Для того чтобы избежать присвоения undefined при деструктуризации несуществующих свойств, можно задать переменным значения по умолчанию, которые будут присвоены только в случае когда в объекте нет свойства с таким именем.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Добавим картинку обложки если её нет в объекте книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // "The Last Kingdom"
console.log(author); // "Bernard Cornwell"
console.log(coverImage); // "https://via.placeholder.com/640/480"
Задание
В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

Тесты
Объявлена переменная highTemperatures
Значение переменной highTemperatures это объект
Объявлена переменная highTemperatures
Значение переменной highTemperatures это объект
Объявлена переменная yesterday с помощью деструктуризации
Значение переменной yesterday это число 28
Объявлена переменная today с помощью деструктуризации
Значение переменной today это число 26
Объявлена переменная tomorrow с помощью деструктуризации
Значение переменной tomorrow это число 33
Объявлена переменная icon с помощью деструктуризации
Значение переменной icon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
Используется деструктуризация объекта */

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


/* ---23---Изменение имени переменной
При деструктуризации можно изменить имя переменной в которую распаковывается значение свойства. Сначала пишем имя свойства из которого хотим получить значение, после чего ставим двоеточие и пишем имя переменной в которую необходимо поместить значение этого свойства.

const firstBook = {
  title: "Последнее королевство",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // Последнее королевство
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смешного человека",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смешного человека
console.log(secondCoverImage); // https://via.placeholder.com/640/480
Такая запись читается как «Создать переменную firstTitle, в которую поместить значение свойства title из объекта firstBook» и т. д.

Задание
Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

Тесты
Объявлена переменная highTemperatures
Значение переменной highTemperatures это объект
Объявлена переменная highYesterday
Значение переменной highYesterday это число 28
Объявлена переменная highToday
Значение переменной highToday это число 26
Объявлена переменная highTomorrow
Значение переменной highTomorrow это число 33
Объявлена переменная highIcon
Значение переменной highIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
Используется деструктуризация объекта */

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line


highTemperatures.icon;

const {
yesterday: highYesterday,
today: highToday,
tomorrow: highTomorrow,  
icon: highIcon  = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;



// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


/* ---24--- Деструктуризация в циклах
При переборе массива объектов циклом for...of получаются множественные обращения к свойствам объекта.

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
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}
Для того, чтобы сократить количество повторений, можно деструктуризировать свойства объекта в локальные переменные в теле цикла.

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}
Если в объекте немного свойств, деструктуризацию можно выполнить прямо в месте объявления переменной book.

for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}
Задание
Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

Тесты
Объявлена переменная colors
Значение переменной colors это массив
Объявлена переменная hexColors
Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
Объявлена переменная rgbColors
Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
Для перебора массива используется цикл for...of
В цикле for...of используется деструктуризация объекта */

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}


/* ---25--- Глубокая деструктуризация
Для деструктуризации свойств вложенных объектов используются те же принципы, что и в трёх предыдущих упражнениях.

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308
Задание
Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

Тесты
Объявлена переменная forecast
Значение переменной forecast это объект
Объявлена переменная highToday с помощью деструктуризации
Значение переменной highToday это число 32
Объявлена переменная lowToday с помощью деструктуризации
Значение переменной lowToday это число 28
Объявлена переменная todayIcon с помощью деструктуризации
Значение переменной todayIcon это строка "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
Объявлена переменная highTomorrow с помощью деструктуризации
Значение переменной highTomorrow это число 31
Объявлена переменная lowTomorrow с помощью деструктуризации
Значение переменной lowTomorrow это число 27
Объявлена переменная tomorrowIcon с помощью деструктуризации
Значение переменной tomorrowIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
Используется синтаксис деструктуризации объекта highTemperatures */

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

forecast.tomorrow.icon;

const {
  today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
  tomorrow: {low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
} = forecast;
  

