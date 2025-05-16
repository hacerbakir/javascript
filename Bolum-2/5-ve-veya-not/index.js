// && ve operatörü || veya operatörü
//! not operatörü

const password ="kls!djsdfgsdggksdf";

if(password.length>12 && password.includes('!')){
   console.log("güçlü şifre ");
}else if(password.length>8){
   console.log("orta seviyede güçlü");
}else{
   console.log("zayıf şifre");
}

const kontrol = false;

if(!kontrol){
   console.log("kontrol başarılı");
}


