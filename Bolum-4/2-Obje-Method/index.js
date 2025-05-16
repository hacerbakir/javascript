let student = {
    ad: 'Can',
    yas: 23,
    email: 'cnbz@gmail.com',
    sinif: 2,
    dersler: ['mat', 'fen', 'fizik'],
    login() {
        console.log('öğrenci giriş yaptı');
    },
    logout() {
        console.log('öğrenci çıkış yaptı');
    }
    //obje içerisinde arrow func kullanılamaz
};

console.log(student.login());

console.log(student.logout());
