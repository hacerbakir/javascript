const gettodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {

        if (request.readyState === 4 && request.status === 200) {


            const data = JSON.parse(request.responseText)
            callback(undefined, data);



        } else if (request.readyState === 4) {

            callback('başarısız !', undefined);

        }
    })

    request.open('GET', resource)
    request.send();

}

gettodos('example/can.json', (err, data) => {
   
        console.log(data);
        gettodos('example/osman.json', (err, data) => {
           
            console.log(data);
        });
        gettodos('example/tuba.json', (err, data) => {
           
            console.log(data);
        });
});

