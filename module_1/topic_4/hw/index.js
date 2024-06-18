"use strict";
{
  const nameProduct = prompt("Введите наименование товара:");
  let qualityProduct = Number(prompt("Введите количество товара:"));
  const categoryProduct = prompt("Введите категорию товара:");
  let priceProduct = Number(prompt("Введите цену товара:"));

  if(Number.isFinite(+qualityProduct) && Number.isFinite(+priceProduct)){
    console.log(`На складе ${qualityProduct} единицы товара ${nameProduct} на сумму ${priceProduct * qualityProduct} деревянных`);
  }
  if(!Number.isFinite(+qualityProduct) || !Number.isFinite(+priceProduct)){
    console.log("Вы ввели некорректные данные");
  }
}
