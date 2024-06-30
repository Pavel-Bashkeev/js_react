const generatorUpdate = (length, n, m)  => {
	if (length <= 0) return [];
	const range = Math.abs(m - n) + 1; // Получаем абсолютное значение диапазона цифр включительно
	const min = Math.min(n, m); // Получаем минимальнее значение
	return  Array.from({length}, () => Math.floor(Math.random() * range) + min);
};

