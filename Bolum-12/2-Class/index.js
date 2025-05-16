class User{
    constructor(username,email){
        this.username=username;
        this.email=email;
    }
    login(){
        return `${this.username} giriş yaptı`;
    }
    logout(){
        return `${this.username} çıkış yaptı`;
    }
}

const userOne = new User('can','c@gmail.com');
const userTwo = new User('nida','n@gmail.com');
console.log(userOne.login());
console.log(userTwo.logout());
