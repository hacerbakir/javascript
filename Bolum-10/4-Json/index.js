const gettodos = (callback)=>{
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        //console.log(request,request.readyState);
        if (request.readyState === 4 && request.status ===200) {

            //JSON.parse(), dizeden(string) JSON verilerini ayrıştırmak için kullanılır. 
            //JSON.stringify(), JavaScript nesnesini(object) dizeye dönüştürmek için kullanılır. 
            //XMLHttpRequest() ile aldığımız yanıt bir string ifadedir
            const data =JSON.parse(request.responseText)
            callback(undefined, data);


           // console.log(request.responseText);//json 
            // callback(undefined, request.responseText);
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

