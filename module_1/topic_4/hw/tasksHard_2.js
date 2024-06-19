"use strict"
{
	const totalSum = Number(prompt("Для расчета налога ведите ваш заработок:"));
	let percent = 13;
	let taxValue = 0;
	let differenceSum = 0;
	let flag = false;
	if (Number.isNaN(totalSum) || !totalSum) {
		console.log("Вы ввели некорректные данные");
	}

	if (totalSum < 15000 && totalSum >= 0) {
		percent = 13;
		flag = true;
		differenceSum = totalSum;
	} else if (totalSum >= 15000 && totalSum < 50000) {
		percent = 20;
		flag = true;
		differenceSum = totalSum - 15000;
	} else if (totalSum >= 50000) {
		percent = 30;
		flag = true;
		differenceSum = totalSum - 50000;
	} else {
		console.log("Вы ввели отрицательное значение");
	}
	if (flag) {
		taxValue = differenceSum * (percent / 100);
		console.log(`Процент вашего налога составил ${percent}%. Сумма налога ${taxValue.toFixed(2)} от суммы ${differenceSum}`);
	}
}