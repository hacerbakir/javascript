const icerik = document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('ela');

icerik.classList.remove('error');
const pDegeri = document.querySelectorAll('p');

pDegeri.forEach(element =>{
console.log    (element.textContent)
    if(element.textContent.includes('error')){
        element.classList.add('error');
    }
    if(element.textContent.includes('success')){
        element.classList.add('success');
    }
    
});

