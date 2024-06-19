"use strict"
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const addPrefix = ([...arrValues], prefix) => arrValues.map(item => `${prefix} ${item}`);

/**
 * Как работает функция filter
 * 1) в параметрах функции создаем сразу клоны массивов для того чтобы не изменять входные данные
 * 2) Метод map перебирает массив и вернуть новые данные для каждого элемента, возвращает новый массив
 * */

console.log(addPrefix(names, 'Mr'));

