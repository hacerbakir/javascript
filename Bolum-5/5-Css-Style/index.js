const baslik = document.querySelector('h1');

//ovverride yapılır padding 50 px verir ama rengi gitti mesela doğru kullanım değil
//baslik.setAttribute('style', 'padding:50px');

//bu şekilde üzerine yazılmaz
console.log(baslik.style);
baslik.style.padding='50px';
baslik.style.fontSize='60px';
baslik.style.fontWeight='bold';



