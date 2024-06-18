"use strict"

const convertString = string => {
	const mdString = string.trim().toLowerCase();
	const firstLetter = mdString[0];
	return mdString.replace(firstLetter, firstLetter.toUpperCase());
};

console.log(convertString("ПриВет Мир"));