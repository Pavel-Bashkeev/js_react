"use strict";
{
  const nameProduct = "Яблоко";
  const qualityProduct = 3;
  const categoryProduct = "Фрукты";
  const priceProduct = 5;

  console.log("Наименование товара: ", nameProduct);
  console.log("Общая сумма товара: ", qualityProduct * priceProduct);
}
{
  const nameProduct = "Огурец";
  const qualityProduct = 10;
  const categoryProduct = "Овощи";
  const priceProduct = 50;

  console.log("Наименование товара: ", nameProduct);
  console.log("Общая сумма товара: ", qualityProduct * priceProduct);
}
{
  const nameProduct = prompt("Введите наименование товара:");
  let qualityProduct = Number(prompt("Введите количество товара:"));
  const categoryProduct = prompt("Введите категорию товара:");
  let priceProduct = Number(prompt("Введите цену товара:"));
  console.log(`тип данных количества: ${typeof qualityProduct}`);
  console.log(`тип данных цены: ${typeof priceProduct}`);
 
  console.log(`На складе ${qualityProduct} единицы товара ${nameProduct} на сумму ${priceProduct * qualityProduct} деревянных`);
}
