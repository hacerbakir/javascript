// const dersler = [
//     {isim : 'mat', puan : 90},
//     {isim : 'fen', puan : 60},
//     {isim : 'ing', puan : 55},
// ]



let student = {
    ad: 'Can',
    yas: 23,
    email: 'cnbz@gmail.com',
    sinif: 2,
    dersler :[
        {isim : 'mat', puan : 90},
        {isim : 'fen', puan : 60},
        {isim : 'ing', puan : 55},
    ],
        login() {
        console.log('öğrenci giriş yaptı');
    },
    logout() {
        console.log('öğrenci çıkış yaptı');
    },
    printLessons(){
        console.log(this.dersler);
        this.dersler.forEach(a=>{
            console.log(a.isim,a.puan);
        })

    }
};
student.printLessons();


