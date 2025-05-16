//const hata=document.querySelector('p');
//const hata=document.querySelector('.error');
// const hata=document.querySelector('div.error');
// console.log(hata);
//dom : document object module : html dosyalarının içerisindeki nesnelere ulaşmak iin tasarlanan bir model

const hatalar = document.querySelectorAll('p');
console.log(hatalar);

console.log(hatalar[1]);

hatalar.forEach(hata=>{
    console.log(hata);
})

