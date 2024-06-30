const game = () => {
  // Получаем границы диапазона
  let minRange = prompt("Введите нижнюю границу диапазона, минимальное число 1:");
  let maxRange = prompt("Введите верхнюю границу диапазона, максимальное число 100:");
  
  // Преобразуем введенное значение в число
  minRange = Number(minRange);
  maxRange = Number(maxRange);
  
  // Проверка на корректность данных
  if(isNaN(minRange) || isNaN(maxRange) || maxRange <= minRange || maxRange > 100 || minRange < 1) {
    alert('Некорректный диапазон. Игра окончена.');
    return;
  }
  
  const range = maxRange - minRange + 1; // Получаем диапазон
  const secretNumber = Math.floor(Math.random() * range) + minRange; // Высчитывание загаданного числа
  const arrAnswer = [];

  let attemptsCount = Math.ceil(range * 0.3); // Высчитывание попыток от диапазона чисел с округление в большую сторону
  console.log(secretNumber);
  if(attemptsCount >= 50 && attemptsCount <= 100) {
    attemptsCount = 15;
  }

  let messNumber;

  while (attemptsCount > 0) {
    messNumber = prompt(`Угадайте число от ${minRange} до ${maxRange}. Осталось попыток: ${attemptsCount}`);
    attemptsCount--;
    // Проверяем, нажал ли пользователь "Отмена"
    if (messNumber === null) {
      alert("Игра закончена");
      break;
    }

    // Преобразуем введенное значение в число
    messNumber = Number(messNumber);

    // Далее следует проверка, является ли введенное значение числом
    if (isNaN(messNumber)) {
      alert("Введи число!");
      attemptsCount++; // вернём попытку
      continue;
    }

    // Проверяем, вводил ли пользователь это число ранее
    if(arrAnswer.includes(messNumber)){
      alert("Это число вы уже вводили");
      attemptsCount++; // вернём попытку
      continue;
    }
    // Добавляем число в массив уже введенных чисел
    arrAnswer.push(messNumber);

    // Сравниваем введенное число с загаданным
    if (messNumber > secretNumber) {
      alert(`Меньше! Осталось попыток: ${attemptsCount}`);
    }
    if (messNumber < secretNumber) {
      alert(`Больше! Осталось попыток: ${attemptsCount}`);
    }
    if (messNumber === secretNumber){
      alert('Правильно!');
      break;
    }


    if(attemptsCount === 0){
      alert(`Больше попыток нет! Загаданное число: ${secretNumber}`);
    }
  }
}
game();