const button = document.querySelector('button');
// button.addEventListener('click',()=>{
//     console.log('tıkladı');
// })

const liElemanları = document.querySelectorAll('li');
// liElemanları.forEach(eleman=>{
//     eleman.addEventListener('click', e=>{
//         console.log(e);
//         console.log(e.target);
//         console.log('Li tıklandı');
//         e.target.style.color='blue';

//     })
// })

const ul= document.querySelector('ul');
//ul.remove();

liElemanları.forEach(eleman=>{
    eleman.addEventListener('click',e=>{
        e.target.remove();
    })
})


button.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.textContent='javaScript';

    ul.append(li); //appand sona ekler
    ul.prepend(li); //prepend başa ekler
    
})
