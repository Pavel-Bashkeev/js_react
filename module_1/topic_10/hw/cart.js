"use strict";

const cart = {
	items: [],
	count: 0,
	get totalPrice() {
		return this.calculateItemPrice();
	},
	add: function(name, price, amount = 1) {
		const newProduct = {name, price, amount};
		this.items.push(newProduct);
		this.increaseCount(amount);
	},
	increaseCount: function (amount) {
		this.count += amount;
		return this.count;
	},
	calculateItemPrice: function () {
		return this.items.reduce((allTotal, item) => allTotal + item.price * item.amount, 0);
	},
	clear: function() {
		this.items = [];
		this.totalPrice = 0;
		this.count = 0;
		return true;
	},
	print: function() {
		if(this.items.length){
			console.log(`Корзина: ${JSON.stringify(this.items, null, 2)}`);
			console.log(`Общая сумма корзины: ${new Intl.NumberFormat("ru").format(this.totalPrice)} деревянных!`);
			return true;
		}
		console.log(`Ваша корзина пуста`);
		return true;
	},
};

cart.add('Товар 4', 300);
cart.add('Товар 5', 150, 2);
cart.add('Товар 6', 450, 3);

cart.print();
