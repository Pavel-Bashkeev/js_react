"use strict";

{
	const rain = Math.round(Math.random());
	rain ? console.log("Пошёл дождь. Возьмите зонт!") : console.log("Дождя нет!");
}

{
	const countExems = 3;
	const passingScore = 265;

	let exemBallOne = Number(prompt("Введите кол-во баллов по математике:"));
	let exemBallTwo = Number(prompt("Введите кол-во баллов по русскому языку:"));
	let exemBallThree = Number(prompt("Введите кол-во баллов по русскому языку:"));
	let resultBall = exemBallOne + exemBallTwo + exemBallThree;
	(passingScore <= resultBall) ? alert("Поздравляю, вы поступили на бюджет!") : false;
}

{
	const minBanknote = 100
	let desiredAmount = Number(prompt("Сколько денег выдать?"));
	if(!(desiredAmount % minBanknote)){
		console.log(`Возьмите ваши ${desiredAmount}`);
	}else{
		console.log(`Сумма должна быть кратной ${minBanknote}`);
	}
}