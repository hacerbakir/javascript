const gettodos = (callback)=>{
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        //console.log(request,request.readyState);
        if (request.readyState === 4 && request.status ===200) {
           // console.log(request.responseText);//json 
            callback(undefined, request.responseText);
        }else if(request.readyState === 4){
           // console.log('başarısız !');
           callback('başarısız !',undefined);

        }
    })
    
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
    request.send();

}    

gettodos((err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);

    }
});

