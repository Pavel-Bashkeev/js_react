"use strict"

const commonDivisor = (x, y) => {
	if(y > x) return commonDivisor(y, x);
	if(!y) return x;
	return commonDivisor(y, x % y);
}