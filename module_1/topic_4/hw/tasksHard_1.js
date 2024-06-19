"use strict"
{
	const totalSum = Number(prompt("Для расчета налога ведите ваш заработок:"));
	let percent = 13;
	let taxValue = 0;
	let flag = false;
	if (Number.isNaN(totalSum) || !totalSum) {
		console.log("Вы ввели некорректные данные");
	}

	if (totalSum < 15000 && totalSum > 0) {
		percent = 13;
		flag = true;
	} else if (totalSum >= 15000 && totalSum < 50000) {
		percent = 20;
		flag = true;
	} else if (totalSum >= 50000) {
		percent = 30;
		flag = true;
	} else {
		console.log("Вы ввели отрицательное значение");
	}
	if (flag) {
		taxValue = totalSum * (percent / 100);
		console.log(`Процент вашего налога составил ${percent}%. Сумма налога ${taxValue.toFixed(2)}`);
	}
}