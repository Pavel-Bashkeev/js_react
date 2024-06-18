"use strict";
{
  const nameProduct = prompt("Введите наименование товара:");
  let qualityProduct = Number(prompt("Введите количество товара:"));
  const categoryProduct = prompt("Введите категорию товара:");
  let priceProduct = Number(prompt("Введите цену товара:"));
  console.log(typeof qualityProduct, " ", qualityProduct);
  if(Number.isNaN(qualityProduct) || Number.isNaN(+priceProduct) ||  !qualityProduct || !priceProduct){
    console.log("Вы ввели некорректные данные");
  }
  if(Number.isFinite(qualityProduct) && Number.isFinite(priceProduct ) &&  !!qualityProduct && !!priceProduct){
    console.log(`На складе ${qualityProduct} единицы товара ${nameProduct} на сумму ${priceProduct * qualityProduct} деревянных`);
  }
}
