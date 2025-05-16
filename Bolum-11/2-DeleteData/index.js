localStorage.setItem('name','can');
localStorage.setItem('age',23);

let ad = localStorage.getItem('name');
let yas = localStorage.getItem('age');
console.log(ad,yas);

localStorage.setItem('name','can boz');
localStorage.age=24;
ad = localStorage.getItem('name');
yas = localStorage.getItem('age');
console.log(ad,yas);
//localStorage.clear(); hepsini siler
localStorage.removeItem('name');
ad = localStorage.getItem('name');

console.log(ad,yas);
