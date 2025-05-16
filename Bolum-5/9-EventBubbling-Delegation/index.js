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
ul.addEventListener('click', e=>{
    console.log(e.target);

    if(e.target.tagName==='LI'){
        e.target.remove();
    }

})
//ul.remove();

liElemanları.forEach(eleman=>{
    eleman.addEventListener('click',e=>{
        //bir işlem yapıldıgında parent ında yapılan işlemlerden childlar da etkilendiğinden eventbubbling oluşuyor bunu önlemek için child de saece oradaki işlemi varsaymak için stopPropagation kullanılır 
        e.stopPropagation();
        //e.target.remove();
        console.log(e.target);

    })
})


button.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.textContent='javaScript';

   // ul.append(li); //appand sona ekler
    ul.prepend(li); //prepend başa ekler
    
})

//
