'use strict';

const cart = {
	items: [],
	count: 0,
	discount: 0,
	get totalPrice() {
		return this.calculateItemPrice();
	},
	set setDiscount(promocode) {
		if (promocode === 'METHED') {
			this.discount = 15;
		} else if (promocode === 'NEWYEAR') {
			this.discount = 21;
		} else {
			this.discount = 0;
		}
	},
	add(name, price, amount = 1) {
		const newProduct = {name, price, amount};
		this.items.push(newProduct);
		this.increaseCount(amount);
	},
	increaseCount(amount) {
		this.count += amount;
		return this.count;
	},
	calculateItemPrice() {
		const total = this.items.reduce((sum, item) => sum + item.price * item.amount, 0);
		return total * (1 - this.discount / 100);
	},
	clear() {
		this.items = [];
		this.count = 0;
		this.discount = 0;
		return true;
	},
	print() {
		if (this.items.length) {
			const formatPrice = new Intl.NumberFormat('ru').format(this.totalPrice);
			console.log(`Корзина: ${JSON.stringify(this.items, null, 2)}`);
			console.log(`Общая сумма корзины: ${formatPrice} деревянных!`);
			return true;
		}
		console.log(`Ваша корзина пуста`);
		return true;
	},
};

cart.add('Товар 4', 300);
cart.add('Товар 5', 150, 2);
cart.add('Товар 6', 450, 3);

cart.setDiscount = 'METHED';

cart.print();
