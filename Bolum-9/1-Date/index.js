const now = new Date();
console.log(now);
console.log(typeof now);

console.log('Year : ',now.getFullYear());
console.log('Mounth : ',now.getMonth()+1); //0.indexten başlanılmasından kaynaklı
console.log('Day : ',now.getDate());
console.log('Gün : ',now.getDay());
console.log('Hours : ',now.getHours());
console.log('Minutes : ',now.getMinutes());
console.log('seconds : ',now.getSeconds());

console.log('timestamp : ',now.getTime()); //1 ocak 1970 tarihinden itibaren milisaniye olarak ne kadar zamna geçtiğini gösterir
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());



