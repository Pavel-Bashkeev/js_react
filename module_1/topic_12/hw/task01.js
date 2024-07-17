const game = () => {

	const minRange = Number(prompt("Введите нижнюю границу диапазона, минимальное число 1:"));
	const maxRange = Number(prompt("Введите верхнюю границу диапазона, максимальное число 100:"));

	if (isNaN(minRange) || isNaN(maxRange) || maxRange <= minRange || maxRange > 100 || minRange < 1) {
		alert('Некорректный диапазон. Игра окончена.');
		return;
	}

	const range = maxRange - minRange + 1; // Получаем диапазон
	const secretNumber = Math.floor(Math.random() * range) + minRange; // Высчитывание загаданного числа
	const arrAnswer = [];

	let attemptsCount = Math.ceil(range * 0.3); // Высчитывание попыток от диапазона чисел с округлением в большую сторону
	console.log(secretNumber);
	if (attemptsCount >= 50 && attemptsCount <= 100) {
		attemptsCount = 15;
	}

	const guessNumber = (attemptsLeft) => {
		if (attemptsLeft <= 0) {
			alert(`Больше попыток нет! Загаданное число: ${secretNumber}`);
			return;
		}

		const messNumber = prompt(`Угадайте число от ${minRange} до ${maxRange}. Осталось попыток: ${attemptsLeft}`);

		if (messNumber === null) {
			alert("Игра закончена");
			return;
		}

		const numberInput = Number(messNumber);

		if (isNaN(numberInput)) {
			alert("Введи число!");
			guessNumber(attemptsLeft); // вернём попытку
			return;
		}

		if (arrAnswer.includes(numberInput)) {
			alert("Это число вы уже вводили");
			guessNumber(attemptsLeft);
			return;
		}

		arrAnswer.push(numberInput);

		if (numberInput > secretNumber) {
			alert(`Меньше! Осталось попыток: ${attemptsLeft - 1}`);
			guessNumber(attemptsLeft - 1);
		} else if (numberInput < secretNumber) {
			alert(`Больше! Осталось попыток: ${attemptsLeft - 1}`);
			guessNumber(attemptsLeft - 1);
		} else {
			alert('Правильно!');
		}
	};
	guessNumber(attemptsCount);
};
game();