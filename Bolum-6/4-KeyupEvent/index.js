const form= document.querySelector('.signupForm');
const message= document.querySelector('.message');
const usernamePattern = /^[a-z]{6,10}$/;


form.addEventListener('submit',e=>{
    e.preventDefault();
    const username=form.username.value;
    
   
    if(usernamePattern.test(username)){
        message.textContent='Başarılı';
    }else{
        message.textContent=' 6-10 arasında hepsini küçük harf girinı';

    }

})

form.username.addEventListener('keyup',e=>{
    //console.log(e.target.value);//form.username.value ile e.target.value aynı şey ama isim değişikliği oldugunda target kullandıgında değiştirmene gerek kalmadıgından kullan
    if(usernamePattern.test(e.target.value)){
        console.log('basarılı')
        form.username.setAttribute('class','success');

    }else{

        console.log('basarısız')
        form.username.setAttribute('class','error');

    }


})



