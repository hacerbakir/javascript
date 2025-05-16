//Regular Expression : Düzenli İfade : metinler içerisinde tekrar eden yapıları tespit etmeye yönelik kullanılan arama yapısıdır.
// // aralarında yazılır. regex formatında can arıyoruz = /can/
// ^ başında bir şey olmmaası lazım = /^can/
// $ sonunda bir şey olmaması lazım =/can$/
// karakter kontrolü için = /[a-z]/ istenilen aralık belirtilir. büyük harf kullanılmak istendiği büyük harf şeklinde ifade etmek yeterli
//  /[a-z]{5,10}/ süslü parantez içerisinde arancak karakter sayısı belirtilir
// /[a-z0-9]{5,10}/ 0-9 arasında belirtilerek sayı kontrolü yapılır
//özel karakterler için bütün karakterleri temsil eden . yı kullanacağız /./



const username='333canbozas';
const pattern = /[a-z]{6,10}/;

// let sonuc = pattern.test(username);
// console.log(sonuc);

// if(sonuc){
//     console.log('başarılı');

// }else{
//     console.log('başarısız');
// }

let sonuc= username.search(pattern);
//yoksa -1 varsa 0 veya pozitif değer döner

console.log(sonuc);


