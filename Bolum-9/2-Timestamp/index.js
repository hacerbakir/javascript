const startDate= new Date('08/15/2018 9:45:00');
const now= new Date();
// console.log(startDate);

const diff = now.getTime()-startDate.getTime();

console.log(diff);

const mins = Math.round(diff/1000/60); // iki tarih arasındaki dakika farkı
console.log(`kurs videosu  : ${mins} dakika önce başlanıldı`);
const hours = Math.round(mins/60);
console.log(`kurs videosu : ${hours} saat önce başlanıldı`);
const days = Math.round(hours/24);
console.log(`kurs videosu : ${days} gün önce başlanıldı`);
const years = Math.round(days/365);
console.log(`kurs videosu : ${years} yıl önce başlanıldı`);

const timestamp = 170750669295;
console.log(new Date(timestamp));
