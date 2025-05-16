let email = "hacerbakir@hotmail.com";
console.log("e mail adresi : ", email);

let name = "Hacer";
let surname = "Bakır";

//String Birleştirme
let nameSurname = name + surname;
console.log("Name Surname : ", nameSurname);

//Karakter Çekme
console.log("4.index de ki karakter : " + nameSurname[3]);

//Karakter Sayısı
console.log(nameSurname.length);

//methods
console.log(nameSurname.toUpperCase());
//uppercase bütün harfleri büyütür. lowercase de bütün harfleri küçük çevirir

let index = name.indexOf("i");
console.log("H nin bulnuduğu index : " + index);
