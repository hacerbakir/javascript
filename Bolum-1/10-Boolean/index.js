let email = "hacerbakir@hotmail.com";

let varmi = email.includes("@");
let varmi2 = email.includes("com");

console.log("Email içerisinde '@' var mı ? => ", varmi);
console.log("Email içerisinde 'com' var mı ? => ", varmi2);

let names = ["ali", "hacer", "veli"];

let varmi3 = names.includes("h");
console.log("Names içerisinde h harfi var mı ? => ", varmi3);

let varmi4 = names.includes("hacer");
console.log("Names içerisinde hacer var mı ? => ", varmi4);

let age = 29;

console.log("Yas : ", age);

console.log(age == 29);
console.log(age == 69);
console.log(age != 69);
console.log(age > 19);
console.log(age < 19);
console.log(age >= 29);
console.log(age <= 29);

let name = "hacer";
console.log("Büyük Küçük Harfe Duyarlı Mı ? ....");

console.log(name == "Hacer");
console.log(name == "hacer");
console.log(name > "Hacer");
console.log(name > "ali");
console.log(name < "ali");
