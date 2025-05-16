let yaricap = 15;
const piSayisi = 3.14;

console.log("YarıÇap : ", yaricap);
console.log("Pi Sayısı : ", piSayisi);

let circle = piSayisi * yaricap ** 2;

console.log("Circle : ", circle);

console.log("16 / 4 = ", 16 / 4);

let kalan = yaricap % 4;
console.log("Yarıçap mod 4 = ", kalan);

let sonuc = 6 * (15 - 4) ** 2;
console.log("6 x (15-4) ** 2 =  ", sonuc);

let sayi = 13;
// sayi++;
// sayi+=1;
// sayi=sayi+1;

// sayi*=3;
// sayi/=3;

console.log(sayi);

//NaN - not a number : bir sayyiyi string ifade ile çarpma ve bölme işlemi yapmak istenildiğinde nan alırsınız
console.log(
  "NaN - not a number : bir sayyiyi string ifade ile çarpma ve bölme işlemi yapmak istenildiğinde nan alırsınız"
);
console.log(15 / "hcr");
console.log(15 * "hcr");

let birlestirme = "dersi " + sayi + " kere tekrar ettim.";
console.log("string birleştirm : ", birlestirme);
