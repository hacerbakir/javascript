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

gettodos('example/can.json')
.then(data =>{
    console.log("promise 1",data);
    return gettodos('example/osman.json')
}).then(data =>{
    console.log("promise 2",data);
    return gettodos('example/tuba.json')
}).then(data =>{
    console.log("promise 3",data);
}).catch(err=>{
    console.log(err);
})


