"use strict"

const convertor = moneyInEuro =>  {
	if(Number.isNaN(parseFloat(moneyInEuro))) return `${moneyInEuro} - не число!`;
	if(moneyInEuro < 0) return `${moneyInEuro} - отрицательное число`;

	return  moneyInEuro * 1.2 * 64;
};
console.log(`${convertor('w')}`);