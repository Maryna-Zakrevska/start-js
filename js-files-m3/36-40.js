/* ---36---Задача. Лавка зелий «У старой жабы»
Задание
К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

Тесты
Объявлена переменная atTheOldToad
Значение переменной atTheOldToad это объект
Значение свойства atTheOldToad.potions это массив [] */

const atTheOldToad = {
  // Change code below this line

potions: [],
  // Change code above this line
};

/* ---37---Задача. Получаем все зелья
Задание
Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

Тесты
Объявлена переменная atTheOldToad
Значение переменной atTheOldToad это объект
Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
Значение свойства atTheOldToad.getPotions это метод объекта
Вызов метода atTheOldToad.getPotions() возвращает ["Speed potion", "Dragon breath", "Stone skin"] */

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
getPotions(){
  return this.potions;
}
  // Change code above this line
};


/* ---38---Задача: добавляем новое зелье
Задание
Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

Тесты
Объявлена переменная atTheOldToad
Значение переменной atTheOldToad это объект
Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
Значение свойства atTheOldToad.addPotion это метод объекта
После первого вызова метода atTheOldToad.addPotion("Invisibility"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
После второго вызова метода atTheOldToad.addPotion("Power potion"), в свойстве potions будет массив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"] */

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line

this.potions.push(potionName);

    // Change code above this line
  },
};

/* ---39---Задача. Удаляем зелье
Задание
Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

Тесты
Объявлена переменная atTheOldToad
Значение переменной atTheOldToad это объект
Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
Значение свойства atTheOldToad.removePotion это метод объекта
После первого вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив ["Speed potion", Stone skin"]
После второго вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив ["Stone skin"]

 */

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line

let positionPotion = this.potions.indexOf(potionName);
    
this.potions.splice(positionPotion, 1);

    // Change code above this line
  },
};

/* ---40--- Задача: обновляем зелье
Задание
Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

Тесты
Объявлена переменная atTheOldToad
Значение переменной atTheOldToad это объект
Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
Значение свойства atTheOldToad.updatePotionName это метод объекта
После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"), в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"] */


const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line

let positionPotion = this.potions.indexOf(oldName);
    
this.potions.splice(positionPotion, 1, newName);

    
    // Change code above this line
  },
};


