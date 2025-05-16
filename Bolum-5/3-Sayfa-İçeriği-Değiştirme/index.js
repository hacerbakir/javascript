// const pDegeri = document.querySelector('p');
// console.log(pDegeri.innerText);

// pDegeri.innerText='hacer Bakır :D';

// const pDegeri = document.querySelectorAll('p');

// pDegeri.forEach(a=>{
//     console.log(a.innerText);
//     a.innerText += ' yeni alan '; 
// })

const icerik = document.querySelector('.icerik');
console.log(icerik.innerHTML);

icerik.innerHTML+='<h2> elaelaelaela </h2>';

const ogrenciler = ['can', 'tuba','elif'];
ogrenciler.forEach(ogrenci=>{
    icerik.innerHTML+=`<p> ${ogrenci} </p> `
})
