// const a = (callBackA)=>{
//     let yas =40;
//     callBackA(yas);
// };

// a(function (params) {
//     console.log(params);
// })

let students = ["can", "elif", "tuğba","melih"];
// students.forEach(function () 
// {
//     console.log("helloğ");    
// })

// students.forEach(function (kisi, index) 
// {
//     console.log(kisi, index);    
// })

// const student = (person, index)=>{
//     console.log(`${index} - ${person}`);
// }

// students.forEach(student);

const ulum=document.querySelector('.main');

let html = ``;
students.forEach(student=>{
    html += `<li>${student}</li>`
})

ulum.innerHTML=html;


