class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    login() {
        console.log(`${this.username} giriş yaptı`);
        return this
    }
    logout() {
        console.log(`${this.username} çıkış yaptı`);
        return this

    }
}

//user ın içerisinde yer almayan ama adminde kullanmak istediğim parametreler için constructor aç
class Admin extends User {

    constructor(username,email,title){
        super(username,email); //parent ımın constructor ına super ile sub class ımdan parametreleri yollamam gerekiyor
        this.title=title;

    }
    

    deleteUser(userArrived) {
        users = users.filter(user => user.username !== userArrived.username);
    }
}


const userOne = new User('can', 'c@gmail.com');
const userTwo = new User('nida', 'n@gmail.com');
const userThree = new Admin('hacer', 'n@gmail.com','Texttitle');

console.log(userThree);





