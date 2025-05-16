const notlar = [15, 45, 36, 5, 65, 95, 78];
for (let i = 0; i < notlar.length; i++) {
   if (notlar[i] === 36) {
      continue;
   }

   console.log(notlar[i]);

   if (notlar[i] === 95) {
      console.log("en yüksek not : " + notlar[i]);
      break;
   }
}



