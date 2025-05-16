const form = document.querySelector('.signupForm');
const userName = document.querySelector('#username');
form.addEventListener('submit', e => {
    e.preventDefault();//sayfa yenilenmesini engeller
    // console.log('Form gönderildi');
    //console.log(userName.value);
    console.log(form.username.value);
})
