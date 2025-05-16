const form= document.querySelector('.signupForm');
const message= document.querySelector('.message');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const username=form.username.value;
    
    const usernamePattern = /^[a-z]{6,10}$/;
    if(usernamePattern.test(username)){
        message.textContent='Başarılı';
    }else{
        message.textContent=' 6-10 arasında hepsini küçük harf girinı';

    }

})





