function generator(number){
	const array = [];
	for (let i = 0; i < number; i++) {
		array.push(Math.floor(Math.random() * 100) + 1);
	}
	return array;
}

/**
 * Выражение Math.floor(Math.random() * 100) даёт диапазон от 0 до 99 и при инкременте на 1 от 1 до 100 включительно
 * */
console.log(generator(100));
/*#========================= Второй способ =========================#*/

const generatorUpdate = (number)  =>  Array.from({ length: number }, () => Math.floor(Math.random() * 100) + 1);
/**
 * Функция Array.from() создаёт новый массив на основе переданного объекта. Объект должен быть либо массивоподобным (как строка или объект arguments), либо итерируемым (как Set или Map).
 * То есть переданный объект должен обладать свойством length и если передать просто число то вернется путой массив так как число нельзя итерировать
 * в этом случае нужно передать таким образом {length: number}
 * */

console.log(generatorUpdate(100));
