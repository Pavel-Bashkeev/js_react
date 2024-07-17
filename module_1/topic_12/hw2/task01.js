const rectangle = {
	_width: 5,
	_height: 5,

	set width(value) {
		if (typeof value === 'number') {
			this._width = value;
		} else {
			console.error('Ширина должна быть числом');
		}
	},

	set height(value) {
		if (typeof value === 'number') {
			this._height = value;
		} else {
			console.error('Высота должна быть числом');
		}
	},

	// Геттер для периметра
	get perimeter() {
		const perimeter = 2 * (this._width + this._height);
		return `${perimeter}см`;
	},

	// Геттер для площади
	get area() {
		const area = this._width * this._height;
		return `${area}см`;
	}
};

// Пример использования
console.log(rectangle.perimeter); // "20см"
console.log(rectangle.area); // "25см"

rectangle.width = 10;
rectangle.height = 20;

console.log(rectangle.perimeter); // "60см"
console.log(rectangle.area); // "200см"