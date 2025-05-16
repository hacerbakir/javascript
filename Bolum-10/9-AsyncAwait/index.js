//async bir fonk her zaman promise döndürür

const getTodos = async()=>{
    //await promises chaine işini yapıyo.
    let response = await fetch('example/can.json');
    if(response.status!==200){
        throw new Error("doğru end point e istek atılmadı");
    }


    const data = response.json();
    console.log(data);

    return data;

};

getTodos().then((response)=>{
    console.log(response);
}).catch((err)=>{
    console.log(err);
})


