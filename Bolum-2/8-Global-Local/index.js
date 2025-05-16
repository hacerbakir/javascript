//globalde tanımlana değer her yerde kullanılır.
let yas = 29;


if(true){
   //if içerisinde tanımlandıgında sadece burada kullanılır.
   let yas=60;
   console.log("içerideki : " + yas);
}

console.log("dışarıdaki : "+ yas);

