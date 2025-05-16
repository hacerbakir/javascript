let age = "29";

console.log("age == 29  ? ", yas == 29);
console.log("age == '29'  ? ", yas == "29");

console.log(
  " İki eşittir ile tipini otamatik çeviriyor. Eğer tip kontrolü de sağlamak istersek üç tane eşittir kullanılmalı"
);

console.log("age === '29 ? ", age === "29");
console.log("age +1 = ", age + 1);
console.log("Typeof Age = ", typeof age);

age = Number(age);
console.log("Age in değerini stringden number a çevirme", age);

let name = Number("hacer");
console.log("Number('hacer') : ", name); //NaN döner

console.log(
  "Boolende sadece 0 false döner, String oldugunde içerisinde sadece boş değer varsa false döner"
);

let sonuc = Boolean(18);
console.log("Boolean(18)", sonuc, "Typeof : ", typeof sonuc);
