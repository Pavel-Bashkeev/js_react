"use strict";

const calculate = (totalCart = 0, countProductInCart = 0, promo = '') => {
	if (Number.isNaN(parseFloat(totalCart))) return `${totalCart} - не число`;
	if (Number.isNaN(parseFloat(countProductInCart))) return `${countProductInCart} - не число`;
	let totalPriceCart = totalCart;
	let countProductCart = countProductInCart;
	let promoCart = promo.toString();
	let result = totalPriceCart;

	if (countProductCart > 10) {
		result -= totalPriceCart * (3 / 100);
	}
	if (totalPriceCart > 30000) {
		result -= (totalPriceCart - 30000) * (15 / 100);
	}
	if(promoCart === "METHED") {
		result -= result * (10 / 100);
	}
	if(promoCart === "G3H2Z1"){
		if(result > 2000){
			result -= 500;
		}
	}
	return result;
};
console.log(calculate(100000, 11, "G3H2Z1"));