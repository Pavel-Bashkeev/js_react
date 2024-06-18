"use strict"

const isPrime = x => {
	if(x <= 0 || x === 1) return false;
	if(x <= 3) return true;

	if(x % 2 === 0 || x % 3 === 0) return false;
	for (let i = 5; i * i <= x; i += 6) {
		if (x % i === 0 || x % (i + 2) === 0) return false;
	}
	return true;
}
console.log(isPrime(37));