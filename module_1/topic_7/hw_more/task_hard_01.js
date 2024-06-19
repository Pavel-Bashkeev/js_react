"use strict"
const allСashbox = [
	[12, 4500],
	[7, 3210],
	[4, 650],
	[3, 1250],
	[9, 7830],
	[1, 990],
	[6, 13900],
	[1, 370]
];
const getAveragePriceGoods = ([...arrMulty]) => Math.floor(arrMulty.reduce(( sum, item) => sum += item[1], 0) / arrMulty.reduce(( sum, item) => sum += item[0], 0));

console.log(getAveragePriceGoods(allСashbox));

