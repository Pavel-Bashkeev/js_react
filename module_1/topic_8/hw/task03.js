const generatorUpdate = (length, n, m, type = '')  => {
  if (length <= 0) return [];
  const range = Math.abs(m - n) + 1; // Получаем абсолютное значение диапазона цифр включительно
  const min = Math.min(n, m); // Получаем минимальнее значение
  let numbers =  Array.from({length}, () => Math.floor(Math.random() * range) + min);

  if(type === 'even'){
    numbers = numbers.filter(item => item % 2 === 0);
  }else if(type === 'odd'){
    numbers = numbers.filter(item => item % 2 !== 0);
  }

  return numbers;
};

console.log(generatorUpdate(5, 10, 5, 'even'));