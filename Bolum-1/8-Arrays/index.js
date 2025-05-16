let names = ["ali", "hacer", "elif"];
console.log("Names Array : ", names);
console.log("Names Array 2. Elemanı : ", names[1]);

names[1] = "tuğçe";
console.log("Names Array 2. eleman değişilği names[1] = 'tuğçe' :", names[1]);

let ages = [32, 54, 68, 28];
console.log("Yaşlar Arrayi : ", ages);
console.log("4. sıradaki yaş : ", ages[3]);

let person = ["hacer", "bakır", 25, "Antalya"];
console.log("Kişiye ait bilgiler : ", person);
console.log("Kişinin elimizde bulunan data sayısı : ", person.length);

let tire = names.join("-");
console.log("Join kullanımı names.join(" - "): ", tire);

let virgul = names.join(",");
console.log("Join kullanımı names.join(", "): ", virgul);

let sira = names.indexOf("elif");
console.log("Elif arrayde kaçıncı sırada :", sira);
//concat eleman ekler
let ekle = names.concat(["merve", "ali"]);
console.log("Concat ile array birleştirme: ", ekle);

console.log(
  "push diziye eleman eklemek için , pop dizideki son eleman çıkarmak için kullanılır"
);

let elemanCikar = names.pop();
console.log("Names dizisindeki son eleman kaldırıldı : ", elemanCikar);

let elemanekle = names.push("serpil");
console.log("Names dizisine eleman eklenildi", elemanekle);
