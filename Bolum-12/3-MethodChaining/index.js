class User{
    constructor(username,email){
        this.username=username;
        this.email=email;
    }
    login(){
        console.log(`${this.username} giriş yaptı`);
        return this
    }
    logout(){
        console.log(`${this.username} çıkış yaptı`);
        return this

    }
}
const userOne = new User('can','c@gmail.com');
const userTwo = new User('nida','n@gmail.com');
//console.log(userOne.login());
//console.log(userTwo.logout());
console.log(userOne.login().logout());
