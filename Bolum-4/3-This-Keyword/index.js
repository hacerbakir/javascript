let student = {
    ad: 'Can',
    yas: 23,
    email: 'cnbz@gmail.com',
    sinif: 2,
    dersler: ['mat', 'fen', 'fizik'],
    //regular function kullanılma amacaı obje içerisinde başka propertiye erişmek için  kullanılıyor/
    login() {
        console.log('öğrenci giriş yaptı');
    },
    logout() {
        console.log('öğrenci çıkış yaptı');
    },
    printLessons(){
        // console.log(this);
        console.log(this.dersler);
        this.dersler.forEach(ders=>{
            console.log(ders);
        })

    }
};
// console.log(this);
student.printLessons();


