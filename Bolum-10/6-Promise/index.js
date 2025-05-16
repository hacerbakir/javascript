const gettodos = (resource) => {

    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
    
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);

            } else if (request.readyState === 4) {
                reject("başarısız");

            }
        })
    
        request.open('GET', resource)
        request.send();
    })

}

gettodos('example/can.json').then(data =>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})


const getIt = () => {
    return new Promise((resolve, reject) => {
       // resolve("başarılı data");
        reject("başarısız data");
    })
}
// getIt().then(
//     data => {
//         console.log("başarılı", data);
//     }, 
//     err => {
//         console.log("başarısıoz", err);

//     }
// ) tavsiye edilen kullanım değil 


getIt()
    .then(
        data => {
            console.log("başarılı : ", data);
        },)
        .catch( err =>{
            console.log("başarısız : ", err);

        })


