fetch ('example/can.json')
.then(response =>{
    return response.json()
}).then(data =>{
console.log(data);
}).catch(err=>{
    console.log(err);
});

//fetch promise döner


