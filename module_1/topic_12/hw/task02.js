"use strict"
const addRandomNumber = (arr) => {

	const randomNumber = Math.floor(Math.random() * 11);

	arr.push(randomNumber);

	const sum = arr.reduce((acc, num) => acc + num, 0);

	if (sum < 50) {
		return addRandomNumber(arr);
	}
	return arr;
};


const resultArray = addRandomNumber([]);
console.log(resultArray);