//tek parametre aldıgında parantex kullanmaya gerek yok
//return tek satırdan oluştuğunda tek sıra halinde yazılabilir
// const kareAlan = kenar =>kenar**2;
// const sonuc = kareAlan(6);
// console.log(sonuc);

// const can = () => 'can';
// const sonuc2= can();
// console.log(sonuc2);


//arrow function şeklinde yaz
// const fatura = function (urunler,vergi) {
//    let toplam =0;
//    for(let i=0; i<urunler.length;i++){
//       toplam += urunler[i]+urunler[i]*vergi;
//    }
//    return toplam;
// }


const fatura = (urunler,vergi) =>{
   let toplam =0;
   for(let i=0; i<urunler.length;i++){
      toplam += urunler[i]+urunler[i]*vergi;
   }
   return toplam;
}

console.log(fatura([10,20,30] , 0.25));


