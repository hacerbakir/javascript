// sort : sıralama işlemi yapmak istediğimizde kullanırız.
//reverse : srıalama işleminde ters işlemler yapılmak istenildiğinde kullanılır

const names = ['can', 'tuba', 'elif', 'hakan', 'osman'];
names.sort();
console.log(names);
names.reverse();
console.log(names);


const points = [70, 75, 25, 3, 35, 10, 80, 27];
//sıralama işleminde sadece ilk karakteri kıyasladıkları için 3 27 den sonra geliyor 
// points.sort();
// points.reverse();
points.sort((a, b) => b - a);
points.sort((a, b) => a - b);
console.log(points);


const students = [
    { name: 'can', point: 40 },
    { name: 'tuba', point: 60 },
    { name: 'elif', point: 30 },
    { name: 'osman', point: 100 },

];

// students.sort((a,b)=>{
//     if(a.point>b.point){
//         return -1;
//     }
//     else if(b.point>a.point){
//         return 1;
//     }else{
//         return 0;
//     }

// })
//yukarıdakinin kkısa yazılımı 
students.sort((a, b) => b.point - a.point);
console.log(students);
