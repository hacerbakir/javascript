const userOne ={
    username:'Can',
    email:'cc@gmail.com',
    login(){
        console.log('can giriş yaptı')
    },
    logour(){
        console.log('can çıkış yaptı')

    }
}

console.log(userOne.email);
const userTwo ={
    username:'Osman',
    email:'osman@gmail.com',
    login(){
        console.log('osman giriş yaptı')
    },
    logour(){
        console.log('osman çıkış yaptı')

    }
}

console.log(userTwo.login);
//her seferinde obje oluşyurmak yerine class yaparız ve obje için sadece veri tarız oluşturur.




