const game = () => {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let mess;

  while (true) {
    mess = prompt("Угадай число от 1 до 100");

    // Проверяем, нажал ли пользователь "Отмена"
    if (mess === null) {
      alert("Игра закончена");
      break;
    }
    // Преобразуем введенное значение в число
    mess = Number(mess);
    // Далее следует проверка, является ли введенное значение числом
    if (isNaN(mess)) {
      alert("Введи число!");
      continue;
    }

    // Сравниваем введенное число с загаданным
    if (mess > secretNumber) {
      alert('Меньше!');
    } else if (mess < secretNumber) {
      alert('Больше!');
    } else {
      alert('Правильно!');
      break;
    }
  }
}
game()