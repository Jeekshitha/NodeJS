const https = require('https');
https.get('https://jsonplaceholder.typicode.com/todos/',(resp) => { //for more than one record we can make link + the number.
    let data ="";
    resp.on('data',(chunk) => {
        data += chunk;
    });
    resp.on('end',() => {
        console.log(JSON.parse(data));
        console.log(data);
    });
}).on("error" ,(err) => {
    console.log("Error : "+err.message);
});